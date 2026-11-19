#!/usr/bin/env python3
"""Cloudflare Pages API deployment management for AxiomID/OpenIdentity.

Implements deployment management using Cloudflare Pages API instead of wrangler CLI.
"""

import os
import json
import requests
import subprocess
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, Optional

ROOT = Path(__file__).resolve().parents[0]
FRONTEND = ROOT / "frontend"
DIST = ROOT / "dist"


def get_cloudflare_api_token() -> str:
    """Get Cloudflare API token from environment or prompt."""
    token = os.environ.get("CF_API_TOKEN")
    if not token:
        raise ValueError("CF_API_TOKEN environment variable required for Pages API deployment")
    return token


def get_cloudflare_account_id() -> str:
    """Get Cloudflare account ID from environment or prompt."""
    account_id = os.environ.get("CF_ACCOUNT_ID")
    if not account_id:
        raise ValueError("CF_ACCOUNT_ID environment variable required for Pages API deployment")
    return account_id


def build_agentic_index() -> None:
    """Build the agentic index for discovery."""
    print("Building agentic index...")
    subprocess.run(["python3", "scripts/build_agentic_index.py"], check=True)


def validate_build() -> None:
    """Validate the build with npm check."""
    print("Validating build...")
    subprocess.run(["npm", "run", "check"], check=True)


class CloudflarePagesAPI:
    """Cloudflare Pages API client for deployment management."""

    def __init__(self, api_token: str, account_id: str):
        self.api_token = api_token
        self.account_id = account_id
        self.base_url = "https://api.cloudflare.com/client/v4"
        self.headers = {
            "Authorization": f"Bearer {api_token}",
            "Content-Type": "application/json"
        }

    def create_pages_project(self, project_name: str) -> Dict[str, Any]:
        """Create a new Pages project."""
        url = f"{self.base_url}/accounts/{self.account_id}/pages/projects"
        payload = {
            "name": project_name,
            "production_branch": "main",
            "build_config": {
                "build_command": "npm run build",
                "destination_dir": "frontend",
                "root_dir": "."
            }
        }

        response = requests.post(url, headers=self.headers, json=payload)
        response.raise_for_status()
        return response.json()["result"]

    def list_pages_projects(self) -> list:
        """List all Pages projects."""
        url = f"{self.base_url}/accounts/{self.account_id}/pages/projects"
        response = requests.get(url, headers=self.headers)
        response.raise_for_status()
        return response.json()["result"]

    def create_deployment(self, project_name: str, source_dir: str, branch: str = "main") -> Dict[str, Any]:
        """Create a new deployment for a Pages project."""
        url = f"{self.base_url}/accounts/{self.account_id}/pages/projects/{project_name}/deployments"

        # Create deployment
        payload = {
            "name": f"{project_name}-{datetime.now().strftime('%Y%m%d%H%M%S')}",
            "production": False,
            "branch": branch,
            "strategy": "rolling"
        }

        response = requests.post(url, headers=self.headers, json=payload)
        response.raise_for_status()
        deployment = response.json()["result"]

        # Upload deployment files (simplified - assumes source is already structured for Pages)
        # In practice, you'd need to upload files to the deployment
        print(f"Created deployment {deployment['id']} for project {project_name}")

        return deployment

    def get_deployment_status(self, project_name: str, deployment_id: str) -> Dict[str, Any]:
        """Get deployment status."""
        url = f"{self.base_url}/accounts/{self.account_id}/pages/projects/{project_name}/deployments/{deployment_id}"
        response = requests.get(url, headers=self.headers)
        response.raise_for_status()
        return response.json()["result"]

    def list_deployments(self, project_name: str) -> list:
        """List all deployments for a project."""
        url = f"{self.base_url}/accounts/{self.account_id}/pages/projects/{project_name}/deployments"
        response = requests.get(url, headers=self.headers)
        response.raise_for_status()
        return response.json()["result"]


def main():
    """Main deployment function using Cloudflare Pages API."""
    print("=== Cloudflare Pages API Deployment Management ===")

    try:
        api_token = get_cloudflare_api_token()
        account_id = get_cloudflare_account_id()
        worker_name = os.environ.get("WORKER_NAME", "openidentity-md")
        compat_date = os.environ.get("COMPAT_DATE", "2026-08-05")

        api = CloudflarePagesAPI(api_token, account_id)

        # Build and validate
        build_agentic_index()
        validate_build()

        # List existing projects
        print("\nExisting Pages projects:")
        projects = api.list_pages_projects()
        for project in projects:
            print(f"  - {project['name']} (id: {project['id']})")

        # Create or find the Pages project
        project_name = worker_name
        project = None
        for p in projects:
            if p["name"] == project_name:
                project = p
                break

        if not project:
            print(f"\nCreating new Pages project: {project_name}")
            project = api.create_pages_project(project_name)
            print(f"Created project {project['name']} (id: {project['id']})")

        # Create deployment
        print(f"\nCreating deployment for project {project_name}...")
        deployment = api.create_deployment(project_name, str(FRONTEND))

        # Wait for deployment to complete
        deployment_id = deployment["id"]
        print(f"Monitoring deployment {deployment_id}...")

        # Poll deployment status
        while True:
            status = api.get_deployment_status(project_name, deployment_id)
            status_text = status.get("status", "unknown")

            if status_text == "success":
                print(f"Deployment {deployment_id} completed successfully!")
                break
            elif status_text == "failure":
                print(f"Deployment {deployment_id} failed!")
                raise RuntimeError(f"Deployment failed: {status.get('error_message', 'Unknown error')}")
            else:
                print(f"Deployment {deployment_id} status: {status_text}...")

            import time
            time.sleep(5)

        # List all deployments
        print(f"\nAll deployments for project {project_name}:")
        deployments = api.list_deployments(project_name)
        for deployment in deployments:
            print(f"  - {deployment['id']}: {deployment['status']} ({deployment.get('created_on', 'unknown time')})")

        print(f"\nDeployment complete! Live at https://{worker_name}.pages.dev")

    except Exception as e:
        print(f"Error: {e}")
        return 1

    return 0


if __name__ == "__main__":
    exit(main())

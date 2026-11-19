-- PAI-Memory D1 schema for AxiomID/OpenIdentity.
-- Apply with: npx wrangler d1 execute pai-memory --file=scripts/providers/pai_memory_schema.sql

create table if not exists profiles (
  id text primary key,
  display_name text not null,
  controller_type text not null,
  manifest_url text not null,
  verification_state text not null default 'self-attested',
  languages text not null default '["en"]',
  protocols text not null default '[]',
  created_at text not null default (datetime('now')),
  updated_at text not null default (datetime('now'))
);

create table if not exists access_requests (
  id text primary key,
  profile_id text,
  requester_email text not null,
  requested_resource text not null,
  consent_marketing integer not null default 0,
  status text not null default 'pending',
  created_at text not null default (datetime('now'))
);

create table if not exists discovery_events (
  id text primary key,
  profile_id text,
  event_type text not null,
  source text,
  metadata text not null default '{}',
  created_at text not null default (datetime('now'))
);

create index if not exists profiles_verification_idx on profiles (verification_state);
create index if not exists access_requests_profile_status_idx on access_requests (profile_id, status);
create index if not exists discovery_events_profile_created_idx on discovery_events (profile_id, created_at desc);
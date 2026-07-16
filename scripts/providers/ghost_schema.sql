-- Ghost Postgres MVP schema for AxiomID/OpenIdentity.
-- Apply with your preferred Postgres client after setting GHOST_DATABASE_URL.

create extension if not exists pgcrypto;

create table if not exists profiles (
  id text primary key,
  display_name text not null,
  controller_type text not null,
  manifest_url text not null,
  verification_state text not null default 'self-attested',
  languages text[] not null default array['en'],
  protocols text[] not null default array[]::text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists access_requests (
  id uuid primary key default gen_random_uuid(),
  profile_id text references profiles(id),
  requester_email text not null,
  requested_resource text not null,
  consent_marketing boolean not null default false,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists discovery_events (
  id uuid primary key default gen_random_uuid(),
  profile_id text,
  event_type text not null,
  source text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists profiles_protocols_idx on profiles using gin (protocols);
create index if not exists profiles_languages_idx on profiles using gin (languages);
create index if not exists access_requests_profile_status_idx on access_requests (profile_id, status);
create index if not exists discovery_events_profile_created_idx on discovery_events (profile_id, created_at desc);

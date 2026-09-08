create extension if not exists pgcrypto;

do $$
begin
  create type lead_status as enum ('NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'WON', 'LOST', 'SPAM');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name varchar(100) not null,
  company varchar(150),
  email varchar(254) not null,
  phone varchar(50),
  project_type varchar(100),
  estimated_budget varchar(100),
  expected_timeline varchar(100),
  existing_system varchar(100),
  message varchar(3000) not null,
  status lead_status not null default 'NEW',
  source varchar(100) not null default 'nxenable.co',
  ip_hash varchar(128),
  user_agent varchar(300),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_email_idx on public.leads (email);

create or replace function public.set_leads_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
before update on public.leads
for each row execute function public.set_leads_updated_at();

comment on table public.leads is 'NXENABLE contact leads. Access through the server-side service role only.';
comment on column public.leads.ip_hash is 'One-way hash for abuse prevention; never store raw IP addresses.';

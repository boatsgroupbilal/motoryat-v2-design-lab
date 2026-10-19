-- V2 isolated draft workflow. Apply ONLY to the new V2 Supabase project.
-- This creates new tables; does not modify production listings.
create extension if not exists pgcrypto;
create table if not exists public.v2_listing_store_members (
 store_id uuid not null,
 user_id uuid not null references auth.users(id) on delete cascade,
 role text not null check(role in ('owner','editor')),
 primary key(store_id,user_id)
);
create table if not exists public.v2_listing_drafts (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 store_id uuid,
 kind text not null check(kind in ('Satılık','Kiralık')),
 vessel_type text not null,
 title text not null check(char_length(title) between 3 and 180),
 payload jsonb not null default '{}'::jsonb,
 status text not null default 'draft' check(status='draft'),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create index if not exists v2_listing_drafts_owner_idx on public.v2_listing_drafts(owner_id,created_at desc);
alter table public.v2_listing_store_members enable row level security;
alter table public.v2_listing_drafts enable row level security;
revoke all on public.v2_listing_store_members from anon;
revoke all on public.v2_listing_drafts from anon;
grant select on public.v2_listing_store_members to authenticated;
grant select,insert on public.v2_listing_drafts to authenticated;
drop policy if exists "v2_members_read_own" on public.v2_listing_store_members;
create policy "v2_members_read_own" on public.v2_listing_store_members
 for select to authenticated using(user_id=auth.uid());
drop policy if exists "v2_drafts_read_owned" on public.v2_listing_drafts;
create policy "v2_drafts_read_owned" on public.v2_listing_drafts
 for select to authenticated using(owner_id=auth.uid());
drop policy if exists "v2_drafts_insert_own_authorized_store" on public.v2_listing_drafts;
create policy "v2_drafts_insert_own_authorized_store" on public.v2_listing_drafts
 for insert to authenticated with check(
  owner_id=auth.uid() and status='draft'
  and (store_id is null or exists (
   select 1 from public.v2_listing_store_members m
   where m.store_id=v2_listing_drafts.store_id and m.user_id=auth.uid()
   and m.role in ('owner','editor')
  ))
 );
-- Store memberships must be provisioned by an administrator using
-- an authenticated admin workflow, never by an unauthenticated client.
-- Do not grant client INSERT/UPDATE privileges on membership table.

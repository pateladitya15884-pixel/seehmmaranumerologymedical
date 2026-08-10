create table public.registrations (
    id uuid primary key default gen_random_uuid(),
    full_name text not null,
    phone_number text not null,
    email text not null,
    city text not null,
    created_at timestamptz default now()
);

grant insert on public.registrations to anon, authenticated;
grant select on public.registrations to authenticated;
grant all on public.registrations to service_role;

alter table public.registrations enable row level security;

create policy "Anyone can register"
on public.registrations
for insert
to anon, authenticated
with check (true);

create policy "Admins can view registrations"
on public.registrations
for select
to authenticated
using (true);


-- CREATE TABLE FOR PROMPT RENFORT ASSIGNMENTS

create table public.assignments (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  deadline_date date not null,
  deadline_time time not null,
  school_name text not null,
  city text not null,
  country text not null,
  grade_level text not null,
  language text not null,
  target_age_range text,
  assignment_code text not null unique,
  qr_code_url text,
  teacher_hash text not null,
  timezone text not null,
  created_by uuid not null references public.profiles(id) on delete cascade,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

-- ENABLE ROW LEVEL SECURITY
alter table public.assignments enable row level security;

-- POLICY: Only the creator (teacher) can see their assignments
create policy "Teachers can view their own assignments"
  on public.assignments
  for select
  using (auth.uid() = created_by);

-- POLICY: Only the creator (teacher) can insert assignments
create policy "Teachers can insert their own assignments"
  on public.assignments
  for insert
  with check (auth.uid() = created_by);

-- POLICY: Only the creator (teacher) can update their assignments
create policy "Teachers can update their own assignments"
  on public.assignments
  for update
  using (auth.uid() = created_by);

-- POLICY: Only the creator (teacher) can delete their assignments
create policy "Teachers can delete their own assignments"
  on public.assignments
  for delete
  using (auth.uid() = created_by);

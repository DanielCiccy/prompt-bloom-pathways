
-- Create assignment_feedback table for educator suggestions (anonymous, assignment optional)
create table public.assignment_feedback (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid references public.assignments(id) on delete set null,
  suggestion_feedback text not null,
  teacher_hash text not null,
  created_at timestamp with time zone not null default now()
);

-- Enable RLS for assignment_feedback
alter table public.assignment_feedback enable row level security;

-- Policy: Feedback submitters can view and delete their feedback (matched by teacher_hash)
create policy "Teachers can view their own feedback"
  on public.assignment_feedback
  for select
  using (teacher_hash = (select teacher_hash from public.assignments where public.assignments.id = assignment_id limit 1));

create policy "Teachers can submit feedback"
  on public.assignment_feedback
  for insert
  with check (true);

create policy "Teachers can delete their own feedback"
  on public.assignment_feedback
  for delete
  using (teacher_hash = (select teacher_hash from public.assignments where public.assignments.id = assignment_id limit 1));

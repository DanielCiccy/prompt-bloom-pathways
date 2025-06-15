
-- Création de la table des profils utilisateurs, synchronisée avec l'authentification Supabase.
create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  first_name text,
  last_name text,

  primary key (id)
);

-- Fonction pour insérer automatiquement un profil lors de la création d'un nouvel utilisateur
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, first_name, last_name)
  values (new.id, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name');
  return new;
end;
$$;

-- Déclencheur : chaque nouvel utilisateur ajouté à auth.users crée une entrée dans profiles
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- (Conseillé) Activer la Row Level Security pour plus de sécurité
alter table public.profiles enable row level security;

-- Règle : un utilisateur ne voit que son propre profil
create policy "Users can view own profile"
  on public.profiles
  for select
  using (auth.uid() = id);

-- Règle : un utilisateur ne modifie que son propre profil
create policy "Users can update own profile"
  on public.profiles
  for update
  using (auth.uid() = id);



-- Permettre la lecture publique d'un devoir si le code d’assignement est fourni
CREATE POLICY "Allow read assignment by code"
  ON public.assignments
  FOR SELECT
  USING (assignment_code IS NOT NULL);

-- (optionnel) Vérifie que RLS est activé :
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;

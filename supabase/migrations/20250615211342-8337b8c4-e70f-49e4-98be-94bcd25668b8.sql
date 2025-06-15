
-- Correction : Définir explicitement le search_path à 'public'
CREATE OR REPLACE FUNCTION public.check_merci_cooldown(p_user_id uuid, p_location_hash text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO public
AS $function$
DECLARE
  last_merci_time TIMESTAMP WITH TIME ZONE;
BEGIN
  -- Get the most recent merci at this location for this user
  SELECT created_at INTO last_merci_time
  FROM public.merci_records
  WHERE user_id = p_user_id 
    AND location_hash = p_location_hash
  ORDER BY created_at DESC
  LIMIT 1;
  
  -- If no previous merci or more than 5 minutes ago, allow
  IF last_merci_time IS NULL OR 
     last_merci_time < (now() - INTERVAL '5 minutes') THEN
    RETURN TRUE;
  ELSE
    RETURN FALSE;
  END IF;
END;
$function$;

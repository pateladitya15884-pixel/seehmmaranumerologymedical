-- Correcting security risk: Restrict registrant data access.
-- The previous policy used 'true' for select, which allowed any authenticated user to see all data.
-- We now change it to 'false' to ensure data can only be accessed via service_role/admin helpers.

DROP POLICY IF EXISTS "Admins can view registrations" ON public.registrations;

CREATE POLICY "Admins can view registrations"
ON public.registrations
FOR SELECT
TO authenticated
USING (false);

-- Ensure the grants are also correct
GRANT INSERT ON public.registrations TO anon, authenticated;
GRANT SELECT ON public.registrations TO authenticated;
GRANT ALL ON public.registrations TO service_role;

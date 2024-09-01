import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cbwjtkqtzvevowqomddz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNid2p0a3F0enZldm93cW9tZGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMzE3MTYsImV4cCI6MjA0MDcwNzcxNn0.HUbwh3I5OBsrCVJyWQ5I9xe5ABvvZsGblmvZIiG44qc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

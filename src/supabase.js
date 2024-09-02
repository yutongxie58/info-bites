import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://your-supabase-url";
const supabaseKey = "your-supabase-key";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

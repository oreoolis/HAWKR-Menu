import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.REACT_APP_SUPABASEURL;
const supabaseKey = process.env.REACT_APP_SUPABASEKEY;

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://vsdzzqnnwaeirpzrzvnd.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(
  "https://vsdzzqnnwaeirpzrzvnd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzZHp6cW5ud2FlaXJwenJ6dm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxMzM0MDEsImV4cCI6MjAwNDcwOTQwMX0.IBoLGanIglEQc69bkxVBOxoZnl6byXly7rPdY3E57so"
);

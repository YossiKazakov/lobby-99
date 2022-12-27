// Use this for configuration settings instead of scattering config "constants"
// throughout your application

// export const SUPABASE_URL = process.env.SUPABASE_URL;
// export const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
export const SUPABASE_URL = "https://hrevtgszllmsjyihcait.supabase.co"
export const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyZXZ0Z3N6bGxtc2p5aWhjYWl0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2OTczNzU5NywiZXhwIjoxOTg1MzEzNTk3fQ.qRXASIZfO6Q4OZL-6cGoon6C8AFYv_f9IONBc-lb_zE"

export const READ_ENDPOINT = "/api/read/";
export const MEMBERS_TABLE_NAME = "lobby_members_data";
// NOTE: the common approach is to set these values from environment variables
// and not to have the values "hard-coded" with the code.
// Then, you use the host or wherever the process is running to set the variables
// and you read them in here
// So if you do that it will look something like:
// export const API_BASE = process.env.API_BASE
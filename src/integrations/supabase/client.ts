// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://njebvhqgzuxoakhnhhwl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZWJ2aHFnenV4b2FraG5oaHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNDM4NjYsImV4cCI6MjA1MDcxOTg2Nn0.sEejo4Y0Wz68X_JHRudZBDc8fjlqxqXFMQfUjsJ4fRM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
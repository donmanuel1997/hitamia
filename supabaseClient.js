import { createClient } from "@supabase/supabase-js"
import { APP_SUPABASE_URL, APP_SUPABASE_ANON_KEY } from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = APP_SUPABASE_URL
const supabaseAnonKey = APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    localStorage: AsyncStorage,
});
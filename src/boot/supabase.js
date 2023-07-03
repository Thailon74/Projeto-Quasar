import { createClient } from '@supabase/supabase-js'
import UseAuthUser from '../composables/useAuthUser'

const supabaseURL = 'https://ddqkgeyodsbzioamlsmr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkcWtnZXlvZHNiemlvYW1sc21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNDE5MDIsImV4cCI6MjAwMzkxNzkwMn0.K0Ko1-l9dpFJIkzw0g4iVDaub5xLIg4tG-ozdRkxGlM'
const supabase = createClient(supabaseURL, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
    const { user } = UseAuthUser()

    user.value = session?.user || null
})

export default function useSupabase() {
    return { supabase }
}
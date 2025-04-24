import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jrwcjidqlwkhskfhjlix.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impyd2NqaWRxbHdraHNrZmhqbGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MDMwODgsImV4cCI6MjA2MTA3OTA4OH0.e0xem4ctvRVSO2NH805SniEVMMfHPDk_olXXyJa8_Bs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
  
  if (error) {
    console.error('Erro ao buscar produtos:', error)
    return []
  }
  
  return data || []
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Erro ao buscar produto:', error)
    return null
  }
  
  return data
}

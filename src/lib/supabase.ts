import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jrwcjidqlwkhskfhjlix.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impyd2NqaWRxbHdraHNrZmhqbGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MDMwODgsImV4cCI6MjA2MTA3OTA4OH0.e0xem4ctvRVSO2NH805SniEVMMfHPDk_olXXyJa8_Bs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Funções auxiliares para interagir com o banco de dados
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
    console.error(`Erro ao buscar produto com ID ${id}:`, error)
    return null
  }
  
  return data
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
  
  if (error) {
    console.error('Erro ao buscar categorias:', error)
    return []
  }
  
  return data || []
}

export async function getBrands() {
  const { data, error } = await supabase
    .from('brands')
    .select('*')
  
  if (error) {
    console.error('Erro ao buscar marcas:', error)
    return []
  }
  
  return data || []
}

export async function createUser(userData: any) {
  const { data, error } = await supabase
    .from('users')
    .insert([userData])
    .select()
  
  if (error) {
    console.error('Erro ao criar usuário:', error)
    return null
  }
  
  return data?.[0] || null
}

export async function createOrder(orderData: any) {
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
  
  if (error) {
    console.error('Erro ao criar pedido:', error)
    return null
  }
  
  return data?.[0] || null
}

export async function createOrderItems(orderItems: any[]) {
  const { data, error } = await supabase
    .from('order_items')
    .insert(orderItems)
  
  if (error) {
    console.error('Erro ao criar itens do pedido:', error)
    return false
  }
  
  return true
}

export async function getOrdersByUserId(userId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('user_id', userId)
  
  if (error) {
    console.error(`Erro ao buscar pedidos do usuário ${userId}:`, error)
    return []
  }
  
  return data || []
}

export async function getOrderItemsByOrderId(orderId: string) {
  const { data, error } = await supabase
    .from('order_items')
    .select('*, products(*)')
    .eq('order_id', orderId)
  
  if (error) {
    console.error(`Erro ao buscar itens do pedido ${orderId}:`, error)
    return []
  }
  
  return data || []
}

export async function getDeliverySettings(zipCode: string) {
  const { data, error } = await supabase
    .from('delivery_settings')
    .select('*')
    .eq('zip_code', zipCode)
    .single()
  
  if (error) {
    console.error(`Erro ao buscar configurações de entrega para o CEP ${zipCode}:`, error)
    return null
  }
  
  return data
}

export async function getAppSettings() {
  const { data, error } = await supabase
    .from('app_settings')
    .select('*')
    .single()
  
  if (error) {
    console.error('Erro ao buscar configurações do aplicativo:', error)
    return null
  }
  
  return data
}

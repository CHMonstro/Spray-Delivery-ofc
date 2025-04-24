'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Montana Black 400ml',
      price: 39.90,
      imageUrl: '',
      brand: 'Montana',
      color: '#000000',
      quantity: 2
    },
    {
      id: '3',
      name: 'Colorgin Arte Urbana 400ml',
      price: 29.90,
      imageUrl: '',
      brand: 'Colorgin',
      color: '#FF0000',
      quantity: 1
    }
  ])
  
  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }
  
  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const deliveryFee = 10.90
  const total = subtotal + deliveryFee
  
  return (
    <div className="container-main">
      <h1 className="text-3xl font-bold mb-6">Carrinho de Compras</h1>
      
      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-xl mb-4">Seu carrinho está vazio</p>
          <Link href="/produtos" className="btn-primary inline-block">
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item, index) => (
                <div key={item.id} className={`p-4 flex items-center ${index !== 0 ? 'border-t' : ''}`}>
                  <div className="bg-gray-200 w-20 h-20 rounded flex items-center justify-center mr-4">
                    {item.imageUrl ? (
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-gray-400 text-xs">
                        Sem imagem
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <h3 className="font-semibold">{item.name}</h3>
                    {item.color && (
                      <div className="flex items-center mt-1">
                        <div 
                          className="w-4 h-4 rounded-full border border-gray-300 mr-1" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-gray-600">{item.color}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center mr-4">
                    <button 
                      className="bg-gray-200 px-2 py-1 rounded-l"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-3 py-1">{item.quantity}</span>
                    <button 
                      className="bg-gray-200 px-2 py-1 rounded-r"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right mr-4">
                    <p className="font-bold text-primary">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </p>
                    <p className="text-sm text-gray-500">
                      R$ {item.price.toFixed(2).replace('.', ',')} cada
                    </p>
                  </div>
                  
                  <button 
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Link href="/produtos" className="text-primary hover:underline">
                &larr; Continuar Comprando
              </Link>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Frete</span>
                  <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                  <span>Total</span>
                  <span className="text-primary">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">CEP</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Digite seu CEP"
                />
              </div>
              
              <button className="btn-primary w-full mb-2">
                Finalizar Compra
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Frete calculado para entrega em até 40 minutos
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  
  // Dados de exemplo para um produto
  const product = {
    id: params.id,
    name: 'Montana Black 400ml',
    price: 39.90,
    imageUrl: '',
    brand: 'Montana',
    color: '#000000',
    description: 'A tinta spray Montana Black é uma tinta de alta pressão, com secagem rápida e acabamento fosco. Ideal para graffiti e arte urbana, possui alta cobertura e é resistente a intempéries.',
    stock: 15
  }
  
  const handleAddToCart = () => {
    alert(`Produto ${product.name} adicionado ao carrinho! Quantidade: ${quantity}`)
  }
  
  return (
    <div className="container-main">
      <div className="mb-4">
        <Link href="/produtos" className="text-primary hover:underline">
          &larr; Voltar para Produtos
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
            {product.imageUrl ? (
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="text-gray-400">
                Sem imagem
              </div>
            )}
          </div>
          
          <div>
            <p className="text-gray-500 mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold text-secondary mb-4">{product.name}</h1>
            
            <p className="text-2xl font-bold text-primary mb-6">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
            
            {product.color && (
              <div className="mb-6">
                <p className="text-gray-700 mb-2">Cor:</p>
                <div className="flex items-center">
                  <div 
                    className="w-8 h-8 rounded-full border border-gray-300 mr-2" 
                    style={{ backgroundColor: product.color }}
                  />
                  <span>{product.color}</span>
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <p className="text-gray-700 mb-2">Quantidade:</p>
              <div className="flex items-center">
                <button 
                  className="bg-gray-200 px-3 py-1 rounded-l-lg"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="bg-gray-100 px-4 py-1">{quantity}</span>
                <button 
                  className="bg-gray-200 px-3 py-1 rounded-r-lg"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                >
                  +
                </button>
                <span className="ml-4 text-gray-500">
                  {product.stock} disponíveis
                </span>
              </div>
            </div>
            
            <button 
              className="btn-primary w-full mb-4"
              onClick={handleAddToCart}
            >
              Adicionar ao Carrinho
            </button>
            
            <button className="w-full py-2 px-4 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-colors">
              Comprar Agora
            </button>
          </div>
        </div>
        
        <div className="p-6 border-t">
          <h2 className="text-xl font-bold mb-4">Descrição</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

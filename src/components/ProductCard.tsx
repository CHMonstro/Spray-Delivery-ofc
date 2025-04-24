import { useState } from 'react'
import Link from 'next/link'

type ProductCardProps = {
  id: string
  name: string
  price: number
  imageUrl: string
  brand: string
  color?: string
}

export default function ProductCard({ id, name, price, imageUrl, brand, color }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300"
      style={{ transform: isHovered ? 'translateY(-5px)' : 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/produtos/${id}`}>
        <div className="relative h-48 bg-gray-200">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Sem imagem
            </div>
          )}
          {color && (
            <div 
              className="absolute bottom-2 right-2 w-6 h-6 rounded-full border border-gray-300" 
              style={{ backgroundColor: color }}
              title={`Cor: ${color}`}
            />
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{brand}</p>
        <h3 className="text-lg font-semibold mb-2 text-secondary">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-primary font-bold">
            R$ {price.toFixed(2).replace('.', ',')}
          </p>
          <button className="bg-primary text-white p-2 rounded-full hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

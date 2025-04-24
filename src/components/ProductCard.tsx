import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 relative">
        {product.image_url ? (
          <Image 
            src={product.image_url} 
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-300">
            <span className="text-gray-500">Sem imagem</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
        <p className="text-gray-700 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold">R$ {product.price?.toFixed(2)}</span>
          <Link href={`/produtos/${product.id}`} className="bg-primary text-white px-3 py-1 rounded hover:bg-opacity-90">
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  )
}

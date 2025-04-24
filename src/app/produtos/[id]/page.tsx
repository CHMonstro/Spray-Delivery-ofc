import { getProductById } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)
  
  if (!product) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <p>O produto que você está procurando não existe ou foi removido.</p>
        <Link href="/produtos" className="text-primary hover:underline mt-4 inline-block">
          Voltar para produtos
        </Link>
      </div>
    )
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-80 bg-gray-200 relative rounded-lg overflow-hidden">
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
        
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.brand}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          
          {product.color && (
            <div className="mb-4">
              <span className="font-semibold">Cor:</span> {product.color}
            </div>
          )}
          
          <div className="mb-6">
            <span className="text-2xl font-bold text-primary">R$ {product.price?.toFixed(2)}</span>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90">
              Adicionar ao carrinho
            </button>
            <Link href="/produtos" className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

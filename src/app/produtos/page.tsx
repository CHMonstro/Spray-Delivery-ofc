import { getProducts } from '@/lib/supabase'
import ProductCard from '@/components/ProductCard'

export default async function ProdutosPage() {
  // Buscar produtos do Supabase
  const products = await getProducts()
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Produtos</h1>
      
      {products.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p>Nenhum produto encontrado. Volte em breve!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
  // Dados de exemplo para produtos
  const exampleProducts = [
    {
      id: '1',
      name: 'Montana Black 400ml',
      price: 39.90,
      imageUrl: '',
      brand: 'Montana',
      color: '#000000'
    },
    {
      id: '2',
      name: 'Montana Gold 400ml',
      price: 45.90,
      imageUrl: '',
      brand: 'Montana',
      color: '#FFD700'
    },
    {
      id: '3',
      name: 'Colorgin Arte Urbana 400ml',
      price: 29.90,
      imageUrl: '',
      brand: 'Colorgin',
      color: '#FF0000'
    },
    {
      id: '4',
      name: 'Posca PC-5M',
      price: 32.90,
      imageUrl: '',
      brand: 'Posca',
      color: '#FFFFFF'
    },
    {
      id: '5',
      name: 'Máscara de Proteção',
      price: 59.90,
      imageUrl: '',
      brand: 'Proteção',
    },
    {
      id: '6',
      name: 'Luvas de Proteção',
      price: 25.90,
      imageUrl: '',
      brand: 'Proteção',
    }
  ]

  return (
    <div className="container-main">
      <h1 className="text-3xl font-bold mb-6">Produtos</h1>
      
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="px-4 py-2 bg-primary text-white rounded-full">Todos</button>
          <button className="px-4 py-2 bg-white text-secondary rounded-full border border-gray-300">Tintas Spray</button>
          <button className="px-4 py-2 bg-white text-secondary rounded-full border border-gray-300">Acessórios</button>
          <button className="px-4 py-2 bg-white text-secondary rounded-full border border-gray-300">Proteção</button>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="px-4 py-2 bg-white text-secondary rounded-lg border border-gray-300">
            <option value="">Todas as Marcas</option>
            <option value="montana">Montana</option>
            <option value="colorgin">Colorgin</option>
            <option value="posca">Posca</option>
          </select>
          
          <select className="px-4 py-2 bg-white text-secondary rounded-lg border border-gray-300">
            <option value="">Ordenar por</option>
            <option value="price_asc">Menor Preço</option>
            <option value="price_desc">Maior Preço</option>
            <option value="name_asc">A-Z</option>
            <option value="name_desc">Z-A</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {exampleProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            brand={product.brand}
            color={product.color}
          />
        ))}
      </div>
    </div>
  )
}

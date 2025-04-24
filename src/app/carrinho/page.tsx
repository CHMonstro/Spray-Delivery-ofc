import Link from 'next/link'

export default function CarrinhoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Carrinho de Compras</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center py-8">
          <p className="text-xl mb-4">Seu carrinho está vazio</p>
          <Link href="/produtos" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90">
            Ver produtos
          </Link>
        </div>
      </div>
    </div>
  )
}

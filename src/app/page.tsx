import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Spray Delivery</h1>
        <p className="text-xl">O seu delivery de tintas spray e produtos para arte urbana</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-2">Tintas Spray</h2>
          <p>Encontre as melhores marcas de tintas spray para sua arte.</p>
          <a href="/produtos" className="text-primary hover:underline mt-2 inline-block">Ver produtos</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-2">Acessórios</h2>
          <p>Tudo o que você precisa para sua arte urbana.</p>
          <a href="/produtos" className="text-primary hover:underline mt-2 inline-block">Ver produtos</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-2">Proteção</h2>
          <p>Equipamentos de proteção para artistas.</p>
          <a href="/produtos" className="text-primary hover:underline mt-2 inline-block">Ver produtos</a>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Como funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">1</div>
            <h3 className="font-bold">Escolha seus produtos</h3>
            <p>Navegue pelo nosso catálogo e adicione itens ao carrinho</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">2</div>
            <h3 className="font-bold">Faça seu pedido</h3>
            <p>Informe seu endereço e escolha a forma de pagamento</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">3</div>
            <h3 className="font-bold">Receba em casa</h3>
            <p>Acompanhe seu pedido e receba no conforto da sua casa</p>
          </div>
        </div>
      </section>
    </div>
  )
}

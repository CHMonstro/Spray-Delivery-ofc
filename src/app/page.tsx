import Link from 'next/link'

export default function Home() {
  return (
    <div className="container-main py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Spray Delivery</h1>
        <p className="text-xl text-secondary">
          Seu aplicativo de delivery para tintas spray e produtos de arte urbana
        </p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Spray Delivery</h2>
        <p className="mb-4">
          Encontre as melhores tintas spray e produtos para arte urbana com entrega rápida e segura.
        </p>
        <div className="flex justify-center mt-6">
          <Link href="/produtos" className="btn-primary mr-4">
            Ver Produtos
          </Link>
          <Link href="/sobre" className="btn-secondary">
            Sobre Nós
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-primary">Produtos de Qualidade</h3>
          <p>Oferecemos as melhores marcas de tintas spray e produtos para arte urbana.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-primary">Entrega Rápida</h3>
          <p>Receba seus produtos em casa com rapidez e segurança.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-primary">Atendimento Especializado</h3>
          <p>Nossa equipe está pronta para ajudar você a encontrar o produto ideal.</p>
        </div>
      </section>
    </div>
  )
}

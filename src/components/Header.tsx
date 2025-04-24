import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container-main py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Spray Delivery
          </Link>
          
          {/* Menu para dispositivos móveis */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          
          {/* Menu para desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/produtos" className="hover:text-accent transition-colors">
              Produtos
            </Link>
            <Link href="/categorias" className="hover:text-accent transition-colors">
              Categorias
            </Link>
            <Link href="/marcas" className="hover:text-accent transition-colors">
              Marcas
            </Link>
            <Link href="/carrinho" className="hover:text-accent transition-colors">
              Carrinho
            </Link>
            <Link href="/minha-conta" className="hover:text-accent transition-colors">
              Minha Conta
            </Link>
          </nav>
        </div>
        
        {/* Menu móvel expandido */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            <Link href="/produtos" className="block hover:text-accent transition-colors">
              Produtos
            </Link>
            <Link href="/categorias" className="block hover:text-accent transition-colors">
              Categorias
            </Link>
            <Link href="/marcas" className="block hover:text-accent transition-colors">
              Marcas
            </Link>
            <Link href="/carrinho" className="block hover:text-accent transition-colors">
              Carrinho
            </Link>
            <Link href="/minha-conta" className="block hover:text-accent transition-colors">
              Minha Conta
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

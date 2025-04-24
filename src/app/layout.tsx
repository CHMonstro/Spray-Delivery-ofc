import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spray Delivery',
  description: 'Aplicativo de delivery para tintas spray e produtos para arte urbana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-primary text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Spray Delivery</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Início</a></li>
                <li><a href="/produtos" className="hover:underline">Produtos</a></li>
                <li><a href="/carrinho" className="hover:underline">Carrinho</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-secondary text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2025 CH Monstro - Spray Delivery. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

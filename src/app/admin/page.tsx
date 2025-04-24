'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  
  // Dados de exemplo para o painel administrativo
  const stats = {
    totalOrders: 156,
    pendingOrders: 12,
    totalProducts: 48,
    lowStockProducts: 5,
    totalUsers: 87,
    totalRevenue: 12450.90
  }
  
  const recentOrders = [
    { id: '1001', customer: 'João Silva', date: '24/04/2025', status: 'Entregue', total: 89.70 },
    { id: '1002', customer: 'Maria Oliveira', date: '23/04/2025', status: 'Em entrega', total: 145.80 },
    { id: '1003', customer: 'Pedro Santos', date: '23/04/2025', status: 'Processando', total: 67.90 },
    { id: '1004', customer: 'Ana Costa', date: '22/04/2025', status: 'Pendente', total: 112.50 },
    { id: '1005', customer: 'Lucas Ferreira', date: '22/04/2025', status: 'Entregue', total: 78.40 }
  ]
  
  return (
    <div className="container-main py-8">
      <h1 className="text-3xl font-bold mb-8">Painel Administrativo</h1>
      
      <div className="flex flex-wrap mb-6">
        <button 
          className={`px-4 py-2 mr-2 mb-2 rounded-lg ${activeTab === 'dashboard' ? 'bg-primary text-white' : 'bg-white text-secondary border border-gray-300'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`px-4 py-2 mr-2 mb-2 rounded-lg ${activeTab === 'products' ? 'bg-primary text-white' : 'bg-white text-secondary border border-gray-300'}`}
          onClick={() => setActiveTab('products')}
        >
          Produtos
        </button>
        <button 
          className={`px-4 py-2 mr-2 mb-2 rounded-lg ${activeTab === 'orders' ? 'bg-primary text-white' : 'bg-white text-secondary border border-gray-300'}`}
          onClick={() => setActiveTab('orders')}
        >
          Pedidos
        </button>
        <button 
          className={`px-4 py-2 mr-2 mb-2 rounded-lg ${activeTab === 'users' ? 'bg-primary text-white' : 'bg-white text-secondary border border-gray-300'}`}
          onClick={() => setActiveTab('users')}
        >
          Usuários
        </button>
        <button 
          className={`px-4 py-2 mr-2 mb-2 rounded-lg ${activeTab === 'settings' ? 'bg-primary text-white' : 'bg-white text-secondary border border-gray-300'}`}
          onClick={() => setActiveTab('settings')}
        >
          Configurações
        </button>
      </div>
      
      {activeTab === 'dashboard' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Pedidos</h3>
              <div className="flex justify-between">
                <div>
                  <p className="text-3xl font-bold text-primary">{stats.totalOrders}</p>
                  <p className="text-sm text-gray-500">Total de pedidos</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-orange-500">{stats.pendingOrders}</p>
                  <p className="text-sm text-gray-500">Pendentes</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Produtos</h3>
              <div className="flex justify-between">
                <div>
                  <p className="text-3xl font-bold text-primary">{stats.totalProducts}</p>
                  <p className="text-sm text-gray-500">Total de produtos</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-red-500">{stats.lowStockProducts}</p>
                  <p className="text-sm text-gray-500">Estoque baixo</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Receita</h3>
              <div>
                <p className="text-3xl font-bold text-primary">
                  R$ {stats.totalRevenue.toFixed(2).replace('.', ',')}
                </p>
                <p className="text-sm text-gray-500">Total de vendas</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {stats.totalUsers} usuários cadastrados
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Pedidos Recentes</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Cliente</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Data</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Total</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map(order => (
                    <tr key={order.id}>
                      <td className="px-4 py-3 text-sm">{order.id}</td>
                      <td className="px-4 py-3 text-sm">{order.customer}</td>
                      <td className="px-4 py-3 text-sm">{order.date}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Entregue' ? 'bg-green-100 text-green-800' :
                          order.status === 'Em entrega' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Processando' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        R$ {order.total.toFixed(2).replace('.', ',')}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button className="text-primary hover:underline">Ver detalhes</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'products' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Gerenciar Produtos</h2>
            <button className="btn-primary">Adicionar Produto</button>
          </div>
          <p className="text-gray-500">
            Esta seção permitirá gerenciar produtos (adicionar, editar, remover).
            Implementação completa será conectada ao banco de dados Supabase.
          </p>
        </div>
      )}
      
      {activeTab === 'orders' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Gerenciar Pedidos</h2>
          <p className="text-gray-500">
            Esta seção permitirá visualizar e gerenciar pedidos.
            Implementação completa será conectada ao banco de dados Supabase.
          </p>
        </div>
      )}
      
      {activeTab === 'users' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Gerenciar Usuários</h2>
          <p className="text-gray-500">
            Esta seção permitirá gerenciar usuários.
            Implementação completa será conectada ao banco de dados Supabase.
          </p>
        </div>
      )}
      
      {activeTab === 'settings' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Configurações</h2>
          <p className="text-gray-500">
            Esta seção permitirá configurar taxas de entrega, áreas de cobertura e outras configurações do aplicativo.
            Implementação completa será conectada ao banco de dados Supabase.
          </p>
        </div>
      )}
    </div>
  )
}

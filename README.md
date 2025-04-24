# Spray Delivery

Este é um aplicativo de e-commerce e delivery especializado na venda de tintas spray e produtos relacionados à arte urbana. Inspirado no modelo do Zé Delivery da AMBEV, o Spray Delivery permite que os usuários naveguem por um catálogo de produtos, adicionem itens ao carrinho, realizem pedidos e acompanhem suas entregas.

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase (Banco de Dados)

## Funcionalidades

- Cadastro e login de usuários
- Navegação por catálogo de produtos
- Filtragem por categorias e marcas
- Carrinho de compras
- Checkout e pagamento
- Painel administrativo
- Gerenciamento de pedidos

## Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

## Estrutura do Projeto

- `src/app`: Páginas da aplicação
- `src/components`: Componentes reutilizáveis
- `src/lib`: Funções utilitárias e configuração do Supabase

## Licença

© 2025 Spray Delivery. Todos os direitos reservados.

# Documentação do Projeto Precedent

## Visão Geral
O Precedent é um boilerplate opinativo para projetos Next.js, fornecendo componentes, hooks e utilitários pré-construídos para acelerar o desenvolvimento de aplicações web modernas.

## Arquitetura
- **Monólito Full-Stack**: Frontend e backend (APIs) no mesmo repositório usando Next.js App Router.
- **Autenticação Externa**: Clerk gerencia usuários, login e sessões.
- **Frontend-Only com Suporte a APIs**: Pode adicionar rotas API em `app/api/` se necessário.

## Estrutura de Diretórios
```
precedent/
├── app/                    # Páginas e layouts (App Router)
│   ├── fonts/             # Configuração de fontes
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz com ClerkProvider
│   ├── middleware.ts      # Middleware para autenticação
│   ├── page.tsx           # Página inicial
│   └── sitemap.ts         # Sitemap dinâmico
├── components/            # Componentes reutilizáveis
│   ├── home/              # Componentes da página inicial
│   ├── layout/            # Navbar e Footer
│   └── shared/            # Componentes compartilhados (modais, tooltips, etc.)
├── lib/                   # Utilitários e hooks
│   ├── constants.ts       # Constantes
│   ├── utils.ts           # Funções utilitárias
│   └── hooks/             # Hooks customizados
├── public/                # Assets estáticos
├── .env.local             # Variáveis de ambiente (não commitado)
├── next.config.js         # Configuração Next.js
├── tailwind.config.js     # Configuração Tailwind CSS
├── package.json           # Dependências
└── tsconfig.json          # Configuração TypeScript
```

## Tecnologias Principais
- **Next.js 14**: Framework React com App Router para SSR/SSG.
- **React 18**: Biblioteca para construção de interfaces.
- **TypeScript**: Tipagem estática para melhor DX e segurança.
- **Tailwind CSS**: Framework CSS utility-first.
- **Clerk**: Plataforma de autenticação (login, registro, perfis).
- **Radix UI**: Componentes primitivos acessíveis.
- **Framer Motion**: Animações.
- **Vercel**: Deploy e analytics.

## Componentes Chave
- **Layout**: `app/layout.tsx` envolve tudo com `ClerkProvider`.
- **Middleware**: Protege rotas via Clerk.
- **Navbar/Footer**: Navegação e rodapé responsivos.
- **Hooks**: `useIntersectionObserver`, `useLocalStorage`, `useScroll` para funcionalidades comuns.

## Como Funciona
1. **Autenticação**: ClerkProvider no layout gerencia estado de auth.
2. **Roteamento**: App Router do Next.js para páginas em `app/`.
3. **Estilização**: Tailwind para classes utilitárias, PostCSS para processamento.
4. **Build**: Next.js compila para produção com otimização automática.

## Configuração Inicial
1. Instalar dependências: `pnpm install`.
2. Configurar Clerk: Adicionar chaves em `.env.local`.
3. Executar dev: `pnpm dev`.
4. Deploy: Vercel com env vars configuradas.

## Extensões
- Adicione APIs em `app/api/`.
- Customize componentes em `components/`.
- Use hooks em `lib/hooks/` para lógica reutilizável.

Para mais detalhes, consulte o README original e a documentação do Next.js/Clerk.
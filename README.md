# Astro Boilerplate

Um boilerplate moderno e otimizado para SEO usando Astro, React, AWS e GitHub Actions.

## 🚀 Tecnologias

### Core
- **Framework:** [Astro](https://astro.build/) v5.3.0 com [React](https://reactjs.org/)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + MerakiUI
- **Gerenciador:** PNPM

### Otimizações
- **SEO**
  - Meta tags dinâmicas
  - OpenGraph e Twitter Cards
  - Schema.org (JSON-LD)
  - Sitemap automático
  - Robots.txt dinâmico
  - Headers de segurança

- **Performance**
  - Otimização de imagens (Sharp)
  - Code splitting
  - Minificação CSS/JS
  - Cache otimizado
  - Compressão Brotli/Gzip

### Infraestrutura
- **Deploy:** Amazon S3 + CloudFront
- **CI/CD:** GitHub Actions
- **Automação:** AWS CLI

### Desenvolvimento
- **UI/UX:** Storybook
- **Linting:** ESLint + Prettier
- **Editor:** EditorConfig
- **Conteúdo:** Markdown (preparado para CMS)

## 📦 Estrutura do Projeto

```text
  /
  ├── .github/             # Configurações CI/CD
  ├── public/              # Assets estáticos
  ├── scripts/             # Scripts de automação
  ├── src/
  │   ├── pages/           # Configurações de rotas e páginas
  │   ├── shared/          # Código compartilhado
  │   │   ├── components/  # Componentes React/Astro
  │   │   ├── config/      # Configurações
  │   │   ├── layouts/     # Layouts base
  │   │   ├── styles/      # Estilos globais
  │   │   └── utils/       # Utilitários
  └── content/             # Conteúdo em Markdown
```

## 🛠 Comandos

```bash
# Instalação
pnpm install

# Desenvolvimento
pnpm dev          # Inicia servidor local
pnpm build        # Build de produção
pnpm preview      # Preview do build

# Utilitários
pnpm generate-robots  # Gera robots.txt
pnpm storybook       # Inicia Storybook
```

## 🔧 Configuração

1. Clone o repositório
2. Crie um arquivo `.env` baseado no `.env.example`
3. Configure as variáveis de ambiente:

```env
# Site
PUBLIC_SITE_URL=https://seu-site.com

# AWS (para deploy)
AWS_S3_BUCKET=seu-bucket
AWS_REGION=sa-east-1
AWS_CLOUDFRONT_DISTRIBUTION_ID=sua-distribution
```

## 🚀 Deploy

O deploy é automatizado via GitHub Actions quando há push na branch main. O processo:
1. Build do projeto
2. Geração do robots.txt
3. Upload para S3
4. Invalidação do cache CloudFront

## 🔍 SEO

O projeto inclui:
- Meta tags otimizadas
- OpenGraph para redes sociais
- Schema.org para rich snippets
- Sitemap automático
- Robots.txt dinâmico
- Headers de segurança e performance

## 📱 Performance

Otimizações implementadas:
- Imagens WebP otimizadas
- Code splitting
- CSS/JS minificados
- Cache configurado
- Compressão habilitada

## 🔐 Segurança

- HTTPS forçado
- Headers de segurança
- CSP configurado
- HSTS habilitado

## Tailwind CSS e MerakiUI

Este projeto utiliza o Tailwind CSS em conjunto com o MerakiUI para estilização e componentes de interface do usuário. O Tailwind CSS fornece utilitários de baixo nível para construir estilos personalizados, enquanto o MerakiUI oferece componentes pré-construídos que podem ser facilmente integrados e personalizados usando o Tailwind CSS.

## 📚 Documentação Adicional

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MerakiUI](https://merakiui.com/docs)
- [AWS S3](https://aws.amazon.com/s3/)
- [CloudFront](https://aws.amazon.com/cloudfront/)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

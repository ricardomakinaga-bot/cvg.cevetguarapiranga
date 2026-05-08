# Centro Veterinario Guarapiranga - Site Institucional

Implementacao Astro/Tailwind/MDX do site institucional CVG para `RMA-42`.

Instância Paperclip: https://paperclip.rmakinaga.com.br/

## Documentos CVG

- `docs/brand/01_brand_book_cvg.md`
- `docs/brand/02_visual_identity_guidelines.md`
- `docs/brand/03_ai_brand_guidelines.md`
- `docs/brand/04_social_media_guidelines.md`
- `docs/brand/05_design_system_foundation.md`
- `docs/brand/06_public_brand_validation.md`
- `docs/brand/07_google_reviews_source_decision.md`

## Desenvolvimento

```bash
npm install
npm run dev
npm run build
```

Rotas implementadas:

- `/`
- `/sobre`
- `/servicos`
- `/servicos/atendimento-24h`
- `/servicos/consultas-checkup`
- `/servicos/exames-laboratorio`
- `/servicos/internacao`
- `/servicos/cirurgia`
- `/servicos/vacinas`
- `/servicos/banho-e-tosa`
- `/blog`
- `/blog/[slug]`
- `/campanhas`
- `/campanhas/[slug]`
- `/contato`

## Conteudo

O conteudo aprovado fica em `src/content`:

- `src/content/pages`: paginas institucionais e servicos
- `src/content/blog`: 3 artigos MDX
- `src/content/campaigns`: 3 campanhas MDX

Os schemas estao em `src/content/config.ts`.

## Configuracao segura

Este projeto nao versiona `.env` real. Use `.env.example` como referencia para valores publicos e nao sensiveis.

- `PUBLIC_CVG_WHATSAPP_URL`: URL publica do WhatsApp, sem token ou credencial.
- `PUBLIC_CVG_MAPS_URL`: URL publica de mapa/rota, sem credencial.

O formulario esta preparado como placeholder seguro para futura integracao. Nao exponha webhook privado n8n, tokens ou credenciais no bundle cliente.

## Deploy Docker/Caddy

Build e execucao local:

```bash
docker compose up --build
```

O container final usa Caddy servindo `dist/` em `/srv`. Para VPS, aponte o dominio no Caddy externo ou substitua o host `:80` do `Caddyfile` pelo dominio aprovado. Defina apenas variaveis publicas no ambiente de build quando necessario; segredos nao devem ser usados no frontend.

# RMA-29 - UX de consentimento para Google Ads, GA4 e GTM

Data: 2026-05-06
Owner de UX: UXDesigner
Origem: RMA-20 / RMA-29
Entrega desbloqueadora: RMA-25

Esta especificacao define a experiencia de consentimento necessaria antes de publicar Google Ads, GA4, GTM ou Google tag na landing CVG. Ela nao substitui revisao juridica, politica de privacidade, politica de cookies, configuracao administrativa Google ou QA em navegador.

Referencias usadas:

- RMA-24: `docs/ads/rma-24-google-ads-tracking-map.md`
- RMA-23: `docs/ux/rma-23-google-ads-conversion-ux.md`
- Fundacao visual CVG: `docs/brand/05_design_system_foundation.md`
- Identidade visual CVG: `docs/brand/02_visual_identity_guidelines.md`
- Google Consent Mode: https://developers.google.com/tag-platform/security/guides/consent
- Google consent mode reference: https://support.google.com/analytics/answer/13802165
- ANPD - Guia orientativo Cookies e protecao de dados pessoais: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais
- LGPD compilada: https://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2018/Lei/L13709compilado.htm

## 1. Scope

Esta entrega cobre:

- arquitetura de UX para consentimento/cookies na landing de Google Ads;
- regras de banner, painel de preferencias e link permanente de alteracao;
- estados de aceite, rejeicao, personalizacao e revogacao;
- comportamento mobile/desktop sem bloquear CTAs criticos da landing;
- mapeamento UX para Consent Mode v2;
- tokens, componentes, acessibilidade e criterios de aceite para CTO implementar.

Fora de escopo para UXDesigner:

- texto juridico final, politica de privacidade ou politica de cookies;
- decisao legal sobre base juridica, retencao, DPO/encarregado e documentacao formal;
- configuracao de Google Ads, GA4, GTM, conversion labels ou tags;
- producao editorial/SEO/campanha;
- implementacao em Astro/Tailwind;
- browser QA, screenshots, viewport testing, overlap detection e validacao runtime.

Decisao de produto recomendada: usar uma experiencia propria simples para a landing somente se CEO/juridico aprovarem a politica de cookies e o texto legal. Se uma CMP externa for aprovada antes da implementacao, a CMP deve respeitar a mesma IA, hierarquia, tokens e criterios abaixo.

## 2. UX goal

Objetivo principal: permitir que tutores entendam e controlem o uso de cookies/tecnologias de analytics e publicidade sem perder acesso rapido a WhatsApp, telefone, rota ou atendimento.

Lentes aplicadas: WCAG POUR, clinical clarity, cognitive load, information scent, hierarchy, Fitts's Law, accessibility-by-default, responsive constraints, component reuse, trust signals.

O consentimento deve:

- ser claro antes de tags de advertising/analytics coletarem dados;
- oferecer aceitar, rejeitar opcionais e personalizar com pesos visuais equilibrados;
- evitar dark patterns, medo, urgencia manipulativa ou pre-selecao enganosa;
- manter o fluxo de emergencia/contato sempre acessivel;
- separar cookies necessarios de analytics, publicidade/medicao e personalizacao;
- permitir alteracao posterior de preferencias por caminho permanente.

## 3. Layout structure

### Componentes de consentimento

1. `ConsentBanner`
   - Primeiro ponto de contato para visitantes sem escolha registrada.
   - Posicao desktop: canto inferior ou faixa inferior alinhada ao container, sem cobrir header, hero CTA ou formulario.
   - Posicao mobile: bottom sheet compacto acima da barra mobile de contato quando ela existir.
   - Conteudo maximo: titulo curto, texto estrutural, link para politica, tres acoes.

2. `ConsentPreferencesPanel`
   - Painel modal/dialog para configuracao granular.
   - Deve abrir a partir de "Personalizar" no banner e do link permanente no rodape.
   - Deve conter categorias em lista, com descricao curta e toggle/estado.
   - Desktop: dialog centralizado ou side panel com largura maxima de 560 px.
   - Mobile: bottom sheet/dialog em tela quase cheia, com rolagem interna e acoes fixas no rodape do painel.

3. `ConsentStatusLink`
   - Link permanente no rodape: "Preferencias de privacidade".
   - Tambem pode aparecer na politica de privacidade/cookies.
   - Deve reabrir o painel para alterar ou revogar escolhas.

4. `ConsentToast`
   - Feedback discreto apos salvar preferencias: "Preferencias salvas".
   - Nao usar vermelho nem bloquear navegacao.

### Fluxo de primeira visita

1. Usuario abre a landing.
2. CTO define Consent Mode v2 com defaults antes de qualquer `config`, `event`, GTM/Google tag ou medicao.
3. Banner aparece se nao houver escolha persistida.
4. Usuario escolhe:
   - "Aceitar todos";
   - "Rejeitar opcionais";
   - "Personalizar".
5. Sistema atualiza consentimento na mesma pagina antes de transicao de pagina ou abertura de destino quando tecnicamente aplicavel.
6. Escolha fica persistida em armazenamento first-party nao sensivel, sem dado pessoal.

### Fluxo de retorno

1. Usuario retorna com escolha persistida.
2. Banner nao reaparece.
3. Defaults de Consent Mode devem ser aplicados de acordo com a escolha salva antes de tags.
4. Link "Preferencias de privacidade" permite alterar ou revogar.

### Fluxo sem JavaScript ou falha de consentimento

- Se a camada de consentimento falhar, tags opcionais de analytics/advertising nao devem disparar.
- A landing deve continuar mostrando informacao, WhatsApp, telefone e rota.
- Consentimento nao pode ser pre-condicao para atendimento ou contato.

## 4. Component rules

### ConsentBanner

Estrutura:

- Titulo: "Privacidade e cookies"
- Texto estrutural, pendente de revisao legal: "Usamos cookies necessarios para o site funcionar e, com sua permissao, tecnologias de analytics e publicidade para medir campanhas e melhorar a experiencia."
- Link: "Ver politica de privacidade" ou "Ver politica de cookies" quando existir URL aprovada.
- Acoes:
  - "Aceitar todos"
  - "Rejeitar opcionais"
  - "Personalizar"

Regras:

- Nenhuma acao pode ficar escondida em tooltip, menu secundario ou texto pequeno.
- "Aceitar todos" nao pode ser o unico botao destacado.
- "Rejeitar opcionais" deve ter a mesma facilidade de toque que aceitar.
- Banner nao deve usar linguagem de perda, medo ou bloqueio.
- Banner nao deve usar vermelho.
- Banner nao deve impedir WhatsApp/telefone, principalmente em emergencia.

### ConsentPreferencesPanel

Categorias e mapeamento:

| Categoria UX | Estado inicial | Controle | Consent Mode v2 |
| --- | --- | --- | --- |
| Necessarios | Sempre ativo | Sem toggle, informativo | Nao mapeia para Ads/GA4; apenas funcionamento essencial |
| Analytics | Desativado ate consentimento | Toggle | `analytics_storage` |
| Publicidade e medicao | Desativado ate consentimento | Toggle | `ad_storage`, `ad_user_data` |
| Personalizacao de anuncios | Desativado ate consentimento | Toggle | `ad_personalization` |

Notas:

- "Publicidade e medicao" cobre mensuracao de cliques/conversoes de campanha. Nao deve sugerir venda de dados.
- "Personalizacao de anuncios" deve ficar separada para reduzir carga etica e cognitiva: usuario pode aceitar medicao sem aceitar personalizacao.
- Se CEO/Ads admin decidirem nao usar remarketing/personalizacao, CTO pode ocultar essa categoria e manter `ad_personalization` sempre `denied`.

Estados do painel:

- default: todos opcionais desativados;
- accept all: todos opcionais ativados;
- reject optional: todos opcionais desativados;
- custom: respeita toggles individuais;
- saved: fecha painel e mostra feedback;
- error: mantem painel aberto, explica que nao foi possivel salvar, sem perder a selecao visual.

Acoes do painel:

- "Salvar preferencias" como acao principal;
- "Aceitar todos" como atalho permitido;
- "Rejeitar opcionais" como atalho permitido;
- "Fechar" somente depois de escolha previa persistida; em primeira visita, fechar sem escolher deve manter defaults negados e pode deixar o banner visivel.

### Persistencia

Contrato UX para CTO:

- Persistir apenas chaves tecnicas de consentimento, versao da politica e timestamp tecnico.
- Nao persistir nome, telefone, email, mensagem, especie, sintomas, diagnostico, prontuario, IP em payload proprio ou qualquer dado clinico/pessoal.
- Incluir versao da politica para reexibir banner se a politica mudar de forma relevante.
- Duracao de persistencia deve ser aprovada por CEO/juridico antes de publicar.

### Texto estrutural nao final

UXDesigner aprova somente estrutura e clareza. Copy legal final deve ser aprovada por CEO/juridico ou responsavel designado.

Texto estrutural sugerido para revisao:

- Necessarios: "Essenciais para carregar o site, manter preferencias de privacidade e permitir funcionamento basico."
- Analytics: "Ajuda a entender visitas e interacoes de forma agregada para melhorar a experiencia."
- Publicidade e medicao: "Ajuda a medir resultados de campanhas e cliques de contato, como WhatsApp e telefone."
- Personalizacao de anuncios: "Permite usar dados de publicidade para anuncios mais personalizados em plataformas Google."

## 5. Color/token usage

Usar apenas tokens oficiais atuais do CVG para esta entrega:

- deep blue: `rgb(13, 71, 161)`;
- primary blue: `rgb(25, 118, 210)`;
- light blue: `rgb(66, 165, 245)`;
- soft blue: `rgb(187, 222, 251)`;
- very light clinical blue: `rgb(227, 242, 253)`;
- white: `rgb(255,255,255)`;
- clinical background: `rgb(245,247,250)`;
- light gray: `rgb(224,224,224)`;
- dark text: `rgb(20,30,45)`;
- text gray: `rgb(66,66,66)`;
- alert red: `rgb(211,47,47)` somente erro real;
- emergency accent red: `rgb(229,57,53)` nao recomendado para consentimento.

Gradientes permitidos:

- primary gradient: `linear-gradient(135deg, rgb(13,71,161) 0%, rgb(25,118,210) 50%, rgb(66,165,245) 100%)`;
- secondary gradient: `linear-gradient(135deg, rgb(25,118,210) 0%, rgb(66,165,245) 100%)`;
- light clinical gradient: `linear-gradient(135deg, rgb(227,242,253) 0%, rgb(187,222,251) 100%)`.

Aplicacao recomendada:

- Banner: fundo `rgb(255,255,255)`, borda `rgb(224,224,224)`, texto `rgb(20,30,45)`, sombra discreta.
- Painel: fundo `rgb(255,255,255)`, backdrop com azul profundo em baixa opacidade se necessario.
- Categoria ativa: borda ou indicador em `rgb(25,118,210)`, fundo leve `rgb(227,242,253)`.
- Toggle ativo: `rgb(25,118,210)`.
- Toggle inativo: borda `rgb(224,224,224)`, fundo `rgb(245,247,250)`.
- Erro de salvamento: usar red restrito somente em texto/borda de erro, nunca como CTA dominante.

Button system obrigatorio:

- Primario normal: background `rgb(245,247,250)`, color `rgb(13,71,161)`, border `1px solid rgb(224,224,224)`, radius `12px`.
- Primario hover: background `rgb(25,118,210)`, color `rgb(255,255,255)`.
- Secundario normal: transparent background, blue border, blue text.
- Secundario hover: solid blue, white text.
- Danger: nao usar para consentimento, exceto erro/warning operacional.

## 6. Accessibility considerations

Lentes aplicadas: WCAG POUR, accessibility-by-default, responsive constraints, cognitive load.

Perceptivel:

- texto deve cumprir contraste WCAG AA;
- nao usar `rgb(66,165,245)` para texto pequeno sobre branco;
- estado de toggle nao pode depender apenas de cor;
- painel deve ter titulo programatico e descricoes curtas por categoria.

Operavel:

- banner, painel, toggles e botoes devem ser navegaveis por teclado;
- foco visivel em todos os controles;
- alvos de toque minimos de 44 x 44 px;
- dialog deve prender foco enquanto aberto e devolver foco ao gatilho ao fechar;
- `Esc` fecha painel somente se ja houver preferencia persistida ou se fechamento mantiver defaults negados;
- respeitar `prefers-reduced-motion`.

Compreensivel:

- linguagem clara, sem jargao juridico no banner;
- termos tecnicos podem aparecer no painel apenas quando acompanhados de explicacao curta;
- "Rejeitar opcionais" deve explicar que o site continua funcionando;
- nenhum texto deve sugerir que consentir melhora atendimento clinico.

Robusto:

- usar `button` real para acoes, nao links simulando botoes;
- usar `dialog` acessivel ou padrao equivalente com `aria-modal`;
- `aria-checked` em toggles customizados ou checkbox nativo;
- sem evento de tracking acionado antes da escolha quando defaults estiverem negados;
- consentimento deve funcionar com zoom 200% e tamanho de fonte aumentado.

## 7. Mobile behavior

Mobile e a experiencia primaria para trafego pago.

Regras:

- Banner mobile deve aparecer como bottom sheet compacto, acima da mobile contact bar definida em RMA-23.
- Se nao houver espaco seguro, reduzir o banner para titulo, texto em duas linhas e acoes empilhadas; nao cobrir WhatsApp/telefone.
- Ordem de acoes mobile:
  1. "Aceitar todos"
  2. "Rejeitar opcionais"
  3. "Personalizar"
- Botoes devem ocupar largura total quando empilhados.
- Painel de preferencias mobile pode ocupar ate a altura da viewport, com conteudo rolavel e acoes fixas no rodape do painel.
- Evitar modal full-screen de primeira visita que impeça leitura da landing ou contato emergencial.
- O banner nao deve empurrar o conteudo de forma que o CTA principal desapareca sem alternativa fixa de contato.

QABrowser deve validar depois da implementacao:

- ausencia de overlap com mobile contact bar;
- visibilidade de WhatsApp/telefone/rota com banner aberto;
- foco e ordem de teclado;
- legibilidade em mobile pequeno;
- primeiro viewport desktop e mobile.

## 8. Acceptance criteria

### Mapeamento com RMA-29

- Define comportamento antes de tags Google dispararem: atendido por defaults negados antes de medicao e atualizacao apos interacao.
- Cobre mobile e desktop sem bloquear CTA critico ou formulario: atendido por banner compacto, bottom sheet acima da contact bar e handoff para QABrowser validar overlap.
- Nao cria copy legal final fora de aprovacao do CEO/juridico: atendido por texto estrutural marcado como pendente de revisao legal.
- Nao expoe `.env`, chaves, tokens, credentials, certificados, service accounts ou configuracoes sensiveis: atendido; este documento nao inclui IDs reais, secrets ou URLs com credenciais.

### Criterios de aceite de UX

- Primeira visita mostra banner se nao houver escolha persistida.
- Usuario consegue aceitar todos, rejeitar opcionais ou personalizar com esforco equivalente.
- Usuario consegue alterar ou revogar preferencias por link permanente no rodape.
- Nenhuma categoria opcional vem ativada antes de consentimento.
- "Necessarios" aparece como informativo/obrigatorio e nao inclui analytics ou advertising.
- Analytics, publicidade/medicao e personalizacao tem mapeamento explicito para Consent Mode v2.
- Consentimento nao bloqueia rotas de atendimento, WhatsApp, telefone ou mapa.
- Red nao e usado como CTA ou elemento visual dominante.
- Estados de foco, erro, loading/saving e saved existem antes de QA.
- Conteudo legal final fica pendente de CEO/juridico antes de publicacao.

### Criterios de aceite tecnico para RMA-25

- Antes de carregar Google tag/GTM/GA4/Ads, CTO define defaults para:
  - `ad_storage: denied`;
  - `ad_user_data: denied`;
  - `ad_personalization: denied`;
  - `analytics_storage: denied`.
- Ao aceitar todos, CTO atualiza todos os quatro sinais para `granted`.
- Ao rejeitar opcionais, CTO mantem todos os quatro sinais como `denied`.
- Ao aceitar apenas Analytics, CTO define `analytics_storage: granted` e mantem os tres sinais de ads como `denied`.
- Ao aceitar Publicidade e medicao, CTO define `ad_storage` e `ad_user_data` conforme escolha e mantem `ad_personalization` separado.
- Ao aceitar Personalizacao, CTO define `ad_personalization: granted` somente com escolha explicita ou "Aceitar todos".
- Preferencias salvas sao aplicadas em paginas seguintes antes de eventos de medicao.
- Falha de consentimento impede tags opcionais, mas nao impede contato.
- `scripts/check-secrets.sh` deve passar antes de commit/push/handoff.

## 9. CTO implementation notes

Implementar como sistema reutilizavel:

- Componentes sugeridos:
  - `ConsentProvider`
  - `ConsentBanner`
  - `ConsentPreferencesPanel`
  - `ConsentCategoryToggle`
  - `ConsentStatusLink`
  - `ConsentToast`
- Centralizar configuracao de categorias em estrutura de dados, nao hard-code espalhado.
- Incluir `privacyPolicyVersion` para forcar nova decisao quando a politica mudar.
- Definir Consent Mode antes de qualquer comando que envie medicao.
- Para GTM, preferir APIs de consentimento do Tag Manager ou template/CMP aprovado; evitar misturar update via `gtag` se o container usar template de consentimento.
- Preservar UTMs e eventos internos definidos em RMA-24 sem enviar dados pessoais ou clinicos.
- Nao enviar valores de formulario, sintomas, especie com detalhe livre, nome, telefone, email ou mensagem para GA4/Ads/GTM.
- IDs publicos de tag/container podem ser configuracao publica; segredos, tokens, API keys e service accounts nao podem ser versionados, colados em issues, logs, screenshots ou handoffs.
- Encaminhar para QABrowser apos implementacao para validar rendering, mobile/desktop, overlap, CTA visibility e foco.

## Done rule

### O que foi produzido

Especificacao de UX de consentimento para Google Ads/GA4/GTM com IA, componentes, estados, tokens, acessibilidade, comportamento mobile, criterios de aceite e handoff tecnico.

### Assumptions

- A landing de Google Ads reaproveita o sistema definido em RMA-23.
- RMA-25 implementara em HTML estatico ou Astro/Tailwind conforme decisao do CTO.
- CEO/juridico ainda precisam aprovar texto legal final, politica de cookies/privacidade e duracao de persistencia.
- Personalizacao de anuncios pode ser mantida desligada se CVG nao usar remarketing/personalizacao.

### Unresolved questions

- Qual URL final da politica de privacidade/cookies sera usada no banner?
- Qual prazo de persistencia de consentimento sera aprovado?
- CVG usara CMP externa aprovada ou implementacao propria simples?
- CVG usara personalizacao/remarketing ou apenas medicao de campanha?

### Acceptance criteria mapping

Todos os criterios de RMA-29 estao mapeados na secao 8. Os pontos juridicos pendentes foram explicitamente separados da especificacao UX.

### Recommended next assignee

- CTO: implementar os componentes e Consent Mode v2 em RMA-25 usando esta especificacao.
- CEO/juridico ou responsavel designado: aprovar texto legal final, politica de cookies/privacidade e duracao de persistencia antes de publicar tags.
- QABrowser: validar mobile/desktop, overlap, CTA visibility e foco depois da implementacao.

### Implementation notes for CTO

RMA-25 pode avancar com a estrutura tecnica de consentimento, mas nao deve publicar tags Google em producao sem defaults negados, link de preferencias, politica aprovada e verificacao de ausencia de segredos.

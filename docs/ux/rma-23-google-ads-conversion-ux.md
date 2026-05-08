# RMA-23 - UX de conversao para trafego de Google Ads

Especificacao de experiencia para rotas de conversao do Centro Veterinario Guarapiranga (CVG) originadas por Google Ads. Esta entrega define estrutura, componentes, comportamento e criterios de aceite para implementacao posterior pelo CTO.

## 1. Scope

Esta especificacao cobre:

- fluxo de landing page para campanhas de Google Ads;
- arquitetura de informacao para intencoes de busca emergenciais, hospitalares e de rotina;
- hierarquia de primeiro viewport, secoes, CTAs e formulario;
- comportamento esperado para WhatsApp, telefone, mapa e agendamento;
- regras de componentes, cores, acessibilidade e responsividade;
- requisitos de conteudo para CMOEditorial;
- notas de implementacao para CTO;
- handoff de validacao visual/browser para QABrowser.

Fora de escopo para UXDesigner:

- campanha, segmentacao, palavras-chave, lances e configuracao de Google Ads;
- copy editorial final, SEO, blog, social ou campanhas;
- codigo de producao;
- QA em navegador, screenshots, viewport testing, overlap detection e validacao runtime do primeiro viewport.

## 2. UX goal

Objetivo principal: converter tutores vindos de Google Ads em contato qualificado com o CVG, com prioridade para atendimento veterinario 24h, servicos hospitalares e proximo passo claro, sem pressionar por medo nem prometer resultado clinico.

Lentes aplicadas: clinical clarity, information scent, hierarchy, cognitive load, trust signals, Fitts's Law, accessibility-by-default.

O usuario deve entender em ate poucos segundos:

- quem atende: Centro Veterinario Guarapiranga;
- para quem: caes e gatos;
- onde: Guarapiranga / Zona Sul de Sao Paulo;
- quando: atendimento veterinario 24h, se validado pelo conteudo oficial;
- como agir: falar com a equipe, ligar, abrir rota ou solicitar agendamento;
- que tipo de estrutura existe: consultas, exames, internacao, cirurgia, vacinas, banho e tosa, apenas com texto revisado.

## 3. Layout structure

### Rota recomendada

Criar uma rota dedicada para trafego pago, por exemplo:

- `/atendimento-veterinario-24h-guarapiranga/` para intencao emergencial e hospitalar;
- futuras rotas especificas podem reaproveitar o mesmo sistema para `consultas`, `exames`, `internacao`, `cirurgia`, `vacinas` e `banho-e-tosa`.

Nao usar uma home generica para trafego pago quando a busca tiver intencao clara. A landing deve manter informacao scent consistente com o anuncio.

### Fluxo de pagina

1. Header compacto
   - Logo/nome institucional.
   - Links curtos: Servicos, Quando procurar, Localizacao.
   - CTA desktop: "Falar com a equipe".
   - Mobile: header reduzido + barra inferior de contato.

2. Primeiro viewport de conversao
   - Badge informativo: "Atendimento veterinario 24h" somente se validado.
   - H1: servico + localidade + especie.
   - Texto de apoio com criterio clinico, sem promessa de resultado.
   - CTA primario: "Falar com a equipe".
   - CTA secundario: "Ligar agora" ou "Como chegar", conforme campanha.
   - Trust strip com 3 provas operacionais: "24h", "Caes e gatos", "Avenida Guarapiranga".
   - Imagem real/institucional ou bloco tipografico clinico. Nao usar hero promocional generico.

3. Secao "Quando procurar atendimento"
   - Notice com sinais de atencao em linguagem responsavel.
   - Red only as restrained emergency marker: borda esquerda ou icone pequeno, nunca fundo dominante.
   - CTA "Falar com a equipe" repetido ao fim do notice.

4. Servicos relacionados
   - Cards reutilizaveis para Atendimento 24h, Consultas, Exames/Laboratorio, Internacao, Cirurgia, Vacinas.
   - Cada card deve ter titulo, descricao curta e CTA textual.
   - Conteudo clinicamente sensivel deve ser revisado por CMOEditorial/direcao tecnica antes de publicar.

5. Estrutura e confianca
   - Secao de fatos verificaveis: disponibilidade, especies atendidas, servicos integrados, endereco.
   - Nao incluir rankings, "melhor", "mais completo" ou numeros de avaliacao sem verificacao atual.

6. Formulario curto de contato
   - Proposito: reduzir atrito quando o usuario nao quer WhatsApp imediato.
   - Campos minimos: nome do tutor, telefone/WhatsApp, especie, motivo do contato, preferencia de retorno.
   - Campo opcional: mensagem livre.
   - Consentimento: texto claro para contato de retorno.
   - Nao pedir historico clinico longo na landing.

7. Localizacao
   - Endereco em texto HTML.
   - CTA "Como chegar".
   - Mapa incorporado ou link, conforme implementacao do CTO.
   - Telefone/WhatsApp continuam acessiveis.

8. Rodape
   - Nome institucional, endereco, horario/24h validado, canais de contato, links essenciais e aviso de conteudo educativo se houver blog.

## 4. Component rules

### CTA system

CTA primario:

- label padrao: "Falar com a equipe";
- destino preferencial: WhatsApp com UTM preservado ou evento de conversao configuravel pelo CTO;
- minimo 44 x 44 px;
- iconografia permitida: WhatsApp/telefone quando houver biblioteca consistente;
- nao usar vermelho como CTA primario.

CTA secundario:

- labels permitidos: "Ligar agora", "Como chegar", "Conhecer servicos", "Agendar consulta";
- deve ser visualmente secundario, mas ainda escaneavel;
- nao competir com o CTA primario no primeiro viewport.

Barra mobile persistente:

- usar 2 ou 3 acoes no maximo: WhatsApp, Ligar, Como chegar;
- altura minima 52 px + safe area;
- nao cobrir formulario, avisos clinicos ou botoes finais;
- QABrowser deve validar overlap e visibilidade depois da implementacao.

### Formulario

- Labels persistentes; placeholder nao substitui label.
- Erros proximos ao campo e com instrucao de correcao.
- Telefone/WhatsApp deve aceitar entrada com mascara brasileira.
- Estado de envio deve ser claro: idle, loading, success, error.
- Mensagem de sucesso: confirmar que a equipe recebeu o contato ou orientar proximo passo, sem promessa de prazo se operacao nao confirmar SLA.
- Para emergencia, formulario nunca deve ser o unico caminho; WhatsApp/telefone devem ficar disponiveis.

### Cards

- Card apenas para itens repetidos: servicos, fatos de confianca, notices, perguntas curtas.
- Raio maximo recomendado: 8px para cards; 12px apenas em paineis temporarios ou conforme botao oficial.
- Nao colocar card dentro de card.
- Descricoes compactas: 2 a 3 linhas em desktop, sem texto SEO longo.

### Notices clinicos

- Usar titulo curto, texto direto e CTA claro.
- Vermelho restrito a alerta real: borda, icone ou pequeno destaque.
- Nunca dramatizar sintomas com linguagem de medo.
- Incluir alternativa de acao: falar com equipe, ligar ou procurar avaliacao veterinaria.

### Header e nav

- Header desktop entre 64 e 80 px.
- Mobile deve priorizar marca + acesso a contato, nao menu longo.
- Nav nao deve distrair do fluxo de conversao pago.

## 5. Color/token usage

Para RMA-23, CTO deve usar os tokens obrigatorios atuais da identidade CVG:

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
- alert red: `rgb(211,47,47)`;
- emergency accent red: `rgb(229,57,53)`.

Gradientes permitidos:

- primary gradient: `linear-gradient(135deg, rgb(13,71,161) 0%, rgb(25,118,210) 50%, rgb(66,165,245) 100%)`;
- secondary gradient: `linear-gradient(135deg, rgb(25,118,210) 0%, rgb(66,165,245) 100%)`;
- light clinical gradient: `linear-gradient(135deg, rgb(227,242,253) 0%, rgb(187,222,251) 100%)`.

Button override obrigatorio para esta entrega:

- primary normal: background `rgb(245,247,250)`, color `rgb(13,71,161)`, border `1px solid rgb(224,224,224)`, radius `12px`;
- primary hover: background `rgb(25,118,210)`, color `rgb(255,255,255)`;
- secondary normal: transparent background, blue border, blue text;
- secondary hover: solid blue, white text;
- danger: somente emergencia, warning ou erro.

Nota ao CTO: os documentos antigos de fundacao visual usam alguns tokens hex herdados do site atual. Para esta landing de Google Ads, a instrucao atual da identidade CVG acima deve prevalecer ate decisao formal em contrario.

## 6. Accessibility considerations

Lentes aplicadas: WCAG POUR, accessibility-by-default, responsive constraints, clinical clarity.

Perceptivel:

- texto normal deve cumprir contraste WCAG AA;
- nao usar `rgb(66,165,245)` para texto pequeno sobre branco;
- imagens informativas precisam de `alt` especifico; imagens decorativas devem usar `alt=""`;
- telefone, endereco e horario devem ser texto HTML, nao imagem.

Operavel:

- todos os CTAs, links, inputs e menu devem ter `focus-visible`;
- alvo de toque minimo de 44 x 44 px;
- mobile contact bar precisa ser navegavel por teclado e leitor de tela;
- respeitar `prefers-reduced-motion`.

Compreensivel:

- H1 unico e especifico;
- heading structure sequencial;
- labels de formulario claros;
- erros com instrucao de correcao;
- CTAs previsiveis, sem urgencia manipulativa.

Robusto:

- semantica HTML para header, main, section, form, footer;
- formularios com `autocomplete` adequado;
- eventos de conversao nao podem depender de texto invisivel ou elementos nao interativos;
- cor nunca deve ser o unico indicador de emergencia, erro ou estado.

## 7. Mobile behavior

Mobile e a experiencia primaria para trafego pago.

Primeiro viewport mobile deve conter, como especificacao:

- marca ou nome CVG;
- promessa funcional: atendimento veterinario 24h para caes e gatos na Guarapiranga/Zona Sul;
- CTA "Falar com a equipe";
- pelo menos uma rota secundaria de acao: telefone ou como chegar;
- indicacao curta de confianca, sem empurrar o conteudo critico para baixo.

Regras:

- layout em uma coluna;
- CTA principal full width quando estiver em bloco de conteudo;
- barra fixa inferior somente depois de confirmar que nao cobre conteudo critico;
- formulario com uma coluna, labels persistentes e campos de no minimo 44 px;
- trust strip vira lista vertical compacta;
- servicos em cards de uma coluna;
- textos de apoio devem ficar entre 16 e 18 px, sem escalar por viewport width.

QABrowser deve validar em browser real:

- primeiro viewport mobile e desktop;
- ausencia de overlap;
- visibilidade dos CTAs;
- comportamento da barra mobile;
- legibilidade e contraste em screenshots.

## 8. Acceptance criteria

### Mapeamento com RMA-23

- Conversao para servicos hospitalares veterinarios: atendida por rota dedicada, H1 de servico/localidade, CTAs de contato, notices e cards de servico.
- CTAs e informacoes criticas no primeiro viewport: especificado para mobile e desktop, com validacao runtime encaminhada a QABrowser.
- Limite CEN-38 respeitado: UXDesigner define estrutura, comportamento e criterios; nao produz campanha, SEO, editorial final, implementacao ou browser QA.
- Seguranca de segredos: especificacao nao inclui `.env`, chaves, tokens, credenciais, certificados, service accounts, URLs com credenciais ou configuracoes sensiveis.

### Criterios de aceite de UX

- A landing usa IA orientada por intencao de busca e nao uma home generica.
- O primeiro viewport comunica CVG, servico, especies, localidade e proximo passo.
- WhatsApp, telefone, rota e formulario tem hierarquia clara e nao competem entre si.
- Emergencia e tratada com clareza clinica, nao com medo.
- Red e usado apenas para alerta real, sem dominar a UI.
- Todos os componentes reutilizam o sistema de botoes, cards, notices, formularios e tokens.
- Conteudo clinicamente sensivel tem dono de revisao antes de publicacao.

## 9. CTO implementation notes

Implementar como sistema, nao como pagina unica descartavel:

- criar componentes reutilizaveis: `AdsLandingShell`, `ConversionHero`, `ContactActions`, `MobileContactBar`, `ClinicalNotice`, `ServiceCard`, `TrustStrip`, `LeadForm`, `LocationBlock`;
- centralizar dados de contato, endereco, servicos e rotas em conteudo estruturado;
- preservar UTMs em cliques para WhatsApp, telefone, formulario e mapa quando tecnicamente aplicavel;
- configurar eventos de conversao sem expor tokens ou chaves no frontend;
- nao versionar `.env`, API keys, access tokens, service accounts ou URLs com credenciais;
- implementar estados de foco, hover, disabled, loading, success e error antes do QA visual;
- tratar Google reviews somente conforme politica aprovada: sem scraping, sem reviews inventadas e sem expor chave de Places API no frontend;
- encaminhar para QABrowser depois da implementacao para screenshots, viewport testing, CTA visibility e overlap detection.

## Requisitos para CMOEditorial

CMOEditorial deve fornecer ou revisar antes da publicacao:

- H1 e texto de apoio final por intencao de campanha;
- descricoes curtas de servicos;
- texto responsavel para "quando procurar atendimento";
- confirmacao de horario/24h, endereco e canais de contato;
- claims, numeros de avaliacao e qualquer prova social com fonte e data de verificacao;
- disclaimers de conteudo educativo, se houver blog ou orientacao clinica.

## Assumptions

- O CVG atende caes e gatos e comunica atendimento veterinario 24h em fontes institucionais ja documentadas.
- O trafego de Google Ads tera intencoes mistas: emergencia, hospital veterinario, consultas/exames e localizacao.
- WhatsApp e telefone sao os caminhos de maior conversao para mobile; formulario e suporte, nao substituto de contato urgente.
- A paleta RGB oficial enviada no wake atual prevalece sobre tokens historicos divergentes ate nova decisao do CEO/UXDesigner.

## Unresolved questions

- Qual numero de telefone deve ser priorizado como chamada direta na landing?
- O WhatsApp final deve usar mensagem pre-preenchida por campanha?
- Ha SLA operacional para resposta de formulario que possa ser comunicado sem risco?
- Quais claims/provas sociais atuais o CMOEditorial aprova usar em trafego pago?
- Direcao tecnica aprova o uso de "hospital veterinario" em anuncios e H1, ou devemos manter "centro veterinario 24h" como termo principal?

## Recommended next assignee

- CTO: implementar a rota e componentes conforme esta especificacao.
- CMOEditorial: fornecer/revisar copy final, claims e dados verificaveis.
- QABrowser: validar implementacao renderizada em mobile/desktop apos entrega do CTO.

# RMA-41 - Pacote editorial, SEO local e conteudo MDX do site CVG

Documento de handoff editorial para o site institucional do Centro Veterinario Guarapiranga.

Fontes internas usadas:

- [`docs/brand/01_brand_book_cvg.md`](../brand/01_brand_book_cvg.md)
- [`docs/brand/03_ai_brand_guidelines.md`](../brand/03_ai_brand_guidelines.md)
- [`docs/brand/04_social_media_guidelines.md`](../brand/04_social_media_guidelines.md)

## 1. Contexto

O Centro Veterinario Guarapiranga precisa de um pacote de conteudo pronto para orientar a implementacao do site institucional de [`RMA-42`](/RMA/issues/RMA-42). O site deve comunicar um centro veterinario 24h para caes e gatos na Guarapiranga/Zona Sul de Sao Paulo, com estrutura de atendimento, exames, internacao, cirurgia, vacinas, banho e tosa, sem parecer petshop promocional nem usar medo como argumento.

Este documento entrega conteudo de producao em formato consumivel por MDX/frontmatter, alem de diretrizes editoriais para paginas institucionais, blog, SEO local, FAQ, campanhas, depoimentos e microcopy de formularios.

## 2. Publico-alvo

- Tutores de caes e gatos da Guarapiranga, Vila Socorro, Jardim Sao Luis, Socorro, M'Boi Mirim e Zona Sul de Sao Paulo.
- Tutores em momento de duvida clinica que precisam entender se devem procurar atendimento veterinario.
- Tutores preventivos buscando check-up, vacinas, exames, banho e tosa ou acompanhamento de rotina.
- Tutores que valorizam estrutura hospitalar, atendimento 24h, internacao e comunicacao clara.
- CTO e UXDesigner que precisam transformar conteudo em paginas, componentes, rotas e metadados.

## 3. Objetivo de negocio

- Aumentar autoridade local para buscas como "veterinario zona sul SP", "hospital veterinario Guarapiranga", "emergencia veterinaria 24h" e "clinica veterinaria caes e gatos".
- Converter visitas em contatos qualificados pelo WhatsApp, telefone, mapa e formulario, sem pressao comercial.
- Reduzir ansiedade do tutor com explicacoes claras e clinicamente responsaveis.
- Dar ao CTO um pacote editorial pronto para criar colecoes MDX, rotas e metadados.
- Dar ao CEO uma base revisavel antes da publicacao.

## 4. Racional estrategico

O territorio editorial do CVG deve unir busca local, confianca clinica e acolhimento. O tutor que chega ao site pode estar em tres estados: procurando atendimento agora, comparando uma estrutura de cuidado ou pesquisando sintomas/cuidados. O conteudo deve responder rapidamente a essas intencoes, mostrar disponibilidade 24h e orientar avaliacao veterinaria quando houver sinais clinicos, sem prometer diagnostico, cura, rapidez ou superioridade.

A estrategia de SEO usa termos locais em contexto util, nao como blocos de palavra-chave. O termo principal deve aparecer naturalmente em titulos, descriptions, headings e CTAs, com variacoes sem repeticao mecanica.

## 5. Conteudo concreto

### 5.1 Inventario editorial de paginas institucionais

| Rota sugerida | Tipo | Intencao principal | Palavra-chave primaria | Conteudo necessario | CTA principal |
| --- | --- | --- | --- | --- | --- |
| `/` | Home | entender quem e o CVG e agir rapido | hospital veterinario Guarapiranga | hero, sinais de confianca, servicos, atendimento 24h, localizacao, FAQ curto | Falar com a equipe |
| `/sobre` | Institucional | avaliar confianca e presenca local | centro veterinario Guarapiranga | historia institucional segura, proposito, estrutura, publico atendido, limites de claims | Conhecer servicos |
| `/servicos` | Hub | comparar servicos disponiveis | clinica veterinaria caes e gatos | cards de servicos, texto de cuidado integrado, disclaimers | Ver servicos |
| `/servicos/atendimento-24h` | Servico | saber se pode buscar atendimento agora | emergencia veterinaria 24h | sinais de alerta, o que levar, como chegar, aviso clinico | Falar no WhatsApp |
| `/servicos/consultas-checkup` | Servico | rotina e prevencao | veterinario zona sul SP | consulta, check-up, acompanhamento, prevencao | Agendar consulta |
| `/servicos/exames-laboratorio` | Servico | entender apoio diagnostico | laboratorio veterinario caes e gatos | exames como apoio a avaliacao, sem prometer diagnostico | Falar com a equipe |
| `/servicos/internacao` | Servico | entender acompanhamento hospitalar | internacao veterinaria zona sul | quando pode ser indicada, acompanhamento, comunicacao com tutor | Conversar com a equipe |
| `/servicos/cirurgia` | Servico | entender processo cirurgico | cirurgia veterinaria zona sul | avaliacao previa, orientacoes, anestesia sem promessa | Agendar avaliacao |
| `/servicos/vacinas` | Servico | prevencao | vacina para cachorro Guarapiranga | protocolos individualizados, caes e gatos, avaliacao | Orientar vacinas |
| `/servicos/banho-e-tosa` | Servico | rotina e higiene | banho e tosa Guarapiranga | higiene, observacao de pele/pelos, cuidado seguro | Agendar banho e tosa |
| `/blog` | Blog hub | aprender e encontrar conteudo | blog veterinario caes e gatos | categorias, artigos, CTA de avaliacao | Ler orientacoes |
| `/contato` | Conversao local | encontrar canal/endereco | veterinario Avenida Guarapiranga | endereco, mapa, horario, telefone/WhatsApp, formulario | Como chegar |

### 5.2 Copy de paginas institucionais

#### Home

Frontmatter sugerido:

```yaml
title: "Centro Veterinario Guarapiranga | Atendimento 24h para caes e gatos"
description: "Atendimento veterinario 24h para caes e gatos na Avenida Guarapiranga, Zona Sul de Sao Paulo. Consultas, exames, internacao, cirurgia e cuidado acolhedor."
seoFocus: "hospital veterinario Guarapiranga"
route: "/"
ctaPrimary: "Falar com a equipe"
ctaSecondary: "Conhecer servicos"
clinicalReviewRequired: false
```

Conteudo pronto:

```mdx
# Cuidado veterinario 24h para caes e gatos na Guarapiranga

No Centro Veterinario Guarapiranga, tutores encontram atendimento veterinario 24h, estrutura de apoio ao cuidado clinico e uma equipe preparada para orientar os proximos passos com clareza.

Atendemos caes e gatos na Avenida Guarapiranga, Zona Sul de Sao Paulo, com consultas, exames, internacao, cirurgia, vacinas, banho e tosa e acompanhamento veterinario.

## Quando procurar o CVG

- Quando seu pet precisa de atendimento veterinario 24h.
- Quando ha sinais como apatia importante, dor, dificuldade para respirar, sangramento, vomitos persistentes, diarreia intensa, convulsoes ou piora repentina.
- Quando voce quer organizar a rotina de prevencao, vacinas, check-up ou exames.
- Quando precisa de uma estrutura integrada para avaliacao, acompanhamento e cuidado.

## Cuidado completo, com orientacao clara

Cada caso deve ser avaliado por um veterinario. Nosso papel e acolher o tutor, examinar o paciente e orientar as condutas possiveis de acordo com a necessidade de cada cao ou gato.

## Estamos na Avenida Guarapiranga

O CVG atende a regiao da Guarapiranga e Zona Sul de Sao Paulo com disponibilidade 24h. Em caso de duvida, fale com a equipe antes de vir ou venha diretamente para avaliacao quando houver sinais importantes.
```

#### Sobre

Frontmatter sugerido:

```yaml
title: "Sobre o Centro Veterinario Guarapiranga"
description: "Conheca o CVG: centro veterinario 24h para caes e gatos na Zona Sul de Sao Paulo, com atendimento acolhedor, estrutura de cuidado e orientacao clara ao tutor."
seoFocus: "centro veterinario Guarapiranga"
route: "/sobre"
clinicalReviewRequired: false
```

Conteudo pronto:

```mdx
# Sobre o Centro Veterinario Guarapiranga

O Centro Veterinario Guarapiranga nasceu para cuidar de caes e gatos com presenca, criterio veterinario e acolhimento ao tutor.

Nossa atuacao combina atendimento 24h, consultas, exames, internacao, cirurgia, vacinas, banho e tosa em uma estrutura pensada para apoiar o cuidado em diferentes momentos da vida do pet.

## Como o CVG se comunica com tutores

Acreditamos que uma boa orientacao faz diferenca. Por isso, explicamos possibilidades, proximos passos e cuidados de forma clara, sem prometer resultado e sem substituir a avaliacao veterinaria.

## Presenca local

Estamos na Avenida Guarapiranga, na Zona Sul de Sao Paulo, atendendo tutores da Guarapiranga e bairros proximos que buscam atendimento veterinario acessivel, organizado e humano.

## Nosso compromisso

Cuidar com responsabilidade, ouvir o tutor e orientar cada decisao com base na avaliacao do animal.
```

#### Hub de servicos

Frontmatter sugerido:

```yaml
title: "Servicos veterinarios para caes e gatos | CVG"
description: "Conheca os servicos do Centro Veterinario Guarapiranga: atendimento 24h, consultas, exames, internacao, cirurgia, vacinas, banho e tosa para caes e gatos."
seoFocus: "clinica veterinaria caes e gatos"
route: "/servicos"
clinicalReviewRequired: false
```

Conteudo pronto:

```mdx
# Servicos veterinarios para caes e gatos

O CVG oferece atendimento veterinario para caes e gatos com uma estrutura integrada de cuidado. A indicacao de cada servico depende da avaliacao do paciente e da orientacao da equipe veterinaria.

## Atendimento 24h

Disponibilidade para orientar e avaliar caes e gatos em situacoes de urgencia, duvida ou piora clinica.

## Consultas e check-up

Acompanhamento de rotina, prevencao e investigacao inicial de alteracoes percebidas pelo tutor.

## Exames e laboratorio

Estrutura de apoio diagnostico para ajudar o veterinario a entender o quadro do paciente.

## Internacao

Acompanhamento de pacientes que precisam de observacao, suporte e continuidade de cuidado.

## Cirurgia

Procedimentos cirurgicos dependem de avaliacao previa, orientacao ao tutor e preparo adequado do paciente.

## Vacinas

Protocolos vacinais devem ser definidos pelo veterinario conforme idade, historico, especie e rotina do pet.

## Banho e tosa

Higiene e cuidado de rotina com atencao ao conforto do animal e observacao de sinais em pele, pelos, ouvidos e unhas.
```

#### Atendimento 24h

Frontmatter sugerido:

```yaml
title: "Atendimento veterinario 24h na Guarapiranga | CVG"
description: "O CVG atende caes e gatos 24h na Avenida Guarapiranga. Veja sinais que merecem avaliacao veterinaria e como falar com a equipe."
seoFocus: "emergencia veterinaria 24h"
route: "/servicos/atendimento-24h"
clinicalReviewRequired: true
```

Conteudo pronto:

```mdx
# Atendimento veterinario 24h na Guarapiranga

Alguns sinais em caes e gatos exigem avaliacao veterinaria rapida, principalmente quando aparecem de forma intensa, persistente ou junto com piora do comportamento.

O Centro Veterinario Guarapiranga atende 24h na Avenida Guarapiranga, Zona Sul de Sao Paulo.

## Sinais que merecem atencao

Procure avaliacao veterinaria se observar dificuldade para respirar, convulsoes, sangramento, dor intensa, trauma, intoxicacao suspeita, apatia importante, vomitos persistentes, diarreia intensa, falta de apetite associada a outros sinais ou piora repentina.

## O que levar ao atendimento

- Informacoes sobre quando os sinais comecaram.
- Medicamentos usados recentemente, se houver.
- Exames anteriores, se tiver.
- Carteira de vacinacao, quando disponivel.
- Informacoes sobre alimentacao, acesso a produtos, quedas ou possivel ingestao de algo incomum.

## Orientacao importante

Este conteudo e educativo e nao substitui consulta veterinaria. Como sintomas podem ter causas diferentes, o caminho mais seguro e procurar avaliacao profissional, especialmente se houver persistencia, dor, apatia ou piora.
```

#### Consultas e check-up

```mdx
# Consultas e check-up para caes e gatos

A consulta veterinaria ajuda a entender a saude do pet, acompanhar mudancas de comportamento e orientar prevencao. O check-up pode incluir avaliacao clinica e, quando indicado pelo veterinario, exames complementares.

Em caes e gatos idosos, filhotes ou pacientes com historico de doencas, a frequencia ideal de acompanhamento deve ser definida individualmente.

Fale com a equipe do CVG para agendar uma avaliacao veterinaria.
```

#### Exames e laboratorio

```mdx
# Exames veterinarios e laboratorio

Exames ajudam o veterinario a investigar alteracoes, acompanhar tratamentos e tomar decisoes com mais informacoes. Eles nao substituem a avaliacao clinica e devem ser indicados conforme o caso.

No CVG, a estrutura de apoio diagnostico faz parte do cuidado integrado para caes e gatos.

Se o seu pet apresenta sinais persistentes ou mudancas importantes, procure avaliacao veterinaria.
```

#### Internacao

```mdx
# Internacao veterinaria para caes e gatos

A internacao pode ser indicada quando o paciente precisa de observacao, suporte, acompanhamento ou cuidados que nao devem ser feitos em casa sem orientacao profissional.

Cada caso depende da avaliacao veterinaria. A equipe orienta o tutor sobre necessidades do paciente, comunicacao e proximos passos.

Se houver piora repentina, dor, apatia importante ou duvida sobre o estado do seu pet, procure avaliacao veterinaria.
```

#### Cirurgia

```mdx
# Cirurgia veterinaria

Procedimentos cirurgicos em caes e gatos exigem avaliacao previa, orientacao ao tutor e preparo adequado do paciente. O veterinario deve explicar indicacao, riscos, cuidados antes e depois e acompanhamento necessario.

O CVG conta com estrutura para atendimento e suporte ao cuidado cirurgico, sempre conforme avaliacao profissional.

Para entender se um procedimento e indicado para o seu pet, agende avaliacao veterinaria.
```

#### Vacinas

```mdx
# Vacinas para caes e gatos

A vacinacao faz parte da prevencao, mas o protocolo ideal depende de especie, idade, historico, estilo de vida e avaliacao veterinaria.

Evite seguir calendarios genericos sem orientacao. O veterinario pode avaliar o pet e indicar o melhor plano preventivo.

Fale com a equipe do CVG para orientar as vacinas do seu cao ou gato.
```

#### Banho e tosa

```mdx
# Banho e tosa com cuidado veterinario

Banho e tosa tambem fazem parte da rotina de cuidado. Alem da higiene, esse momento pode ajudar a observar alteracoes de pele, pelos, ouvidos, unhas e comportamento.

Se algo diferente for percebido, a orientacao veterinaria e o caminho mais seguro.

Agende o cuidado do seu pet com a equipe do CVG.
```

#### Contato

Frontmatter sugerido:

```yaml
title: "Contato e endereco | Centro Veterinario Guarapiranga"
description: "Fale com o Centro Veterinario Guarapiranga. Atendimento veterinario 24h para caes e gatos na Avenida Guarapiranga, Sao Paulo/SP."
seoFocus: "veterinario Avenida Guarapiranga"
route: "/contato"
clinicalReviewRequired: false
```

Conteudo pronto:

```mdx
# Fale com o Centro Veterinario Guarapiranga

Atendemos caes e gatos 24h na Avenida Guarapiranga, Sao Paulo/SP.

Use este canal para tirar duvidas sobre atendimento, agendar consulta, confirmar servicos ou receber orientacao sobre como chegar.

Se o seu pet apresenta sinais importantes, como dificuldade para respirar, convulsoes, sangramento, dor intensa, vomitos persistentes, apatia importante ou piora repentina, procure avaliacao veterinaria.
```

### 5.3 Mapa de SEO local

| Cluster | Termos e variacoes naturais | Paginas prioritarias | Intencao | Observacao editorial |
| --- | --- | --- | --- | --- |
| Veterinario Zona Sul SP | veterinario zona sul SP, veterinario na zona sul, atendimento veterinario zona sul | Home, Sobre, Consultas | local/comparativa | Usar em contexto de localizacao, nao repetir em todas as secoes |
| Hospital veterinario Guarapiranga | hospital veterinario Guarapiranga, centro veterinario Guarapiranga, Cevet Guarapiranga | Home, Sobre, Servicos | local/institucional | "Hospital" deve ser validado pela direcao tecnica antes de publicacao final |
| Emergencia veterinaria 24h | emergencia veterinaria 24h, veterinario 24h Guarapiranga, clinica veterinaria 24h zona sul | Atendimento 24h, Home, FAQ | urgencia | Sempre incluir avaliacao veterinaria e evitar panico |
| Clinica veterinaria caes e gatos | clinica veterinaria caes e gatos, atendimento para caes e gatos, veterinario para cachorro e gato | Servicos, Home | comparativa | Reforcar atendimento exclusivamente a caes e gatos |
| Internacao veterinaria | internacao veterinaria zona sul, internacao para caes e gatos | Internacao, Blog | servico/educacional | Explicar sem prometer monitoramento especifico nao validado |
| Exames veterinarios | laboratorio veterinario caes e gatos, exames veterinarios zona sul | Exames, Blog | diagnostica | Chamar de apoio diagnostico, nao "diagnostico garantido" |
| Vacinas | vacina para cachorro Guarapiranga, vacina para gato zona sul | Vacinas, Blog | preventiva | Protocolo individual sempre com veterinario |
| Banho e tosa | banho e tosa Guarapiranga, banho e tosa com veterinario | Banho e tosa | rotina | Nao posicionar como petshop; vincular higiene e cuidado |

### 5.4 Titulos e meta descriptions

| Pagina | Title SEO | Meta description |
| --- | --- | --- |
| Home | Centro Veterinario Guarapiranga | Atendimento 24h para caes e gatos | Atendimento veterinario 24h para caes e gatos na Avenida Guarapiranga, Zona Sul de Sao Paulo. Consultas, exames, internacao, cirurgia e cuidado acolhedor. |
| Sobre | Sobre o Centro Veterinario Guarapiranga | Conheca o CVG, centro veterinario 24h para caes e gatos na Zona Sul de Sao Paulo, com estrutura de cuidado, orientacao clara e acolhimento ao tutor. |
| Servicos | Servicos veterinarios para caes e gatos | CVG | Atendimento 24h, consultas, exames, internacao, cirurgia, vacinas, banho e tosa para caes e gatos na Guarapiranga. |
| Atendimento 24h | Atendimento veterinario 24h na Guarapiranga | CVG | O CVG atende caes e gatos 24h na Avenida Guarapiranga. Veja sinais que merecem avaliacao veterinaria e fale com a equipe. |
| Consultas | Consultas e check-up para caes e gatos | CVG | Agende consulta veterinaria e check-up para caes e gatos no Centro Veterinario Guarapiranga, na Zona Sul de Sao Paulo. |
| Exames | Exames veterinarios e laboratorio | CVG | Estrutura de apoio diagnostico para caes e gatos, com exames indicados conforme avaliacao veterinaria. Fale com a equipe do CVG. |
| Internacao | Internacao veterinaria para caes e gatos | CVG | Acompanhamento veterinario para pacientes que precisam de observacao e cuidado. Atendimento na Avenida Guarapiranga, Zona Sul de Sao Paulo. |
| Cirurgia | Cirurgia veterinaria para caes e gatos | CVG | Procedimentos cirurgicos dependem de avaliacao previa e orientacao veterinaria. Fale com o Centro Veterinario Guarapiranga. |
| Vacinas | Vacinas para caes e gatos na Guarapiranga | CVG | Oriente a vacinacao do seu cao ou gato com avaliacao veterinaria. Atendimento no Centro Veterinario Guarapiranga. |
| Banho e tosa | Banho e tosa na Guarapiranga | CVG | Banho e tosa para caes e gatos com atencao ao conforto, higiene e sinais que merecem orientacao veterinaria. |
| Blog | Blog CVG | Saude de caes e gatos com orientacao responsavel | Conteudos educativos sobre saude, prevencao e atendimento veterinario para tutores de caes e gatos. |
| Contato | Contato e endereco | Centro Veterinario Guarapiranga | Fale com o CVG. Atendimento veterinario 24h para caes e gatos na Avenida Guarapiranga, Sao Paulo/SP. |

### 5.5 FAQs prontas

```yaml
faqs:
  - question: "O CVG atende 24h?"
    answer: "Sim. O Centro Veterinario Guarapiranga comunica atendimento veterinario 24h para caes e gatos. Antes de campanhas ou publicacao final, o horario deve ser confirmado com a fonte operacional atualizada."
  - question: "Quais animais o CVG atende?"
    answer: "O CVG atende caes e gatos."
  - question: "Quando devo procurar atendimento veterinario com urgencia?"
    answer: "Procure avaliacao veterinaria se houver dificuldade para respirar, convulsoes, sangramento, dor intensa, trauma, intoxicacao suspeita, vomitos persistentes, diarreia intensa, apatia importante ou piora repentina."
  - question: "Posso medicar meu pet antes de levar ao veterinario?"
    answer: "Evite medicar sem orientacao veterinaria. Medicamentos podem trazer riscos e a conduta adequada depende da avaliacao do animal."
  - question: "O CVG faz exames?"
    answer: "O CVG comunica estrutura de apoio diagnostico e laboratorio. A indicacao de exames deve ser feita pelo veterinario conforme avaliacao do paciente."
  - question: "Como funciona o check-up?"
    answer: "O check-up ajuda a acompanhar saude, peso, comportamento, vacinas e possiveis exames. A frequencia ideal depende de idade, historico e rotina do pet."
  - question: "O CVG realiza internacao?"
    answer: "O CVG comunica servico de internacao para caes e gatos. A necessidade de internacao depende da avaliacao veterinaria e do quadro do paciente."
  - question: "Como chegar ao CVG?"
    answer: "O Centro Veterinario Guarapiranga fica na Avenida Guarapiranga, em Sao Paulo/SP. A implementacao deve exibir endereco completo e mapa com dados confirmados."
```

### 5.6 Microcopy de formulario e conversao

| Campo/estado | Texto recomendado |
| --- | --- |
| Titulo do formulario | Fale com a equipe do CVG |
| Descricao curta | Envie sua mensagem para orientarmos o melhor canal de atendimento para seu cao ou gato. |
| Nome | Seu nome |
| Contato | WhatsApp ou telefone |
| Especie | Cao ou gato |
| Motivo | Como podemos ajudar? |
| Placeholder do motivo | Ex.: consulta, vacina, exame, banho e tosa, atendimento 24h ou duvida sobre sinais observados. |
| Aviso clinico | Este formulario nao substitui atendimento veterinario. Se houver sinais importantes ou piora repentina, procure avaliacao veterinaria. |
| Botao | Enviar mensagem |
| Sucesso | Recebemos sua mensagem. A equipe do CVG retornara pelo canal informado. |
| Erro | Nao foi possivel enviar agora. Tente novamente ou fale com a equipe pelo telefone/WhatsApp oficial. |
| Consentimento | Ao enviar, voce autoriza o contato da equipe do CVG para responder sua solicitacao. |

### 5.7 Depoimentos e prova social

Orientacao para placeholders:

```yaml
testimonials:
  sourcePolicy: "Usar apenas depoimentos publicos ou autorizados, com fonte, data de coleta e permissao quando aplicavel."
  forbidden:
    - "Nao usar depoimento como promessa de cura, diagnostico ou resultado."
    - "Nao inventar nomes, fotos, notas, CRMV, especialidades ou casos."
    - "Nao publicar dados de paciente, tutor, prontuario ou imagem sensivel sem autorizacao."
  placeholderCopy:
    eyebrow: "Acolhimento reconhecido por tutores"
    title: "Experiencias reais devem ser exibidas com fonte atualizada"
    body: "Antes de publicar numeros de avaliacao ou comentarios, confirmar a fonte, a data e a autorizacao de uso. O texto deve destacar acolhimento, clareza e atencao, nunca prometer resultado clinico."
```

Copy segura para bloco de reputacao sem numeros:

```mdx
## Confianca construida no cuidado diario

Tutores costumam valorizar atendimento claro, acolhimento e disponibilidade quando procuram cuidado veterinario. No site, qualquer depoimento deve ser usado com fonte atualizada e sem transformar experiencia individual em promessa de resultado.
```

### 5.8 Tres artigos de blog prontos

#### Artigo 1 - Atendimento 24h

```mdx
---
title: "Veterinario 24h na Guarapiranga: quando procurar atendimento?"
description: "Entenda sinais em caes e gatos que merecem avaliacao veterinaria e saiba como se preparar para buscar atendimento 24h na Guarapiranga."
slug: "veterinario-24h-guarapiranga-quando-procurar"
category: "Atendimento 24h"
seoFocus: "veterinario 24h Guarapiranga"
audience: "Tutores de caes e gatos da Zona Sul de Sao Paulo"
clinicalReviewRequired: true
cta: "Falar com a equipe do CVG"
---

# Veterinario 24h na Guarapiranga: quando procurar atendimento?

Quando um cao ou gato muda de comportamento ou apresenta um sinal inesperado, e comum o tutor ficar em duvida: observar um pouco mais ou procurar atendimento agora?

Nem todo sinal tem a mesma gravidade, mas alguns quadros exigem avaliacao veterinaria rapida. O objetivo deste guia e ajudar voce a reconhecer situacoes que merecem atencao, sem substituir a consulta.

## Sinais que merecem avaliacao veterinaria

Procure atendimento se o seu pet apresentar:

- dificuldade para respirar;
- convulsoes;
- sangramento;
- dor intensa;
- trauma ou queda;
- suspeita de intoxicacao;
- apatia importante;
- vomitos persistentes;
- diarreia intensa;
- falta de apetite associada a outros sinais;
- piora repentina.

Esses sinais podem ter causas diferentes. A avaliacao presencial permite que o veterinario examine o animal, entenda o historico e indique os proximos passos com mais seguranca.

## O que observar antes de sair de casa

Se for possivel, anote quando os sinais comecaram, se houve ingestao de algo diferente, se o pet usou algum medicamento e se existem exames recentes. Essas informacoes ajudam a equipe a entender o contexto.

Mas nao adie a ida ao veterinario para reunir tudo. Se houver dificuldade respiratoria, convulsao, sangramento, dor intensa ou piora rapida, procure atendimento.

## O que levar ao atendimento 24h

Leve carteira de vacinacao, exames anteriores, medicacoes em uso e informacoes sobre a rotina do pet. Se houver suspeita de intoxicacao, leve a embalagem do produto quando isso puder ser feito com seguranca.

## Conteudo educativo

Este artigo nao diagnostica e nao substitui consulta veterinaria. Em caso de sintomas persistentes, dor, apatia, dificuldade respiratoria, sangramento, vomitos intensos ou duvida sobre a gravidade, procure avaliacao veterinaria.

O Centro Veterinario Guarapiranga atende caes e gatos 24h na Avenida Guarapiranga. Fale com a equipe para orientacao sobre o atendimento.
```

#### Artigo 2 - Check-up

```mdx
---
title: "Check-up para caes e gatos: o que o tutor precisa saber"
description: "Veja por que o check-up veterinario ajuda na prevencao e como a avaliacao deve considerar idade, historico e rotina do pet."
slug: "check-up-caes-gatos-o-que-saber"
category: "Prevencao"
seoFocus: "check-up pet Sao Paulo"
audience: "Tutores preventivos de caes e gatos"
clinicalReviewRequired: true
cta: "Agendar consulta no CVG"
---

# Check-up para caes e gatos: o que o tutor precisa saber

Check-up nao e apenas para quando algo parece errado. A avaliacao preventiva ajuda a acompanhar peso, comportamento, vacinas, saude bucal, pele, pelagem e sinais que podem passar despercebidos no dia a dia.

Para caes e gatos, o intervalo ideal de check-up depende de idade, historico, rotina e orientacao veterinaria.

## Por que o check-up e importante?

Durante a consulta, o veterinario pode conversar sobre alimentacao, comportamento, vacinas, vermifugacao, controle de parasitas e mudancas percebidas pelo tutor.

Quando necessario, exames complementares podem ser indicados para apoiar a avaliacao. A indicacao deve sempre considerar o caso do paciente.

## Filhotes, adultos e idosos

Filhotes precisam de orientacao sobre vacinas, crescimento, socializacao e prevencao. Adultos devem manter rotina de acompanhamento e cuidados preventivos. Pets idosos podem precisar de observacao mais frequente, pois algumas alteracoes aparecem de forma discreta.

Gatos, em especial, podem esconder desconfortos. Mudancas como menor apetite, isolamento, alteracao no uso da caixa de areia ou reducao de interacao merecem atencao.

## O que preparar para a consulta

Leve carteira de vacinacao, exames anteriores, lista de medicamentos e informacoes sobre alimentacao, rotina, comportamento e qualquer mudanca percebida.

## Conteudo educativo

Este artigo nao substitui avaliacao veterinaria. Se o seu pet apresenta sinais persistentes, dor, apatia, perda de apetite, vomitos, diarreia ou mudanca importante de comportamento, procure atendimento veterinario.

O CVG atende caes e gatos na Avenida Guarapiranga e pode orientar a rotina preventiva do seu pet.
```

#### Artigo 3 - Vomitos

```mdx
---
title: "Vomito em cachorro ou gato: sinais que merecem avaliacao"
description: "Vomitos podem ter causas diferentes. Entenda quando observar com atencao e quando procurar avaliacao veterinaria para caes e gatos."
slug: "vomito-cachorro-gato-sinais-avaliacao"
category: "Sinais de alerta"
seoFocus: "vomito em cachorro ou gato"
audience: "Tutores em duvida sobre sintomas"
clinicalReviewRequired: true
cta: "Procurar avaliacao veterinaria"
---

# Vomito em cachorro ou gato: sinais que merecem avaliacao

Ver um cao ou gato vomitando preocupa qualquer tutor. Um episodio pode ter muitas causas, desde indisposicoes passageiras ate situacoes que exigem atendimento. Por isso, o mais importante e observar o conjunto de sinais e procurar avaliacao quando houver persistencia ou piora.

## Quando o vomito merece atencao rapida

Procure atendimento veterinario se o vomito:

- se repete varias vezes;
- vem acompanhado de apatia;
- aparece com sangue;
- ocorre junto com diarreia intensa;
- vem com dor, barriga distendida ou fraqueza;
- acontece apos possivel ingestao de produto, planta, medicamento ou objeto;
- afeta filhotes, idosos ou pets ja debilitados.

## Evite medicar sem orientacao

Medicamentos podem mascarar sinais, causar efeitos indesejados ou dificultar a avaliacao. A conduta segura depende do exame do animal e do historico informado pelo tutor.

## O que contar ao veterinario

Informe quando o vomito comecou, quantas vezes aconteceu, se houve mudanca na alimentacao, se o pet tem acesso a lixo, plantas, produtos de limpeza ou objetos pequenos, e se existem outros sinais.

## Conteudo educativo

Este artigo e informativo e nao substitui consulta veterinaria. Vomitos persistentes, sangue, dor, apatia, diarreia intensa, suspeita de intoxicacao ou piora repentina exigem avaliacao veterinaria.

O Centro Veterinario Guarapiranga atende caes e gatos 24h na Avenida Guarapiranga. Em caso de duvida, fale com a equipe.
```

### 5.9 Tres campanhas prontas

#### Campanha 1 - Atendimento 24h com calma

```yaml
name: "Quando seu pet precisa de avaliacao, o CVG esta 24h"
objective: "Gerar lembranca local para atendimento veterinario 24h sem usar medo."
audience: "Tutores de caes e gatos na Guarapiranga e Zona Sul de Sao Paulo."
channels: ["Instagram feed", "Stories", "Facebook", "Google Business Profile"]
primaryCTA: "Falar com a equipe"
clinicalReviewRequired: true
```

Copy feed:

```md
Seu pet apresentou um sinal que preocupou?

Algumas situacoes pedem avaliacao veterinaria, principalmente quando ha dificuldade para respirar, convulsoes, sangramento, dor intensa, vomitos persistentes, apatia importante ou piora repentina.

O Centro Veterinario Guarapiranga atende caes e gatos 24h na Avenida Guarapiranga.

Em caso de duvida, fale com a equipe ou procure atendimento.
```

Stories:

- Tela 1: "Atendimento veterinario 24h na Guarapiranga"
- Tela 2: "Sinais como dor intensa, dificuldade para respirar, sangramento ou convulsao precisam de avaliacao."
- Tela 3: "CVG | caes e gatos | Avenida Guarapiranga"
- CTA: "Falar com a equipe"

Risco/consideracao: nao usar imagens de sofrimento nem frases como "nao espere ser tarde".

#### Campanha 2 - Check-up preventivo

```yaml
name: "Rotina de cuidado tambem e saude"
objective: "Estimular consultas preventivas, check-up e orientacao de rotina."
audience: "Tutores preventivos de caes e gatos adultos, idosos ou filhotes."
channels: ["Instagram carrossel", "Facebook", "Blog CTA"]
primaryCTA: "Agendar consulta"
clinicalReviewRequired: true
```

Carrossel:

- Slide 1: "Check-up nao e so quando algo parece errado"
- Slide 2: "A consulta ajuda a acompanhar peso, comportamento, vacinas e rotina."
- Slide 3: "Filhotes, adultos e idosos podem ter necessidades diferentes."
- Slide 4: "Exames podem ser indicados pelo veterinario conforme o caso."
- Slide 5: "Agende uma avaliacao no CVG para orientar o cuidado do seu cao ou gato."

Legenda:

```md
Prevenir tambem e cuidar com calma.

O check-up veterinario ajuda a acompanhar mudancas que nem sempre aparecem claramente no dia a dia. A frequencia ideal depende da idade, historico e rotina do pet.

Para orientar o cuidado do seu cao ou gato, fale com a equipe do CVG.
```

Risco/consideracao: nao prometer deteccao precoce garantida nem reduzir check-up a pacote promocional.

#### Campanha 3 - Vacinas com orientacao veterinaria

```yaml
name: "Vacina tambem precisa de orientacao"
objective: "Educar tutores sobre vacinacao individualizada e gerar agendamentos."
audience: "Tutores de filhotes, adultos com carteira atrasada e gatos/cachorros recem-adotados."
channels: ["Instagram feed", "Stories", "Facebook", "Contato/servicos"]
primaryCTA: "Orientar vacinas"
clinicalReviewRequired: true
```

Copy feed:

```md
Carteira de vacina em duvida?

O protocolo ideal para caes e gatos depende de idade, historico, rotina e avaliacao veterinaria. Evite seguir calendarios genericos sem orientacao.

No CVG, a equipe pode avaliar seu pet e orientar os proximos passos de prevencao.

Fale com a equipe para agendar uma consulta.
```

Stories:

- Tela 1: "Vacinas protegem, mas o protocolo nao deve ser no chute"
- Tela 2: "Idade, historico e rotina importam."
- Tela 3: "Fale com o CVG para orientar a vacinacao do seu cao ou gato."

Risco/consideracao: nao citar vacinas especificas como obrigatorias para todos sem revisao veterinaria.

### 5.10 Estrutura MDX e schema editorial sugeridos

Colecao `pages`:

```ts
{
  title: "string",
  description: "string",
  seoFocus: "string",
  route: "string",
  ctaPrimary: "string",
  ctaSecondary: "string optional",
  clinicalReviewRequired: "boolean",
  lastEditorialReview: "YYYY-MM-DD",
  owner: "CMOEditorial"
}
```

Colecao `blog`:

```ts
{
  title: "string",
  description: "string",
  slug: "string",
  category: "Prevencao | Atendimento 24h | Sinais de alerta | Servicos",
  seoFocus: "string",
  audience: "string",
  clinicalReviewRequired: "boolean",
  cta: "string",
  lastEditorialReview: "YYYY-MM-DD",
  owner: "CMOEditorial"
}
```

Colecao `campaigns`:

```ts
{
  name: "string",
  objective: "string",
  audience: "string",
  channels: ["Instagram feed", "Stories", "Facebook", "Google Business Profile"],
  primaryCTA: "string",
  clinicalReviewRequired: "boolean",
  status: "draft | reviewed | approved | published"
}
```

### 5.11 CTAs aprovados

- Falar com a equipe
- Agendar consulta
- Conhecer servicos
- Ver como chegar
- Orientar vacinas
- Procurar avaliacao veterinaria
- Tire sua duvida pelo WhatsApp
- Cuidar da rotina do seu pet

### 5.12 Frases proibidas neste pacote

- "Garantimos recuperacao."
- "Diagnostico rapido e preciso em todos os casos."
- "O melhor hospital veterinario de Sao Paulo."
- "Se voce ama seu pet, traga agora."
- "Nao precisa se preocupar."
- "Pode esperar em casa."
- "Tratamento seguro e sem riscos."
- "Ultimas vagas para cuidar da saude do seu pet."

## 6. Riscos e consideracoes clinicas

- Conteudo sobre sintomas, vomitos, vacinas, cirurgia, internacao, anestesia, exames ou urgencia deve passar por revisao humana/veterinaria antes de publicacao.
- O uso de "hospital veterinario" deve ser validado pela direcao tecnica/CEO se houver qualquer sensibilidade regulatoria ou comercial.
- Horario 24h, endereco completo, telefone, WhatsApp, convenios, servicos ativos e numeros de avaliacao devem ser confirmados em fonte operacional antes do deploy.
- Depoimentos so podem ser publicados com fonte, data e permissao quando aplicavel; nao usar prova social como evidencia clinica.
- Imagens de pacientes, bastidores e procedimentos exigem consentimento, curadoria etica e ausencia de exposicao sensivel.
- Nenhum texto deste pacote diagnostica, prescreve, promete resultado ou substitui consulta veterinaria.

## 7. Criterios de aceite

- Inclui conteudo pronto para paginas institucionais, servicos, contato e blog.
- Entrega 3 artigos completos de blog em estrutura MDX/frontmatter.
- Entrega 3 campanhas completas com objetivo, canais, copy e riscos.
- Inclui title/meta guidance para paginas principais.
- Inclui mapeamento de SEO local para os termos prioritarios: veterinario zona sul SP, hospital veterinario Guarapiranga, emergencia veterinaria 24h, clinica veterinaria caes e gatos.
- Inclui FAQ, orientacao de depoimentos e microcopy de formulario.
- Todo conteudo clinico e educativo, sem diagnostico, prescricao, CRMV inventado, medico inventado, depoimento inventado, garantia clinica ou medo manipulativo.
- O handoff para CTO esta estruturado para colecoes MDX e frontmatter.

## 8. Proximo dono e handoff

Proximo dono: CTO em [`RMA-42`](/RMA/issues/RMA-42).

O CTO deve criar ou adaptar as seguintes secoes/arquivos no projeto do site:

- Colecao MDX de paginas institucionais com rotas: `/`, `/sobre`, `/servicos`, `/servicos/atendimento-24h`, `/servicos/consultas-checkup`, `/servicos/exames-laboratorio`, `/servicos/internacao`, `/servicos/cirurgia`, `/servicos/vacinas`, `/servicos/banho-e-tosa`, `/blog`, `/contato`.
- Colecao MDX de blog com os 3 artigos completos deste pacote.
- Estrutura de FAQ consumindo as perguntas de `5.5`.
- Metadados SEO usando a tabela de `5.4`.
- Microcopy de formulario usando `5.6`.
- Bloco de depoimentos com placeholder seguro de `5.7`, sem numeros ou comentarios reais ate validacao de fonte.

UXDesigner deve revisar layout, hierarquia visual, componentes de carrossel/FAQ/cards e uso de imagem. QABrowser deve validar responsividade, legibilidade, overlap e renderizacao apos implementacao tecnica.

export const siteOrigin = "https://www.cvg.cevetguarapiranga.com.br";

export const contact = {
  name: "Centro Veterinario Guarapiranga",
  shortName: "CVG",
  species: "caes e gatos",
  region: "Guarapiranga / Zona Sul de Sao Paulo",
  addressSummary: "Avenida Guarapiranga, Sao Paulo/SP",
  phoneLabel: "Telefone oficial a configurar",
  phoneHref: "#contato",
  whatsappHref: import.meta.env.PUBLIC_CVG_WHATSAPP_URL || "https://wa.me/5511985097715",
  mapsHref: import.meta.env.PUBLIC_CVG_MAPS_URL || "#localizacao",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Servicos" },
  { href: "/servicos/atendimento-24h", label: "Emergencia 24h" },
  { href: "/blog", label: "Blog" },
  { href: "/campanhas", label: "Campanhas" },
  { href: "/contato", label: "Contato" },
];

export const trustBadges = [
  "Atendimento 24h",
  "Caes e gatos",
  "Estrutura hospitalar",
  "Avenida Guarapiranga",
];

export const services = [
  {
    title: "Atendimento 24h",
    href: "/servicos/atendimento-24h",
    summary: "Avaliacao para situacoes de urgencia, duvida ou piora clinica.",
    image: "/assets/service-consultas.png",
    group: "urgencia",
  },
  {
    title: "Consultas e check-up",
    href: "/servicos/consultas-checkup",
    summary: "Acompanhamento de rotina, prevencao e investigacao inicial.",
    image: "/assets/service-consultas.png",
    group: "diagnostico",
  },
  {
    title: "Exames e laboratorio",
    href: "/servicos/exames-laboratorio",
    summary: "Apoio diagnostico conforme avaliacao e orientacao veterinaria.",
    image: "/assets/service-exames.png",
    group: "diagnostico",
  },
  {
    title: "Internacao",
    href: "/servicos/internacao",
    summary: "Observacao, suporte e continuidade de cuidado para caes e gatos.",
    image: "/assets/service-internacao.png",
    group: "diagnostico",
  },
  {
    title: "Cirurgia",
    href: "/servicos/cirurgia",
    summary: "Procedimentos com avaliacao previa e orientacao ao tutor.",
    image: "/assets/service-cirurgia.png",
    group: "diagnostico",
  },
  {
    title: "Vacinas",
    href: "/servicos/vacinas",
    summary: "Protocolos preventivos definidos conforme especie, historico e rotina.",
    image: "/assets/service-vacinas.png",
    group: "rotina",
  },
  {
    title: "Banho e tosa",
    href: "/servicos/banho-e-tosa",
    summary: "Higiene e cuidado de rotina com atencao ao conforto do animal.",
    image: "/assets/service-banho-tosa.png",
    group: "rotina",
  },
];

export const faqs = [
  {
    question: "O CVG atende 24h?",
    answer:
      "Sim. O Centro Veterinario Guarapiranga comunica atendimento veterinario 24h para caes e gatos na Avenida Guarapiranga. Confirme canais e orientacoes operacionais nos contatos oficiais antes da publicacao final.",
  },
  {
    question: "Quando devo procurar atendimento veterinario?",
    answer:
      "Procure avaliacao se houver dificuldade para respirar, convulsoes, sangramento, dor intensa, trauma, suspeita de intoxicacao, vomitos persistentes, diarreia intensa, apatia importante ou piora repentina.",
  },
  {
    question: "Conteudo do site substitui consulta?",
    answer: "Nao. O conteudo e educativo. Sinais parecidos podem ter causas diferentes, e a orientacao adequada depende da avaliacao do animal.",
  },
  {
    question: "O CVG atende caes e gatos?",
    answer: "Sim. A comunicacao publica do CVG mantem foco em caes e gatos.",
  },
  {
    question: "Exames sempre sao necessarios?",
    answer: "Nao necessariamente. Exames podem apoiar a avaliacao quando indicados pelo veterinario. A necessidade depende do historico, exame fisico e sinais do paciente.",
  },
  {
    question: "Como saber quais vacinas meu pet precisa?",
    answer: "A definicao deve ser feita por veterinario, considerando especie, idade, historico, rotina e risco de exposicao. Leve a carteira de vacinacao quando disponivel.",
  },
];

export function routeToSlug(route: string) {
  return route === "/" ? undefined : route.replace(/^\//, "");
}

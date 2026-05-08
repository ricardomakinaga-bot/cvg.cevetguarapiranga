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
  },
  {
    title: "Consultas e check-up",
    href: "/servicos/consultas-checkup",
    summary: "Acompanhamento de rotina, prevencao e investigacao inicial.",
    image: "/assets/service-consultas.png",
  },
  {
    title: "Exames e laboratorio",
    href: "/servicos/exames-laboratorio",
    summary: "Apoio diagnostico conforme avaliacao e orientacao veterinaria.",
    image: "/assets/service-exames.png",
  },
  {
    title: "Internacao",
    href: "/servicos/internacao",
    summary: "Observacao, suporte e continuidade de cuidado para caes e gatos.",
    image: "/assets/service-internacao.png",
  },
  {
    title: "Cirurgia",
    href: "/servicos/cirurgia",
    summary: "Procedimentos com avaliacao previa e orientacao ao tutor.",
    image: "/assets/service-cirurgia.png",
  },
  {
    title: "Vacinas",
    href: "/servicos/vacinas",
    summary: "Protocolos preventivos definidos conforme especie, historico e rotina.",
    image: "/assets/service-vacinas.png",
  },
  {
    title: "Banho e tosa",
    href: "/servicos/banho-e-tosa",
    summary: "Higiene e cuidado de rotina com atencao ao conforto do animal.",
    image: "/assets/service-banho-tosa.png",
  },
];

export const faqs = [
  {
    question: "O CVG atende 24h?",
    answer:
      "Sim. O Centro Veterinario Guarapiranga comunica atendimento veterinario 24h para caes e gatos. Antes da publicacao final, o horario deve ser confirmado com a fonte operacional atualizada.",
  },
  {
    question: "Quais animais o CVG atende?",
    answer: "O CVG atende caes e gatos.",
  },
  {
    question: "Quando devo procurar atendimento veterinario com urgencia?",
    answer:
      "Procure avaliacao veterinaria se houver dificuldade para respirar, convulsoes, sangramento, dor intensa, trauma, intoxicacao suspeita, vomitos persistentes, diarreia intensa, apatia importante ou piora repentina.",
  },
  {
    question: "Posso medicar meu pet antes de levar ao veterinario?",
    answer:
      "Evite medicar sem orientacao veterinaria. Medicamentos podem trazer riscos e a conduta adequada depende da avaliacao do animal.",
  },
  {
    question: "Como chegar ao CVG?",
    answer:
      "O Centro Veterinario Guarapiranga fica na Avenida Guarapiranga, em Sao Paulo/SP. A implementacao exibe endereco textual e mapa/link com dados confirmaveis.",
  },
];

export function routeToSlug(route: string) {
  return route === "/" ? undefined : route.replace(/^\//, "");
}

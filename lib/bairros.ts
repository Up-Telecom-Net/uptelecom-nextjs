export type Bairro = {
  slug: string;
  nome: string;
  /** Nome com preposição para títulos: "em Trindade", "no Centro de Florianópolis". */
  local: string;
  /** Parágrafo específico do bairro (fatos já publicados no site/blog). */
  destaque: string;
  /** Variações de grafia ou nomes usados nas buscas. */
  variantes?: string[];
};

export const bairros: Bairro[] = [
  {
    slug: "itacurubi",
    nome: "Itacurubi",
    local: "no Itacurubi",
    variantes: ["Itacorubi"],
    destaque:
      "O Itacurubi (também escrito Itacorubi) concentra condomínios, escolas e empresas de tecnologia. A fibra óptica da Up Telecom chega direto até a casa ou o escritório, com velocidade real também nos horários de pico.",
  },
  {
    slug: "agronomica",
    nome: "Agronômica",
    local: "na Agronômica",
    destaque:
      "Na Agronômica a Up Telecom atende residências e pequenos comércios com fibra óptica 100% dedicada. O suporte é local e a equipe técnica conhece o bairro, o que encurta o tempo de resposta quando você precisa.",
  },
  {
    slug: "monte-serrat",
    nome: "Monte Serrat",
    local: "no Monte Serrat",
    destaque:
      "O Monte Serrat entrou recentemente na cobertura da Up Telecom. Quem mora na região já pode contratar internet fibra óptica residencial ou empresarial com a mesma qualidade dos demais bairros atendidos.",
  },
  {
    slug: "trindade",
    nome: "Trindade",
    local: "na Trindade",
    destaque:
      "A Trindade reúne estudantes da UFSC, profissionais em home office e famílias que usam a internet ao mesmo tempo para aula, trabalho, streaming e jogos. A fibra óptica da Up Telecom entrega velocidade real e estabilidade para esse uso simultâneo.",
  },
  {
    slug: "caeira",
    nome: "Caeira",
    local: "na Caeira",
    destaque:
      "Na Caeira a Up Telecom leva fibra óptica até a sua casa, com instalação rápida e agendamento flexível. Provedor local, com equipe de atendimento em Florianópolis.",
  },
  {
    slug: "saco-dos-limoes",
    nome: "Saco dos Limões",
    local: "no Saco dos Limões",
    destaque:
      "O Saco dos Limões vem crescendo em demanda por internet fibra óptica residencial. A Up Telecom atende o bairro com rede própria, roteador Wi-Fi em comodato e suporte local.",
  },
  {
    slug: "centro",
    nome: "Centro",
    local: "no Centro de Florianópolis",
    destaque:
      "No Centro de Florianópolis a Up Telecom atende moradores, comércio, escritórios e consultórios. Para empresas há planos com IP fixo incluso e suporte prioritário, além dos planos residenciais e do telefone fixo com ligações ilimitadas.",
  },
  {
    slug: "serrinha",
    nome: "Serrinha",
    local: "na Serrinha",
    destaque:
      "A Serrinha fica ao lado da UFSC e tem uso intenso de internet em repúblicas e apartamentos compartilhados. A fibra óptica da Up Telecom mantém a velocidade estável mesmo com várias pessoas conectadas ao mesmo tempo.",
  },
  {
    slug: "carvoeira",
    nome: "Carvoeira",
    local: "na Carvoeira",
    destaque:
      "A Carvoeira é vizinha da Trindade e abriga muitos estudantes da UFSC. A Up Telecom atende o bairro com fibra óptica pensada para uso simultâneo: videoaulas, streaming, downloads e jogos online, com o Plano Gamer com ExitLag para quem joga competitivo.",
  },
  {
    slug: "pantanal",
    nome: "Pantanal",
    local: "no Pantanal",
    destaque:
      "O Pantanal conta com fibra óptica residencial da Up Telecom, com infraestrutura dedicada e suporte presencial quando necessário. Um provedor local que atende onde as grandes operadoras costumam demorar.",
  },
  {
    slug: "monte-verde",
    nome: "Monte Verde",
    local: "no Monte Verde",
    destaque:
      "O Monte Verde é uma das áreas mais recentes da cobertura da Up Telecom, com internet fibra óptica residencial e empresarial e a mesma qualidade de atendimento dos demais bairros.",
  },
  {
    slug: "saco-grande",
    nome: "Saco Grande",
    local: "no Saco Grande",
    destaque:
      "O Saco Grande, na região da SC-401, tem demanda crescente de residências e empresas. A Up Telecom atende o bairro com fibra óptica, roteador Wi-Fi em comodato e planos empresariais com IP fixo.",
  },
];

export function getBairro(slug: string): Bairro | undefined {
  return bairros.find((b) => b.slug === slug);
}

export function bairroKeywords(b: Bairro): string[] {
  const nomes = [b.nome, ...(b.variantes ?? [])];
  const porNome = nomes.flatMap((n) => [
    `internet fibra ${n}`,
    `internet fibra óptica ${n}`,
    `internet ${n} florianópolis`,
    `provedor de internet ${n}`,
    `wifi fibra ${n}`,
    `internet residencial ${n}`,
    `internet empresarial ${n}`,
  ]);
  return [
    ...porNome,
    "internet fibra óptica florianópolis",
    "provedor de internet florianópolis",
    "internet ilimitada florianópolis",
    "internet gamer florianópolis",
  ].map((k) => k.toLowerCase());
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  icon: string;
}

export const posts: Post[] = [
  {
    slug: "hidroponia-para-iniciantes",
    title: "Hidroponia para Iniciantes: Como Cultivar Sem Solo e Com Resultados Surpreendentes",
    excerpt:
      "Descubra os fundamentos da hidroponia, os sistemas mais populares e como começar seu próprio cultivo sem terra em casa ou em escala comercial.",
    content: `A hidroponia é uma técnica de cultivo que dispensa o solo, substituindo-o por soluções nutritivas diretamente absorvidas pelas raízes das plantas. O resultado: crescimento até 50% mais rápido, consumo de água drasticamente menor e colheitas abundantes em qualquer espaço.

## O Que é Hidroponia?

Derivada do grego *hydro* (água) e *ponos* (trabalho), a hidroponia usa água enriquecida com nutrientes essenciais para alimentar as plantas diretamente. Sem competição por nutrientes no solo, sem ervas daninhas e sem as limitações climáticas tradicionais, o cultivo hidropônico oferece controle total sobre o ambiente de produção.

## Os Principais Sistemas Hidropônicos

### NFT (Nutrient Film Technique)

O NFT é um dos sistemas mais populares, especialmente para folhosas como alface e rúcula. Um fino filme de solução nutritiva circula continuamente pelas raízes, garantindo oxigenação e nutrição constantes. É eficiente em espaço e fácil de escalar.

### DWC (Deep Water Culture)

No DWC, as raízes ficam suspensas diretamente na solução nutritiva, com aeração feita por bombas de aquário. É um dos sistemas mais simples para iniciantes e produz resultados impressionantes com hortaliças de ciclo curto.

### Substrato Inerte

Sistemas com substratos como argila expandida, fibra de coco ou lã de rocha suportam as plantas enquanto a solução nutritiva é irrigada periodicamente. São ideais para cultivos de tomate, pimentão e pepino.

## O Que Cultivar?

Quase qualquer planta pode ser cultivada de forma hidropônica. As mais recomendadas para iniciantes são:
- **Alface** – ciclo de 30 dias, altíssima demanda no mercado
- **Manjericão e ervas aromáticas** – alta rentabilidade por m²
- **Morango** – excelente adaptação a sistemas em vertical
- **Tomate cereja** – ótimo para sistemas NFT e DWC avançados

## Nutrientes: A Base de Tudo

A solução nutritiva deve conter macronutrientes (N, P, K, Ca, Mg, S) e micronutrientes (Fe, Mn, Zn, Cu, B, Mo). Kits prontos de nutrientes hidropônicos são a opção mais segura para quem está começando. Monitore sempre o pH (ideal entre 5,5 e 6,5) e a condutividade elétrica (CE) da solução.

## Vantagens e Desafios

As vantagens são muitas: uso de água até 90% menor que o cultivo convencional, ausência de agrotóxicos para controle de solo, produção o ano todo e aproveitamento de espaços urbanos. Os desafios incluem o investimento inicial em equipamentos, a curva de aprendizado para balancear nutrientes e a dependência de energia elétrica para bombas e iluminação.

## Conclusão

A hidroponia não é apenas uma alternativa ao cultivo tradicional — é uma revolução na forma como produzimos alimentos. Se você quer começar, invista em um sistema NFT compacto, escolha a alface como primeira cultura e acompanhe de perto os parâmetros da sua solução. Os resultados vão surpreender.`,
    category: "Hidroponia",
    date: "15 Mai 2026",
    readTime: "9 min",
    author: {
      name: "Lucas Ferreira",
      role: "Agrônomo Especialista em Hidroponia",
      initials: "LF",
    },
    icon: "🌱",
  },
  {
    slug: "estufa-inteligente-iot",
    title: "Estufa Inteligente: Como a IoT Está Revolucionando a Agricultura Controlada",
    excerpt:
      "Sensores, automação e inteligência artificial transformam estufas em ambientes autônomos que maximizam a produção e minimizam desperdícios.",
    content: `A estufa inteligente é a convergência entre a produção agrícola tradicional e as mais avançadas tecnologias da Internet das Coisas (IoT). Com sensores distribuídos, atuadores automáticos e algoritmos de IA, é possível criar o ambiente perfeito para cada cultura — sem intervenção humana constante.

## O Que Torna uma Estufa "Inteligente"?

Uma estufa convencional protege as plantas do vento, chuva e variações climáticas extremas. Uma estufa inteligente vai além: ela monitora, decide e age. Sensores capturam dados em tempo real sobre temperatura, umidade relativa do ar, CO₂, radiação solar, umidade do substrato e condutividade elétrica da solução nutritiva. Esses dados alimentam um sistema central que automatiza:

- **Ventilação e resfriamento** – ativados quando a temperatura ultrapassa limiares definidos
- **Nebulização** – para controle de umidade e resfriamento evaporativo
- **Irrigação** – por gotejamento ou inundação programada com base na umidade do substrato
- **Iluminação artificial** – LEDs de espectro ajustável ativados conforme a radiação natural disponível
- **Enriquecimento de CO₂** – para acelerar a fotossíntese em ambientes fechados

## Arquitetura de uma Estufa IoT

A infraestrutura típica de uma estufa inteligente é composta por três camadas:

### Camada de Sensores e Atuadores
Dispositivos de campo que coletam dados ambientais e executam ações físicas. Sensores de temperatura e umidade (DHT22, SHT31), sensores de CO₂ (MH-Z19), sensores de pH e CE em linha, câmeras de visão computacional e atuadores como válvulas solenoides, ventiladores e dosadoras peristálticas.

### Camada de Processamento Local
Microcontroladores como ESP32 ou Raspberry Pi processam dados localmente, garantindo respostas rápidas mesmo sem conexão à internet. Lógicas de controle PID garantem estabilidade nos parâmetros críticos.

### Camada de Nuvem e Analytics
Dados são enviados para plataformas como AWS IoT, Azure IoT Hub ou soluções open-source como Node-RED + InfluxDB + Grafana. Dashboards em tempo real permitem monitoramento remoto e alertas via SMS ou push notification.

## IA na Estufa: Previsão e Otimização

Modelos de machine learning treinados com histórico de ciclos anteriores conseguem prever necessidades hídricas, antecipar surtos de pragas com base em padrões climáticos e otimizar receitas de nutrientes para maximizar produtividade.

Alguns sistemas avançados já utilizam visão computacional para detectar deficiências nutricionais e sintomas de doenças nas plantas antes que sejam visíveis a olho nu.

## ROI e Viabilidade Econômica

Estufas inteligentes de pequeno porte (200–500 m²) podem ser equipadas com automação básica por R$ 15.000–R$ 40.000. O retorno vem da redução do uso de água (até 60%), diminuição de perdas por pragas (até 40%) e aumento da produtividade por metro quadrado (25–50%).

## O Futuro das Estufas

Com a popularização dos modelos de IA embarcados (edge AI) e a redução do custo de sensores, estufas inteligentes estão se tornando acessíveis até para pequenos produtores. Em 2026, já é possível montar uma estufa automatizada funcional com menos de R$ 5.000 em hardware, utilizando soluções open-source.

A estufa inteligente não é o futuro da agricultura — é o presente que poucos ainda adotaram.`,
    category: "Estufa Inteligente",
    date: "10 Mai 2026",
    readTime: "11 min",
    author: {
      name: "Renata Oliveira",
      role: "Engenheira de Automação Agrícola",
      initials: "RO",
    },
    icon: "🏡",
  },
  {
    slug: "cultivo-indoor-led",
    title: "Cultivo Indoor com LEDs: O Guia Completo para Iluminação de Alta Performance",
    excerpt:
      "Escolha o espectro certo, calcule a intensidade luminosa e monte uma sala de cultivo indoor que produz como uma fazenda ao ar livre.",
    content: `O cultivo indoor depende fundamentalmente da iluminação artificial para substituir o sol. Com a evolução das tecnologias LED, hoje é possível replicar — e até superar — a eficiência do cultivo a céu aberto. Mas a escolha errada de luminária pode comprometer toda uma colheita.

## Por Que LEDs Dominam o Cultivo Indoor

As antigas lâmpadas HPS (High Pressure Sodium) e MH (Metal Halide) eram as opções padrão por décadas. Consumiam muita energia, geravam calor excessivo e tinham vida útil limitada. Os LEDs modernos de alta potência mudaram esse cenário:

- **Eficiência energética**: LEDs Full Spectrum chegam a 2,8 µmol/J, contra 1,7 µmol/J das melhores HPS
- **Calor reduzido**: menos carga térmica na sala, menores custos com climatização
- **Espectro ajustável**: é possível mudar a composição espectral conforme a fase da planta
- **Vida útil**: 50.000–100.000 horas, contra 10.000–20.000 das lâmpadas convencionais

## Entendendo o Espectro de Luz

As plantas utilizam principalmente:

- **Azul (400–500 nm)**: estimula crescimento vegetativo, compacidade e espessura foliar
- **Verde (500–600 nm)**: penetra mais fundo no dossel foliar, importante para camadas inferiores
- **Vermelho (600–700 nm)**: motor da fotossíntese, acelera o florescimento e a frutificação
- **Far-Red (700–800 nm)**: ativa o efeito Emerson, aumentando eficiência fotossintética

LEDs Full Spectrum de qualidade cobrem toda essa faixa, com picos otimizados para cada fase do ciclo.

## Calculando a Intensidade: PPFD e DLI

**PPFD** (Photosynthetic Photon Flux Density) mede a intensidade luminosa em µmol/m²/s que chega à superfície das plantas. Valores de referência:

| Cultura | PPFD ideal |
|---|---|
| Alface e folhosas | 150–250 µmol/m²/s |
| Ervas aromáticas | 200–400 µmol/m²/s |
| Tomate e pimentão | 400–800 µmol/m²/s |
| Cannabis (onde legal) | 600–1200 µmol/m²/s |

**DLI** (Daily Light Integral) é a dose diária total de luz, calculada por PPFD × horas de fotoperíodo × 3.600 / 1.000.000. Alface precisa de DLI entre 12–17 mol/m²/dia; tomate em produção, entre 20–30 mol/m²/dia.

## Montando Sua Sala de Cultivo

### Dimensionamento

Para uma sala de 4 m², com cultivo de tomate cereja, você precisará de cerca de 600 PPFD no plano das plantas. Uma LED de 320W de boa qualidade cobre essa área com folga. Use um medidor de luz PAR para verificar a uniformidade da distribuição.

### Controle de Temperatura e Ventilação

LEDs ainda geram calor — geralmente no driver e no dissipador. Mantenha a temperatura entre 22–28°C durante o fotoperíodo. Ventilação forçada com renovação de ar a cada 1–3 minutos é essencial para controle de CO₂, umidade e temperatura.

### Automação do Fotoperíodo

Temporizadores digitais ou controladores de ambiente automatizam o fotoperíodo conforme a fase:
- Vegetativo: 18h luz / 6h escuro
- Florescimento (para plantas de dia curto): 12h/12h

## Erros Comuns no Cultivo Indoor

- **Luz insuficiente**: subestimar o PPFD necessário é o erro mais comum de iniciantes
- **Luz em excesso**: fotoinibição é real — respeite os limites de cada espécie
- **Calor excessivo**: LEDs baratos sem boa dissipação térmica degradam rapidamente e queimam plantas
- **Fotoperíodo inconsistente**: qualquer vazamento de luz durante a fase de escuro pode causar problemas em plantas de dia curto

## Conclusão

O cultivo indoor bem iluminado é uma ciência — e também uma arte. Com LEDs de qualidade, medição precisa de PPFD e automação do fotoperíodo, sua sala de cultivo pode produzir colheitas espetaculares durante todo o ano, independente da estação ou do clima lá fora.`,
    category: "Cultivo Indoor",
    date: "05 Mai 2026",
    readTime: "12 min",
    author: {
      name: "Paulo Drummond",
      role: "Especialista em Cultivo Indoor",
      initials: "PD",
    },
    icon: "💡",
  },
  {
    slug: "analise-de-pragas-ia",
    title: "Análise de Pragas com IA: Detecção Precoce que Salva Colheitas Inteiras",
    excerpt:
      "Como visão computacional e machine learning estão permitindo identificar pragas e doenças em plantas com dias de antecedência e 95% de precisão.",
    content: `A perda de colheitas por pragas e doenças representa bilhões de reais em prejuízo para a agricultura brasileira todo ano. A boa notícia: a inteligência artificial está mudando esse cenário, tornando possível detectar infestações antes que causem danos visíveis a olho nu.

## O Problema das Pragas no Cultivo Protegido

Mesmo em estufas e sistemas hidropônicos — ambientes teoricamente controlados — pragas como ácaros, pulgões, mosca-branca, tripes e larvas mineiras encontram formas de se instalar. Em cultivos convencionais ao ar livre, o cenário é ainda mais crítico.

O grande desafio é que, quando um agricultor identifica uma praga visualmente, a infestação já está em estágio avançado. Nesse ponto, o controle é mais caro, mais trabalhoso e os danos à produção já são consideráveis.

## Como a IA Detecta Pragas Precocemente

### Visão Computacional com Câmeras Multiespectrais

Câmeras que capturam imagens além do espectro visível — especialmente no infravermelho próximo (NIR) — conseguem identificar alterações no metabolismo das plantas antes que apareçam sintomas visíveis. Folhas sob estresse hídrico, nutricional ou biótico (causado por pragas) refletem a luz de forma diferente de folhas saudáveis.

Modelos de deep learning treinados com milhares de imagens de plantas doentes e saudáveis conseguem classificar com alta precisão os estágios iniciais de infestação.

### Análise de Imagens RGB com CNNs

Redes neurais convolucionais (CNNs) como ResNet, EfficientNet e YOLOv8 são treinadas para identificar:
- **Manchas e lesões foliares** características de cada patógeno
- **Deformações** causadas por insetos sugadores como pulgões e tripes
- **Galhas e minas foliares** produzidas por larvas
- **Teia** de ácaros em fases iniciais, antes de serem visíveis a olho nu
- **Exúvias e excrementos** de insetos, indicadores de presença mesmo sem o inseto visível

### Armadilhas Inteligentes com Contagem Automática

Armadilhas adesivas equipadas com câmeras e IA contam e identificam automaticamente insetos capturados, gerando alertas quando a densidade populacional ultrapassa limites de dano econômico. Isso elimina o trabalho manual de inspeção e permite monitoramento contínuo.

## Plataformas e Soluções Disponíveis

Em 2026, diversas plataformas comerciais e open-source já estão disponíveis:

- **PlantVillage Nuru**: app gratuito que usa fotos tiradas com smartphone para identificar doenças em mandioca, milho e feijão
- **Agrio**: plataforma comercial com modelos para mais de 70 culturas e 400 patógenos
- **PEAT/Plantix**: identificação por imagem com base de dados de mais de 30.000 doenças e pragas
- **Soluções personalizadas**: modelos treinados especificamente para uma cultura ou região, com acurácia superior a 95%

## Integração com Sistemas de Manejo

A IA não apenas detecta — ela recomenda ações. Integrada ao sistema de gestão da estufa ou fazenda, a plataforma pode:

- Calcular a probabilidade de disseminação baseada em condições climáticas
- Sugerir o produto fitossanitário mais eficaz e seu momento ideal de aplicação
- Estimar o impacto econômico da infestação se não tratada
- Gerar relatórios para rastreabilidade e certificação orgânica

## Resultados Reais

Produtores que implementaram sistemas de detecção precoce por IA relatam:
- Redução de 35–55% no uso de agrotóxicos
- Queda de 60–70% nas perdas por pragas
- Aumento de 20–30% na lucratividade por ciclo
- Menor impacto ambiental e maior facilidade de obter certificações

## O Futuro: Drones + IA

A próxima fronteira é a integração de drones equipados com câmeras multiespectrais e modelos de IA embarcados. Em uma única varredura, um drone pode mapear toda a área de cultivo, identificar focos de infestação com coordenadas GPS precisas e gerar um mapa de calor para aplicação localizada de defensivos — reduzindo ainda mais o volume de produto aplicado.

## Conclusão

A análise de pragas com IA não é um luxo tecnológico — é uma necessidade competitiva. Com ferramentas cada vez mais acessíveis e precisas, qualquer produtor, do pequeno ao grande, pode detectar problemas antes que se tornem catástrofes. O monitoramento inteligente é o primeiro passo para uma agricultura mais sustentável e lucrativa.`,
    category: "Análise de Pragas",
    date: "28 Abr 2026",
    readTime: "10 min",
    author: {
      name: "Camila Ramos",
      role: "Pesquisadora em AgroTech e Fitossanidade",
      initials: "CR",
    },
    icon: "🔬",
  },
  {
    slug: "vertical-farming-futuro-alimentos",
    title: "Vertical Farming: A Fazenda do Futuro Que Já Existe Dentro das Cidades",
    excerpt:
      "Como fazendas verticais urbanas combinam hidroponia, iluminação LED e automação para produzir alimentos frescos a metros de quem vai consumi-los.",
    content: `Imagine comprar uma alface que foi colhida a 500 metros de distância do supermercado, sem agrotóxico, sem solo e com 95% menos água que o cultivo convencional. Isso não é ficção científica — é o vertical farming em ação, e está chegando às cidades brasileiras.

## O Que é Vertical Farming?

Vertical farming é o cultivo de plantas em camadas empilhadas verticalmente, geralmente em ambientes fechados controlados (CEA – Controlled Environment Agriculture). Pode ser instalado em prédios urbanos, contêineres adaptados, armazéns desativados ou estruturas construídas especificamente para esse fim.

A combinação de hidroponia (ou aeroponics), iluminação LED de espectro controlado, automação e monitoramento inteligente cria um ecossistema produtivo que não depende de clima, estação do ano ou tipo de solo.

## Por Que Vertical?

O cultivo em múltiplos andares multiplica a capacidade produtiva por metro quadrado de terreno. Uma fazenda vertical com 10 andares usa a mesma área de solo que uma plantação convencional, mas produz 10 vezes mais — em espaços urbanos onde o metro quadrado é precioso.

Além disso, a proximidade com o consumidor final elimina a necessidade de longas cadeias de transporte e refrigeração, reduzindo perdas pós-colheita e a pegada de carbono dos alimentos.

## Tecnologias que Viabilizam o Vertical Farming

### Aeroponia: O Próximo Nível

Enquanto a hidroponia mantém as raízes em solução nutritiva, a aeroponia as deixa suspensas no ar, borrifando névoa nutritiva em ciclos programados. O resultado é um crescimento ainda mais acelerado (até 3x mais rápido que o solo) e um uso de água 99% menor que o cultivo convencional.

### LEDs de Espectro Dinâmico

Os LEDs modernos permitem ajustar o espectro em tempo real conforme a fase da planta e as metas de produção. Quer uma alface mais compacta e crocante? Aumente o azul. Quer acelerar o florescimento? Intensifique o vermelho e adicione far-red no fim do ciclo noturno.

### Robótica e Automação

Fazendas verticais de grande escala já operam com braços robóticos que fazem transplante de mudas, monitoramento visual e colheita. A automação reduz a dependência de mão de obra e garante consistência na operação 24 horas por dia.

### Clima Totalmente Controlado

Temperatura, umidade, CO₂ e pressão são controlados com precisão cirúrgica. Isso elimina estresse climático nas plantas e permite otimizar cada variável para máxima produtividade e qualidade.

## O Que Produzir no Vertical Farming

As culturas mais indicadas hoje são:

- **Folhosas** (alface, rúcula, espinafre, couve): ciclo curto, alta demanda, ótima adaptação
- **Ervas aromáticas** (manjericão, coentro, salsa, hortelã): margens altas, mercado premium
- **Microgreens**: prontos em 7–14 dias, alto valor nutritivo e culinário
- **Morangos**: excelente adaptação a sistemas em torre, mercado crescente
- **Cogumelos**: se adaptam bem a ambientes controlados escuros e úmidos

## Desafios Reais do Setor

O vertical farming ainda enfrenta obstáculos significativos:

- **Custo de energia**: iluminação artificial 24/7 representa 25–40% dos custos operacionais. A viabilidade depende muito do preço da energia elétrica local.
- **Investimento inicial alto**: uma fazenda vertical comercial pequena (500 m²) pode custar R$ 500.000–R$ 2.000.000 para montar.
- **Limitação de culturas**: cereais, raízes e tubérculos ainda não são economicamente viáveis no modelo vertical.
- **Mão de obra especializada**: operar uma fazenda vertical exige conhecimento em hidroponia, eletrônica, automação e agronomia.

## Casos de Sucesso no Brasil

Empresas como Fazenda Futuro Vertical (SP), GreenTech Farms (RJ) e startups em aceleradoras como AgLab já operam fazendas verticais comerciais no país, fornecendo para redes de supermercados premium, restaurantes e serviços de assinatura de hortifrúti.

O mercado brasileiro de vertical farming está crescendo 35% ao ano, impulsionado pela demanda por alimentos frescos, locais e sem agrotóxico.

## Conclusão

O vertical farming resolve simultaneamente três dos maiores desafios da alimentação moderna: segurança alimentar urbana, sustentabilidade e qualidade nutricional. Com a queda dos custos de energia renovável e de LEDs, a equação econômica está melhorando rapidamente. A fazenda do futuro não fica no campo — fica no quarteirão ao lado.`,
    category: "Vertical Farming",
    date: "20 Abr 2026",
    readTime: "13 min",
    author: {
      name: "Juliana Matos",
      role: "Consultora em Agro Urbano e Vertical Farming",
      initials: "JM",
    },
    icon: "🏙️",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
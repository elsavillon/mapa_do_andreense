var config = {
  style: "mapbox://styles/gabrielajorna/cm1kq3y81000401qk7yrvh5yx",
  accessToken: "pk.eyJ1IjoiZ2FicmllbGFqb3JuYSIsImEiOiJjbTE5a29wamIxNnZrMmlvaTV2cjJlajk5In0.bp0Rr_a9dZVGz8A0Q6Dwyg",
  showMarkers: false,
  theme: "light",
  title: "O Mapa do Andreense",
  subtitle: "Conheça o centro como um legítimo ceboleiro",
  byline: "Por Elsa Villon e Gabriela Cassoli",
  footer: "Desenvolvido com Mapbox como exigência da disciplina de Geojornalismo pelo curso de Datastorytelling do Insper. 2024.",
  intro: [
    "Bem-vindo(a) a Santo André: cidade do ABC Paulista conhecida principalmente pela vila inglesa de Paranapiacaba. Andreense é quem nasce em Santo André, mas, para os bernardenses, eles são ceboleiros.",
    "A história data de 1920, devido ao futebol: em uma partida entre o Atlético de São Bernardo e o Corinthians de Santo André, o jogo de ida era em solo andreense. A torcida do São Bernardo decidiu provocar os donos da casa e jogou batatas podres nos rivais, chamando-os de 'ceboleiros'. Na partida de volta, foi a vez dos então atacados revidarem: a torcida andreense jogou cebolas podres na torcida são bernardense e assim batizaram os bernardenses de batateiros.",
    "Nem sempre houve rivalidade entre as cidades, que já foram um único território: Santo André da Borda do Campo de Piratininga, a primeira povoação europeia saindo do litoral paulista. Na época, a região também abrigava a pequena São Caetano do Sul, que hoje conta com um território de pouco mais de 16 km². A história é longa e antiga, mas tanto Santo André quanto São Bernardo assumem suas origens como cidade em 1553.",
    "Santo André, o 'A' do Grande ABC, possui muitas características únicas, assim como as demais seis cidades que compõem a região. E uma delas é justamente a maneira como os cidadãos mais antigos se referem às ruas do Centro de Santo André.",
    "Com 174,8 km², Santo André conta com uma malha extensa de transporte público, com linhas de trólebus, que a ligam a São Bernardo e o bairro de São Mateus, na zona leste de São Paulo, além de quatro estações de trem da linha turquesa da CPTM: Utinga, Prefeito Saladino, Celso Daniel - Santo André e Capuava, que fazem divisa com São Caetano e Mauá. Além, é claro, do distrito de Paranapiacaba, a chamada Vila Inglesa.",
    "Por conta disso, é muito comum ouvir que a pessoa que mora em Santo André está indo para Santo André, que, no mapa do andreense, significa o centro da cidade, ou a Estação Celso Daniel - Santo André. Vamos dar uma volta no centrão?"
  ],
  conclusion: [
    "A família Fláquer era bem influente em Santo André e você verá diferentes ruas com o mesmo sobrenome. É o caso da Rua Luís Pinto Fláquer, popularmente chamada de 'Rua que sobe o ônibus'. E se tem a rua que sobe o ônibus, os andreenses não deixariam passar a 'Rua que desce o ônibus': você provavelmente está na Rua Siqueira Campos.",
      "Como todo velho e bom centro da cidade, Santo André tem a chamada 'Rua dos Bancos', que leva o nome de Av. Senador Fláquer. E não é só na 'Rua dos Bancos' que tem prédio famoso não. A Rua Bernardino de Campos é carinhosamente apelidada como a 'Rua do Bradescão'. E a Rua Elisa Fláquer também compõe a geografia andreense, mas é mais conhecida como a 'Rua dos Sebos'.",
      "Após se perder entre nomes que não estão nas placas ou nos mapas, é provável que você chegue à Av. Coronel Oliveira Lima, que é identificável pela alcunha 'Calçadão'.",
      "Para sair do centro, você provavelmente vai precisar utilizar a Av. Edson Dotto (de um lado) ou Coronel Alfredo Fláquer (o oposto), mas não saberá qual é se não usar a nomenclatura ceboleira: a Perimetral.",
      "Os apelidos das ruas se estendem para além do centro: a 'Rua das Baladas' é a Rua das Figueiras. A Av. Presidente Costa e Silva, é também a 'Rua da Petroquímica'. O Parque Antonio Fláquer não é chamado assim: é comum se referir a ele como Ipiranguinha. E o Viaduto Presidente Castelo Branco perdeu alguns postos dentro da política: de presidente a prefeito, com 'Viaduto do Saladino'.",
      "A geografia andreense é única e uma característica muito marcante em uma cidade que viveu a urbanização e industrialização em meados do meio do século XX e, enquanto houver um ceboleiro tradicional vivo, é provável que ele se refira às ruas, avenidas, travessas, praças e parques da maneira que sua cultura oral lhe foi passada ao longo desses quase 100 anos."
  ],
  chapters: [
    {
     id: "Antiga-Faisa",
     alignment: "left",
     title: "Antiga Faisa (Praça IV Centenário)",
     image: "",
     description: "Antes mesmo de chegar na Estação, você passará pela Praça IV Centenário, a Antiga Faisa (Fundação de Assistência à Infância de Santo André). O local, um dos principais símbolos do município, hoje abriga uma UPA Infantil, recuperando o trabalho de assistência às crianças.",
     location: {
       center: [-46.53189466147833,-23.655891541848522],
       zoom: 16.3,
       pitch: 72,
       bearing: 15.2,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
   {
     id: "Santo-André",
     alignment: "left",
     title: "Santo André (O Centro)",
     image: "",
     description: "Desça na Estação Prefeito Celso Daniel para conhecer Santo André.",
     location: {
       center: [-46.52886142883634,-23.651795978774853],
       zoom: 16.3, 
       pitch: 0.0,
       bearing: 0.0,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
   {
     id: "Beco-da_Diana",
     alignment: "left",
     title: "Conheça o Beco da Diana (Travessa da Diana)",
     image: "",
     description: "Saindo da estação, seguindo à direita, é provável que você passe pelo Beco da Diana, apelido para uma pequena Travessa que leva o mesmo nome.",
     location: {
       center: [-46.52842937867346, -23.65319782111917],
       zoom: 16.3,
       pitch: 72,
       bearing: 15.2,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
   
 {
     id: "Rua-que-sobe-o-onibus",
     alignment: "left",
     title: "Rua que sobe o ônibus (Rua Luís Pinto Fláquer)",
     image: "",
     description: "Precisa sair de Santo André? O seu ponto de ônibus está aqui! A família Fláquer era bem influente em Santo André e você verá diferentes ruas com o mesmo sobrenome. É o caso da Rua Luís Pinto Fláquer, popularmente chamada de Rua que sobe o ônibus.",
     location: {
       center: [-46.52781152897468,-23.64650656434309],
       zoom: 16.3,
       pitch: 72,
       bearing: 15.2,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
   {
     id: "Rua-que-desce-o-onibus",
     alignment: "left",
     title: "Rua que desce o ônibus (Rua Siqueira Campos)",
     image: "",
     description: "E se tem a rua que sobe o ônibus, os andreenses não deixariam passar a Rua que desce o ônibus: você provavelmente está na Rua Siqueira Campos.",
     location: {
       center: [-46.52163171949568,-23.642103539274434],
       zoom: 16.3,
       pitch: 72,
       bearing: 15.2,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
 {
     id: "Rua-dos-bancos",
     alignment: "right",
     title: "Rua dos Bancos (Av. Senador Fláquer)",
     image: "",
     description: "Como todo velho e bom centro da cidade, Santo André tem a chamada ˜Rua dos Bancos˜, que leva o nome de Av. Senador Fláquer.",
     location: {
       center: [-46.52327809216533,-23.662418894057165],
       zoom: 16.3,
       pitch: 72,
       bearing: 15.2,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
    {
     id: "Rua-do-Bradescao",
     alignment: "right",
     title: "Rua do Bradescão (Rua Bernardino de Campos)",
     image: "",
     description: "Não é só na “Rua dos Bancos” que tem prédio famoso não. A Rua Campos Sales é carinhosamente apelidada como a ˜Rua do Bradescão˜. O nome é autoexplicativo e os andreenses ainda a chamam por esse nome por conta do edifício da agência bancária",
     location: {
       center: [-46.52852772883635,-23.654690101517414],
       zoom: 16.3,
       pitch: 72,
       bearing: 15.2,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
  {
     id: "Rua-dos-sebos",
     alignment: "left",
     title: "Rua dos Sebos (Elisa Fláquer)",
     image: "",
     description: "Além da venda de livros usados, a rua Elisa Fláquer também é conhecida pela sua inclinação.",
     location: {
       center: [-46.52887931914999,-23.65803318012041],
       zoom: 16.3,
       pitch: 72,
       bearing: 15.2,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
      {
     id: "Calcadao",
     alignment: "right",
     title: "O Calçadão (Av. Coronel Oliveira Lima)",
     image: "",
     description: "Após se perder entre nomes que não estão nas placas ou nos mapas, é provável que você chegue à Av. Coronel Oliveira Lima, que é identificável pela alcunha Calçadão. O epicentro do comércio está aqui.",
     location: {
       center: [-46.527102147985936,-23.656322715100533],
       zoom: 16.3,
       pitch: 72,
       bearing: 15.2,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
      {
     id: "Perimetral",
     alignment: "right",
     title: "Perimetral (Av. Edson Dotto ou Coronel Alfredo Fláquer)",
     image: "",
     description: "Para sair do centro, você provavelmente vai precisar utilizar a Av. Edson Dotto (de um lado) ou Coronel Alfredo Fláquer (o oposto), mas não saberá qual é se não usar a nomenclatura ceboleira: a Perimetral.",
     location: {
       center: [-46.523005010491005,-23.64776454429557],
       zoom: 16.3,
       pitch: 72,
       bearing: 15.2,
     },
     onChapterEnter: [
       {
         layer: "data-driven-circles-labels",
         opacity: 1.0,
       },
       {
         layer: "data-driven-circles",
         opacity: 1.0,
       },
     ],
     onChapterExit: [],
   },
 ],
};

function sayHello() {
 console.log("hello world!");
}
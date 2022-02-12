export const criacao =
  "A figura a seguir mostra um diagrama esquemático do processo de construção – do web scraping ao pré-processamento de dados – conforme explicado" +
  "nos próximos tópicos.";

export const scraping =
  "O dataset foi inicialmente criado para apoiar pesquisas sobre tarefas de PNL e ML na literatura brasileira e portuguesa. Assim, como fontes de dados" +
  "  primárias, consideramos três bibliotecas digitais bem conhecidas para obras de domínio público principalmente do Brasil e Portugal:" +
  "  Domínio Público, Projecto Adamastor,  e Biblioteca Digital de Literatura de Países Lusófonos (BLPL). Domínio Público é uma biblioteca digital mantida pelo Ministério da Educação do Brasil e inclui obras devidamente cedidas pelos detentores dos" +
  "  direitos autorais. " +
  "  O Projecto Adamastor recolhe mais de 1.100 títulos em português de várias fontes de dados, incluindo Domínio Público. BLPL é um grande banco de " +
  "  dados de literatura brasileira e portuguesa disponível abertamente, com mais de 80.000 títulos." +
  "  A primeira etapa é implementar um rastreador da web para extrair dados brutos automaticamente de todas as três plataformas, já que nenhuma delas " +
  "  fornece uma API. Para isso, usamos BeautifulSoup e Selenium: duas bibliotecas Python populares para web scraping. Extraímos dados tabulares das páginas " +
  "  HTML usando web scrapers específicos, pois cada plataforma tem estrutura e formatação exclusivas.  Esse processo aconteceu entre fevereiro e agosto de 2021." +
  "  Para o Projecto Adamastor, esta fase foi simplesmente realizada de forma simples e direta, por extraindo todos os registros de seu banco de dados." +
  "  O Domínio Público oferece quatro tipos de mídia pesquisáveis ​​(texto, imagem, som, vídeo), e muitas categorias e idiomas para consulta, que exigiam." +
  "  filtragem para extrair apenas textos referentes à literatura em português. O BLPL possui uma forma baseada na seqüência do alfabeto, exigindo " +
  "  então a seleção de cada letra para avançar na busca. Além disso, como um dos objetivos do dataset é extrair texto de obras literárias, criamos " +
  "  um sinalizador binário baseado na disponibilidade dos arquivos para download, um recurso distinto do dataset que também permite a filtragem de " +
  "  tais documentos. Como resultado, esta etapa coletou links para download e metadados de mais de 80.000 obras de domínio público."

export const integracao =
  " O conjunto de dados preliminar fornece informações diferentes e únicas para cada fonte de dados, como a vida dos autores (Projecto Adamastor), os géneros " +
  "literários (BLPL) e o número total de acessos (Domínio Público). A tabela 1 informa os metadados coletados de cada plataforma. " +
  "Com essas informações heterogêneas, usamos uma fonte de dados adicional para integrar e centralizar o conteúdo do conjunto de dados preliminar. Escolhemos " +
  "Goodreads - o maior site do mundo para leitores e recomendações de livros, devido ao seu grande volume de dados disponíveis e sua API de fácil acesso.  " +
  "Por meio de uma API de interface Python, buscamos todos os trabalhos coletados, buscando " +
  "correspondências na plataforma Goodreads. Em particular, os registros do BLPL foram pré-filtrados para manter apenas a obra literária e com o arquivo " +
  "disponível para download, reduzindo-o de 79.208 para 6.480 registros ." +
  "Este estágio de integração de dados também requer uma abordagem de vinculação de registros, já que cada fonte de dados possui um sistema de identificação " +
  "de livros diferente. Esse problema geralmente é resolvido por meio de métodos de correspondência probabilística ou difusa, que aplicam funções de " +
  "similaridade de strings. Aqui, usamos a biblioteca Python fuzzywuzzy para mapear os registros de livros que se referem à mesma entidade em todos fontes. " +
  "A biblioteca usa a distância de Levenshtein para calcular as diferenças entre duas strings. Com uma proporção parcial definida em 75%, o processo de " +
  "correspondência de string difusa gera um resultado incompleto. No total, conseguimos mapear cerca de 25 % (ou seja, 2.388 registros de um total de 9.585) " +
  "dos registros iniciais coletados. A tabela 1 apresenta estatísticas sobre todo o processo antes Registros com Downloads e depois da integração."

export const extracao =
  "Os IDs das obras no conjunto de dados integrado Goodreads possibilitaram coletar informações do autor e da revisão online. Por meio da mesma API Goodreads," +
  "   coletamos metadados de 966 autores, incluindo nome, cidade natal e contagem de fãs. Também criamos outro web scraper para extrair o texto das primeiras " +
  "   30 análises online de cada trabalho. Ao final, foram coletadas 4.240 resenhas de 518 trabalhos distintos, além de 1.430 leitores distintos."

export const preprocessamento =
  "As duas últimas etapas do processo são limpeza de dados e engenharia de recursos. Embora Goodreads continue sendo uma fonte valiosa de informações sobre" +
  " livros, também é uma fonte de dados do mundo real. Como resultado, dados ausentes e barulhentos são inevitáveis, o que requer procedimentos de limpeza" +
  " para lidar com registros corrompidos ou imprecisos. " +
  " Primeiro, lidamos com os dados perdidos descartando variáveis ​​irrelevantes e imputando valores perdidos categóricos como uma categoria desconhecido. " +
  " Em seguida, limpamos e tokenizamos o campo de descrição do trabalho usando a biblioteca Python re. Também analisamos e convertemos alguns campos " +
  " estruturados em listas, incluindo  textit {autores},  textit {estantes populares} e  textit {livros semelhantes}. Finalmente, todos os dados " +
  " de identificação dos leitores de  textit {GoodreadsReviews} foram protegidos usando um método de anonimato baseado em hash, convertendo-o em " +
  " um código numérico." +
  " Na etapa de Engenharia de Recursos, criamos novos recursos a partir dos dados existentes coletados. No Goodreads, um livro pode ser armazenado nas" +
  " prateleiras dos usuários e definido usando tags fixas e personalizadas. Extraímos tags significativas das estantes populares das obras relacionadas " +
  " ao gênero literário e informações de popularidade (por exemplo, número de usuários que rotularam a obra como favorito, para leitura e leitura atual. " +
  " Também criamos alguns recursos quantitativos relacionados ao número total de autores, estantes populares e livros semelhantes; e agrupou as " +
  " categorias de formato de trabalho em três:  textit {físico},  textit {digital} e  textit {desconhecido}."

export const conteudo =
   "O mecanismo de armazenamento usado para dataset é um sistema de gerenciamento de banco de dados relacional (RDBMS). A figura do esquema mostra seu " +
   "12 tabelas divididas em três versões de dataset disponíveis: Preliminary, Goodreads e Full. Essa divisão visa atender a diferentes aplicações dos usuários " +
   "finais, facilitando o acesso aos dados que realmente lhes interessam. A Figura do esquema também inclui a cardinalidade das tabelas principais, enquanto a " +
   "Tabela X apresenta informações quantitativas sobre as versões." +
   "Preliminar: A versão Preliminar inclui quatro tabelas referentes às três bibliotecas digitais e o conjunto de dados preliminar. Conforme mencionado " +
   "anteriormente, cada biblioteca digital apresenta um conjunto de características diferentes. Portanto, disponibilizamos cada um separadamente, com o " +
   "PreliminaryDataset} atuando como uma tabela compilada concatenando todos os registros por seu ID, a fonte da biblioteca digital e o link para download." +
   "Goodreads: A versão do Goodreads inclui sete tabelas referentes a obras, autores, resenhas online e gêneros literários. Para cada um desses elementos do " +
   "contexto de publicação do livro, existem vários metadados disponíveis na API Goodreads e os recursos adicionais gerados na etapa de Engenharia de Recursos. " +
   "Além disso, para representar as relações entre tais elementos, criamos três tabelas de junção: WorksAuthors, WorksReviews e WorksGenres. " +
   "Full: Esta versão combina as duas primeiras versões e a tabela DigitalLibraryGoodreads, que armazena o resultado da integração de dados " +
   ", resultando em 12 tabelas."

export const analise = 
   "Desenvolvemos uma breve análise exploratória de dados para investigar o conjunto de dados do dataset com curadoria e aprimoramento e com foco de resumir " +
   " suas principais características. Todos os detalhes de análise serão apresentados na seção correspondente com a visualização dos dados de diferentes formas."

export const formatoUso =
   "O dataset está publicamente disponível em um repositório Zenodo de acesso aberto, mas também pode ser baixado na seção de download." +
   "Como mencionado acima, todos os dados coletados e enriquecidos estão disponíveis em três partes separadas versões (Preliminar, Goodreads e Completa)." +
   "Portanto, geramos um arquivo de despejo para cada versão que contém a estrutura e o conteúdo do banco de dados, que pode ser importado para qualquer " +
   "servidor MySQL. Como o conjunto de dados está estruturado em formato tabular, também disponibilizamos as três versões no formato .csv, o que facilita" +
   "o processamento em notebooks, por exemplo."

export const desafios = 
    "O dataset não está livre de desafios, que podem ser enfrentados em versões futuras." +
    "" +
    "Nesta seção, discutimos brevemente os principais desafios e limitações, que estão principalmente relacionados à heterogeneidade das fontes de dados " +
    "utilizadas no processo de coleta." +
    "" +
    "Integração de dados:" +
    "Ao juntar diferentes conjuntos de dados com base em entidades que podem (ou não) compartilhar um identificador comum, um método de vinculação de registros" +
    " é frequentemente necessário, o que também foi feito aqui." +
    "Aplicamos uma abordagem de correspondência difusa, em que pares de registros com probabilidades acima de um certo limite foram considerados a mesma entidade." +
    "No entanto, embora a lógica difusa seja normalmente um método melhor do que a correspondência determinística, ela está sujeita a erros de ortografia e de" +
    "formatação. Soluções possíveis: não há muito a fazer em relação a trabalhos que não estão realmente presentes no Goodreads, exceto mantê-los apenas no" +
    "conjunto preliminar; e outra opção é pesquisar manualmente no site por aqueles mapeados incorretamente." +
    "" +
    "Qualidade de dados:" +
    "Além de ser o maior site do mundo para leitores e recomendações de livros, o Goodreads também é uma plataforma de mídia social. Portanto, como qualquer" +
    " outra fonte de dados do mundo real, muito de seu conteúdo disponível é imputado por seus usuários, estando então sujeito à imprecisão e à falta de " +
    " informações." +
    "Solução possível: para considerar uma fonte de dados adicional para tentar imputar o conteúdo incompleto." +
    ""+
    "Gêneros distintos:" +
    "Outro problema decorrente da integração de dados é a distinção de gênero entre as fontes de dados, onde apenas duas possuem gêneros literários: " +
    "Projecto Adamastor e BLPL. No primeiro, o campo word_category compreende 54 gêneros; enquanto no último," +
    "o campo work_genre contém 354 gêneros. Ao comparar os dois conjuntos, eles compartilham apenas quatro gêneros literários Histórias, Biografia, Cartas e" +
    "Memórias. " +
    "Solução possível: para considerar abordagens de correspondência difusa para encontrar gêneros semelhantes."
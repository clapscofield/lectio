export const definicao = 
"O dataset Lectio desenvolvido e disponibilizado pode ser usado para avaliar diferentes tarefas de" +
"Inteligência Artificial (IA), alimentando uma variedade de modelos de aprendizado de máquina e Processamento de" +
"Linguagem Natural(PLN)." +
"Além disso, suas entidades também podem ser exploradas em análises de redes sociais que" +
"serão abordadas em trabalhos futuros. Este docs compartilha aplicações e possíveis cenários dentro de tais contextos," +
"ilustrando a amplitude e o potencial impacto dos dados disponíveis. O Processamento de Linguagem Natural é um ramo" +
"essencial e valioso da Ciência da Computação, permitindo que as máquinas compreendam a linguagem humana. Ele abrange" +
"vários aplicativos, incluindo classificação automatizada de texto, reconhecimento de entidade e análise de sentimentos," +
"principalmente quando aplicados para dados em inglês. Embora possam ser treinados para o português, ainda precisam" +
"ser aprimorados significativamente para obter nuances e peculiaridades do português. Encontramos, nesse sentido, a" +
"justificada necessidade da criação de ferramentas que funcionem para a língua portuguesa."

export const analiseSentimentos = "É uma técnica de PNL para investigar opiniões, sentimentos e emoções nos dados, na " +
"maioria das vezes realizada em dados textuais. A análise de sentimentos continua sendo uma das tarefas mais desafiadoras " +
"da PNL, já que até mesmo os humanos lutam para analisar com precisão os sentimentos. No entanto, há muitos esforços para " +
"melhorar e avançar o estado da arte em diferentes contextos, mesmo para a literatura. Assim como as aplicações citadas, " +
"o texto de obras de domínio público pode ser extraído e, consequentemente, utilizado para alimentar modelos de PNL. " +
"Nesse trabalho, utilizamos da tabela GoodreadsReviews para identificar e extrair informações subjetivas das resenhas " +
"online das obras."

export const analiseSentimentosCont = 
"Como exemplo prático, aplicamos duas bibliotecas de análise de sentimentos (TextBlob e VADER) para revisões online de " +
"trabalhos disponíveis na base de dados. Especificamente, o analisador de sentimento TextBlob retorna duas propriedades " +
"para uma determinada frase de entrada: (i) Polarity, um número flutuante entre $[-1,1]$, onde $-1$ indica sentimento " +
"negativo e $+1$ indica sentimento positivo; e (ii) Subjetividade, um número float na faixa de $[0,1]$, " +
"que geralmente se refere a opinião, emoção ou julgamento. O VADER (Valence Aware Dictionary and Sentiment Reasoner) " +
"é outra ferramenta popular de sentimento baseada em regras, que usa uma lista de recursos lexicais (por exemplo, palavras) " +
"que são rotulados como positivos ou negativos de acordo com sua orientação semântica para calcular o sentimento do texto. " +
"O sentimento VADER retorna a probabilidade de uma determinada sentença de entrada ser positiva, negativa e neutra."

export const predicaodesucesso =
"Pesquisadores têm descrito o sucesso de um livro de diferentes pontos de vista, incluindo listas oficiais de best-sellers " +
" número de resenhas online, contagem de downloads e dados representativos de vendas. Tal diversidade é resultado da natureza " +
" subjetiva e abstrata do sucesso. De fato, o que pode parecer bem-sucedido para algumas pessoas pode não ser bem-sucedido para " +
" outras. Portanto, propor uma definição única e objetiva é uma tarefa desafiadora." +
"" +
"Além dos desafios, considerar apenas um aspecto para resumir o sucesso de um livro pode levar à perda de informações " +
"sobre sua natureza abrangente. Assim, para incorporar plenamente os critérios de sucesso do livro, propomos uma definição" +
" mais flexível baseada em três perspectivas distintas: Reputação, Popularidade e Interesse. " +
" Como resultado, podemos examinar mais profundamente os aspectos intrínsecos do que torna um livro bem-sucedido. " +
" Descrevemos brevemente e indicamos as medidas de sucesso de cada perspectiva proposta a seguir." +
"" +
"Reputação: " +
"A reputação refere-se à importância do livro ser avaliado e foi levada em consideração pelos usuários. A métrica é a " +
"contagem de avaliações feitas para um livro e as avaliações médias, sendo os campos do banco de dados rating_count e average_rating, respectivamente." +
"" +
"Popularidade: " +
"A popularidade de um livro é o quanto esse livro foi lido e avaliado pelos usuários no texto de forma descritiva. Assim, " +
"a métrica é a contagem de textos de resenhas, referindo-se ao campo text_reviews_count. " +
"" +
"Interesse: " +
"O sucesso de um livro baseado em interesse está no quanto os usuários consideram esse livro como um favorito, se estão " +
"lendo no momento ou pretendem lê-lo. Para analisar isso, ele utiliza os campos to_read, current_reading} e favorites."
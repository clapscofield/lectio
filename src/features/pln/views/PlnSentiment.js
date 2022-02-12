import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Chart from "chart.js";
import * as d3 from "d3";
import CardStats from "components/Cards/CardStats.js";
import sentimentos from "../../../assets/img/sentimentos.png";

export default function PlnSentiment() {
  function makeChart(genres) {
    var playerLabels = genres.map(function (d) {
      return d.Name;
    });
    var weeksData = genres.map(function (d) {
      return d.Weeks;
    });

    var chart = {
      type: "horizontalBar",
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Weeks at No.1",
                fontSize: 16
              }
            }
          ]
        }
      },
      data: {
        labels: playerLabels,
        datasets: [
          {
            data: weeksData
          }
        ]
      }
    };

    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, chart);
  }

  useEffect(() => {
    d3.csv("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv").then(makeChart);
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="flex flex-wrap w-full px-12 mr-auto ml-auto mt-6">
              <h1 className="text-5xl mb-2 font-semibold leading-normal">Análise de Sentimento de Reviews</h1>
              <Box sx={{ width: "100%" }}>
                {/* Chart 2*/}
                <h2 className="text-3xl mb-6 font-semibold leading-normal">VADER</h2>
                <div className="relative h-450-px">
                  <h3 className="mb-8 leading-normal">
                    VADER (Valence Aware Dictionary for Sentiment Reasoning) é um modelo usado para análise de
                    sentimento de texto que é sensível tanto à polaridade (positiva/negativa) quanto à intensidade
                    (força) da emoção. Ele está disponível no pacote NLTK e pode ser aplicado diretamente a dados de
                    texto não rotulados. A análise sentimental VADER conta com um dicionário que mapeia características
                    lexicais para intensidades de emoção conhecidas como pontuações de sentimento. A pontuação de
                    sentimento de um texto pode ser obtida somando-se a intensidade de cada palavra no texto. Por
                    exemplo, palavras como 'amor', 'desfrutar', 'feliz', 'gosto' transmitem um sentimento positivo.
                    Também VADER é inteligente o suficiente para entender o contexto básico dessas palavras, como “não
                    amou” como uma afirmação negativa. Também entende a ênfase de capitalização e pontuação, como
                    “APROVEITE!”.
                  </h3>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Total de reviews"
                        statTitle="11677"
                        statArrow=""
                        statPercent=""
                        statPercentColor="text-emerald-500"
                        statDescripiron="Total de reviews avaliadas"
                        statIconName="fa fa-book"
                        statIconColor="bg-primario1"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Negativas"
                        statTitle="64"
                        statArrow=""
                        statPercent="0.5"
                        statPercentColor="text-emerald-500"
                        statDescripiron="do total de reviews"
                        statIconName="fa fa-thumbs-down"
                        statIconColor="bg-red-400"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Positivas"
                        statTitle="407"
                        statArrow=""
                        statPercent="3.5"
                        statPercentColor="text-emerald-500"
                        statDescripiron="do total de reviews"
                        statIconName="fa fa-thumbs-up"
                        statIconColor="bg-emerald-400"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Neutros"
                        statTitle="11206"
                        statArrow=""
                        statPercent="95.9"
                        statPercentColor="text-emerald-500"
                        statDescripiron="do total de reviews"
                        statIconName="fa fa-grip-lines"
                        statIconColor="bg-blueGray-200"
                      />
                    </div>
                  </div>
                  <h3 className="m-4 leading-normal">
                    Observações do método da análise: 95% dos negativos apresentam menos de 140 caracteres e 98% dos
                    positivos menos de 140 caracteres.
                  </h3>
                </div>
                <h2 className="text-3xl mb-6 font-semibold leading-normal">TextBlob</h2>
                <div className="relative h-450-px">
                  <h3 className="mb-8 leading-normal">
                    TextBlob é uma biblioteca python para Natural Language Processing (NLP). O TextBlob usou ativamente
                    o Natural Language ToolKit (NLTK) para realizar suas tarefas. O NLTK é uma biblioteca que oferece
                    fácil acesso a muitos recursos lexicais e permite que os usuários trabalhem com categorização,
                    classificação e muitas outras tarefas.
                    <br />
                    TextBlob é uma biblioteca simples que suporta análises e operações complexas em dados textuais. Para
                    abordagens baseadas em léxico, um sentimento é definido por sua orientação semântica e pela
                    intensidade de cada palavra na frase. Isso requer um dicionário pré-definido classificando palavras
                    negativas e positivas. Geralmente, uma mensagem de texto será representada por um saco de palavras.
                    Depois de atribuir pontuações individuais a todas as palavras, o sentimento final é calculado por
                    alguma operação de agrupamento, como tirar uma média de todos os sentimentos.
                    <br />
                    <b>TextBlob retorna a polaridade e a subjetividade de uma frase. </b> A <b>polaridade</b> está entre
                    [-1,1], -1 define um sentimento negativo e 1 define um sentimento positivo. As palavras de negação
                    invertem a polaridade. O TextBlob possui rótulos semânticos que ajudam na análise refinada. Por
                    exemplo — emoticons, ponto de exclamação, emojis, etc. A subjetividade está entre [0,1]. A{" "}
                    <b>subjetividade</b> quantifica a quantidade de opinião pessoal e informações factuais contidas no
                    texto. A maior subjetividade significa que o texto contém opiniões pessoais em vez de informações
                    factuais. TextBlob tem mais um parâmetro — intensidade. O TextBlob calcula a subjetividade
                    observando a “intensidade”. A intensidade determina se uma palavra modifica a próxima palavra. Para
                    o inglês, os advérbios são usados ​​como modificadores (como em “very good”).
                  </h3>
                </div>
                <h2 className="text-3xl mb-6 font-semibold leading-normal">goodreads_reviews_sentiment.csv</h2>
                <div className="relative h-450-px">
                  <h3 className="mb-8 leading-normal">
                    Nesse csv, foram adicionados as informações geradas pela análise de sentimentos dos reviews. Dessa
                    forma, facilita-se os aprofundamentos na área de sentimentos com esses dados acrescentados no
                    dataset criado.
                  </h3>
                  <img src={sentimentos} alt="..." className="rounded align-left border-none" />
                  <h3 className="mb-2 font-semibold leading-normal">
                    Resumo da análise de sentimentos em resenhas online, categorizadas por gênero e supergênero
                  </h3>
                  {/* <PlnSentimentCsv /> */}
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

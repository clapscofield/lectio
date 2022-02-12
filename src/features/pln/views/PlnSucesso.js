import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Chart from "chart.js";
import * as d3 from "d3";

export default function PlnSucesso() {
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
    d3.csv(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv"
    ).then(makeChart);
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="flex flex-wrap w-full px-12 mr-auto ml-auto mt-6">
              <h1 className="text-5xl mb-2 font-semibold leading-normal">
                Sucesso nos livros
              </h1>
              <Box sx={{ width: "100%" }}>
                {/* Chart 2*/}
                <h2 className="text-3xl mb-6 font-semibold leading-normal">
                  Definição 
                </h2>
                <div className="relative h-450-px">
                  <h3 className="mb-2 leading-normal">
                  Pesquisadores têm descrito o sucesso de um livro de diferentes pontos de vista, incluindo listas oficiais de best-sellers, número de resenhas 
                  online, contagem de downloads e dados representativos de vendas. Tal diversidade é resultado da natureza subjetiva e abstrata do sucesso. 
                  De fato, o que pode parecer bem-sucedido para algumas pessoas pode não ser bem-sucedido para outras. Portanto, propor uma definição única e 
                  objetiva é uma tarefa desafiadora.
                  <br />
                  <br />
                  Além dos desafios, considerar apenas um aspecto para resumir o sucesso de um livro pode levar à perda de informações sobre sua natureza 
                  abrangente. Assim, para incorporar plenamente os critérios de sucesso do livro, propomos uma definição mais flexível baseada em três 
                  perspectivas distintas: <b>Reputação</b>, <b>Popularidade</b> e <b>Interesse</b>. Como resultado, podemos examinar mais profundamente 
                  os aspectos intrínsecos do que torna um livro bem-sucedido. Descrevemos brevemente e indicamos as medidas de sucesso de cada perspectiva 
                  proposta a seguir.
                  <h3 className="text-2xl mb-2 mt-2 font-semibold leading-normal">
                  Reputação
                  </h3>
                  A reputação refere-se à importância do livro ser avaliado e foi levada em consideração pelos usuários. A métrica é a contagem de avaliações
                   feitas para um livro e as avaliações médias, sendo os campos do banco de dados <i>rating_count</i> e <i>average_rating</i>, respectivamente.
                   <h3 className="text-2xl mb-2 mt-2 font-semibold leading-normal">
                  Popularidade
                  </h3>
                  A popularidade de um livro é o quanto esse livro foi lido e avaliado pelos usuários no texto de forma descritiva. Assim, a métrica é a contagem
                   de textos de resenhas, referindo-se ao campo <i>text_reviews_count</i>.
                   <h3 className="text-2xl mb-2 mt-2 font-semibold leading-normal">
                  Interesse
                  </h3>
                  O sucesso de um livro baseado em interesse está no quanto os usuários consideram aquele livro como um favorito, se estão lendo no momento ou 
                  pretendem lê-lo. Para analisar isso, ele utiliza os campos <i>to_read</i>, <i>current_reading</i> e <i>favorites</i>.
                  </h3>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

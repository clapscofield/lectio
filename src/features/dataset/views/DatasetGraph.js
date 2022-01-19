import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chart from "chart.js";
import * as d3 from "d3";
import valoresFaltantes from "../../../assets/img/valoresFaltantes.png";
import corrPlot from "../../../assets/img/corrplot.png";
import jidm from "../../../assets/img/jidm.png";

export default function DatasetGraph() {
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
                Gráficos
              </h1>
              <Box sx={{ width: "100%" }}>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <div className="p-4 flex-auto">
                    {/* Chart */}
                    <h3 className="text-2xl mb-2 font-semibold leading-normal">
                      Gráfico teste
                    </h3>
                    <div className="relative h-350-px">
                      <canvas id="bar-chart"></canvas>
                    </div>
                  </div>
                </Paper>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <div className="p-4 flex-auto">
                    {/* Chart 2*/}
                    <h3 className="text-2xl mb-6 font-semibold leading-normal">
                      Valores faltantes
                    </h3>
                    <div className="relative h-450-px">
                      <img
                        src={valoresFaltantes}
                        alt="..."
                        className="rounded align-left border-none"
                      />
                    </div>
                    <h3 className="mb-2 font-semibold leading-normal">
                      Análise gráfico
                    </h3>
                  </div>
                </Paper>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <div className="p-4 flex-auto">
                    {/* Chart 2*/}
                    <h3 className="text-2xl mb-8 font-semibold leading-normal">
                      Correlações entre gêneros
                    </h3>
                    <div className="relative h-450-px">
                      <img
                        src={corrPlot}
                        alt="..."
                        className="rounded align-left border-none"
                      />
                      <h3 className="mb-2 leading-normal">
                      (a) Desdobramento dos livros coletados em categorias de gênero de Ficção e Não-ficção. 
                      (b) Matriz de correlação de postos de Spearman das variáveis numéricas da tabela <i>Goodreads</i>. Correlações com p-value menor ou igual a 0.05 são consideradas insignificantes e deixadas em branco.
                      </h3>
                    </div>
                    <h3 className="mb-2 font-semibold leading-normal">
                      Análise gráfico
                    </h3>
                  </div>
                </Paper>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <div className="p-4 flex-auto">
                    {/* Chart 2*/}
                    <h3 className="text-2xl mb-8 font-semibold leading-normal">
                      Distribuições em boxplot
                    </h3>
                    <div className="relative h-450-px">
                      <img
                        src={jidm}
                        alt="..."
                        className="rounded align-left border-none"
                      />
                      <h3 className="mb-2 leading-normal">
                      (a) Distribuições do número de obras e fãs para autores de ficção e não ficção. 
                      (b) Distribuição da duração das resenhas para os 5 principais gêneros de ficção e não ficção, respectivamente.
                      </h3>
                    </div>
                    <h3 className="mb-2 font-semibold leading-normal">
                      Análise gráfico
                    </h3>
                  </div>
                </Paper>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

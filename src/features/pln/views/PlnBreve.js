import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Chart from "chart.js";
import * as d3 from "d3";

export default function PlnBreve() {
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
                Em breve...
              </h1>
              <Box sx={{ width: "100%" }}>
                {/* Chart 2*/}
                <h2 className="text-3xl mb-6 font-semibold leading-normal">
                  Próximas análises e features na plataforma:
                </h2>
                <div className="relative h-450-px">
                  <h3 className="mb-2 leading-normal">
                    • Classificação de gênero literário
                    <br />
                    • Análise de redes sociais nos livros
                    <br />
                    • NER - Named Entity Recognition (NER) - Identificação de personagens
                    <br />
                    • Resultados para predição/análise de sucesso
                    <br />
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

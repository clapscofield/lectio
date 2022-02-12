import React, { useEffect } from "react";
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
    d3.csv("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv").then(makeChart);
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="flex flex-wrap w-full px-12 mr-auto ml-auto mt-6">
              <h1 className="text-5xl mb-2 font-semibold leading-normal">Gráficos</h1>
              <Box sx={{ width: "100%" }}>
                {/* grafico iterativo  */}
                {/* <Paper sx={{ width: "100%", mb: 2 }}>
                  <div className="p-4 flex-auto">
                    <h3 className="text-2xl mb-2 font-semibold leading-normal">Gráfico teste</h3>
                    <div className="relative h-350-px">
                      <canvas id="bar-chart"></canvas>
                    </div>
                  </div>
                </Paper> 
                */}
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <div className="p-4 flex-auto">
                    {/* Chart 2*/}
                    <h3 className="text-2xl mb-6 font-semibold leading-normal">Valores faltantes</h3>
                    <div className="relative h-450-px">
                      <img src={valoresFaltantes} alt="..." className="rounded align-left border-none" />
                    </div>
                    <h3 className="mb-2 font-semibold leading-normal">Análise gráfico</h3>
                    <h3>
                      Começamos analisando os valores ausentes que não foram tratados na etapa de limpeza de dados.
                      Principalmente, apenas as tabelas <i>GoodreadsWorks</i>,<i>GoodreadsAuthors</i> e{" "}
                      <i>GoodreadsReviews</i> têm dados ausentes, e a Figura mostra sua porcentagem (a--c) e
                      distribuição em todas as variáveis (d --f). A maioria dos dados ausentes refere-se a datas, que é
                      uma variável complexa para lidar quando ausente. Além disso, algumas informações de identificação
                      relacionadas a obras também possuem registros incompletos, como códigos ISBN/ISBN-13 e ASIN (ASIN
                      significa Amazon Standard Identification Number). No geral, a matriz de nulidade (d--f) mostra uma
                      correlação entre a maioria das variáveis (ou seja, se uma observação está faltando em uma
                      variável, certamente também está faltando na outra), exceto para o código ASIN.
                    </h3>
                  </div>
                </Paper>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <div className="p-4 flex-auto">
                    {/* Chart 2*/}
                    <h3 className="text-2xl mb-8 font-semibold leading-normal">Correlações entre gêneros</h3>
                    <div className="relative h-450-px">
                      <img src={corrPlot} alt="..." className="rounded align-left border-none" />
                      <h3 className="mb-2 leading-normal">
                        (a) Desdobramento dos livros coletados em categorias de gênero de Ficção e Não-ficção. (b)
                        Matriz de correlação de postos de Spearman das variáveis numéricas da tabela <i>Goodreads</i>.
                        Correlações com p-value menor ou igual a 0.05 são consideradas insignificantes e deixadas em
                        branco.
                      </h3>
                    </div>
                    <h3 className="mb-2 font-semibold leading-normal">Análise gráfico</h3>
                    <h3>
                    Com mais de duas mil obras distintas, o conjunto de dados inclui 80 gêneros diferentes classificados nas categorias Ficção ou Não ficção. 
                    A Figura (a) divide todas as obras coletadas por categoria e depois por gênero. Observe que cerca de 70% (54) dos gêneros disponíveis 
                    estão presentes no acervo de nossas obras. Além disso, a maioria (24%) se enquadra nos gêneros Clássicos, Literatura e Romance, todos de 
                    ficção. De fato, cerca de 90% dos gêneros de obras no conjunto de dados são categorizados como ficção, enquanto os 10% restantes dos 
                    gêneros de não ficção se enquadram principalmente em História, Filosofia, Viagens e Política categorias.
                    <br/>
                    Em relação à tabela GoodreadsWorks, a Figura (b) apresenta a matriz de correlação de postos de Spearman das variáveis ​​numéricas. 
                    Existe uma clara correlação positiva entre a maioria das medidas de popularidade dos trabalhos, incluindo average_rating, ratings_count, 
                    text_reviews_count, entre outros. Em contrapartida, tais medidas correlacionam-se negativamente com o ano de publicação das obras, 
                    indicando uma possível preferência por obras clássicas. No geral, existem muito poucos atributos numéricos perfeitamente positivos 
                    ou negativos, reduzindo as chances de multicolinearidade em futuros modelos de aprendizado de máquina usando o dataset Lectio.
                    </h3>
                  </div>
                </Paper>
                <Paper sx={{ width: "100%", mb: 2 }}>
                  <div className="p-4 flex-auto">
                    {/* Chart 2*/}
                    <h3 className="text-2xl mb-8 font-semibold leading-normal">Distribuições em boxplot</h3>
                    <div className="relative h-450-px">
                      <img src={jidm} alt="..." className="rounded align-left border-none" />
                      <h3 className="mb-2 leading-normal">
                        (a) Distribuições do número de obras e fãs para autores de ficção e não ficção. (b) Distribuição
                        da duração das resenhas para os 5 principais gêneros de ficção e não ficção, respectivamente.
                      </h3>
                    </div>
                    <h3 className="mb-2 font-semibold leading-normal">Análise gráfico</h3>
                    <h3>
                    Finalmente, a Figura mostra a distribuição das características dos principais autores e das resenhas online. 
                    A Figura (a) mostra uma diferença entre o número médio de obras de autores de ficção e não-ficção. Apesar do número 
                    semelhante de obras, os autores de ficção têm uma base de fãs mais extensa em comparação com os de não-ficção. 
                    Além disso, a Figura (b) mostra que as revisões são mais longas para os gêneros Fantasia e Filosofia, embora não sejam muito populares 
                    dentro do dataset Lectio. Ainda assim, os principais gêneros de Ficção e Não-ficção são Clássico e História, respectivamente, que
                    também apresentam, em média, longas resenhas.
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

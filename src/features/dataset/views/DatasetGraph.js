import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chart from "chart.js";
import * as d3 from "d3";

export default function DatasetGraph() {

    function makeChart(genres) {
        var playerLabels = genres.map(function(d) {return d.Name});
        var weeksData = genres.map(function(d) {return d.Weeks});

        var chart = {
            type: 'horizontalBar',
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
                        labelString: 'Weeks at No.1',
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
        d3.csv('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv').then(makeChart);

        // let config = {
        //   type: "horizontalBar",
        //   data: {
        //     labels: [
        //       "January",
        //       "February",
        //       "March",
        //       "April",
        //       "May",
        //       "June",
        //       "July",
        //     ],
        //     datasets: [
        //       {
        //         label: new Date().getFullYear(),
        //         backgroundColor: "#ed64a6",
        //         borderColor: "#ed64a6",
        //         data: [30, 78, 56, 34, 100, 45, 13],
        //         fill: false,
        //         barThickness: 8,
        //       },
        //       {
        //         label: new Date().getFullYear() - 1,
        //         fill: false,
        //         backgroundColor: "#3182ce",
        //         borderColor: "#3182ce",
        //         data: [27, 68, 86, 74, 10, 4, 87],
        //         barThickness: 8,
        //       },
        //     ],
        //   },
        //   options: {
        //     maintainAspectRatio: false,
        //     responsive: true,
        //     title: {
        //       display: false,
        //       text: "Orders Chart",
        //     },
        //     tooltips: {
        //       mode: "index",
        //       intersect: false,
        //     },
        //     hover: {
        //       mode: "nearest",
        //       intersect: true,
        //     },
        //     legend: {
        //       labels: {
        //         fontColor: "rgba(0,0,0,.4)",
        //       },
        //       align: "end",
        //       position: "bottom",
        //     },
        //     scales: {
        //       xAxes: [
        //         {
        //           display: false,
        //           scaleLabel: {
        //             display: true,
        //             labelString: "Month",
        //           },
        //           gridLines: {
        //             borderDash: [2],
        //             borderDashOffset: [2],
        //             color: "rgba(33, 37, 41, 0.3)",
        //             zeroLineColor: "rgba(33, 37, 41, 0.3)",
        //             zeroLineBorderDash: [2],
        //             zeroLineBorderDashOffset: [2],
        //           },
        //         },
        //       ],
        //       yAxes: [
        //         {
        //           display: true,
        //           scaleLabel: {
        //             display: false,
        //             labelString: "Value",
        //           },
        //           gridLines: {
        //             borderDash: [2],
        //             drawBorder: false,
        //             borderDashOffset: [2],
        //             color: "rgba(33, 37, 41, 0.2)",
        //             zeroLineColor: "rgba(33, 37, 41, 0.15)",
        //             zeroLineBorderDash: [2],
        //             zeroLineBorderDashOffset: [2],
        //           },
        //         },
        //       ],
        //     },
        //   },
        // };
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
                            <div className="relative h-350-px">
                                <canvas id="bar-chart"></canvas>
                            </div>
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

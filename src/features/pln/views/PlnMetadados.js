// import React, { useEffect } from "react";
// import Box from "@mui/material/Box";
// import Chart from "chart.js";
// import * as d3 from "d3";
// import CardStats from "components/Cards/CardStats.js";

// export default function PlnMetadados() {
//   function makeChart(genres) {
//     var playerLabels = genres.map(function (d) {
//       return d.Name;
//     });
//     var weeksData = genres.map(function (d) {
//       return d.Weeks;
//     });

//     var chart = {
//       type: "horizontalBar",
//       options: {
//         maintainAspectRatio: false,
//         legend: {
//           display: false
//         },
//         scales: {
//           xAxes: [
//             {
//               scaleLabel: {
//                 display: true,
//                 labelString: "Weeks at No.1",
//                 fontSize: 16
//               }
//             }
//           ]
//         }
//       },
//       data: {
//         labels: playerLabels,
//         datasets: [
//           {
//             data: weeksData
//           }
//         ]
//       }
//     };

//     let ctx = document.getElementById("bar-chart").getContext("2d");
//     window.myBar = new Chart(ctx, chart);
//   }

//   useEffect(() => {
//     d3.csv("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv").then(makeChart);
//   }, []);

//   return (
//     <>
//       <div className="flex flex-wrap">
//         <div className="w-full px-4">
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//             <div className="flex flex-wrap w-full px-12 mr-auto ml-auto mt-6">
//               <h1 className="text-5xl mb-2 font-semibold leading-normal">Pesquise por livro</h1>
//               <Box sx={{ width: "100%" }}>
//                 {/* Chart 2*/}
//                 <h2 className="text-3xl mb-6 font-semibold leading-normal">Título</h2>
//                 {/* Barra de poesquisa */}
//                 <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
//                   <div className="relative flex w-full flex-wrap items-stretch">
//                     <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
//                       <i className="fas fa-search"></i>
//                     </span>
//                     <input
//                       type="text"
//                       placeholder="Pesquise aqui"
//                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
//                     />
//                   </div>
//                 </form>
//                 <div className="relative h-450-px">
//                   <h3 className="mb-2 leading-normal">Descrição abreviada do emotion flow</h3>
//                   <div className="flex flex-wrap">
//                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
//                       <CardStats
//                         statSubtitle="Total de reviews"
//                         statTitle="11677"
//                         statArrow=""
//                         statPercent=""
//                         statPercentColor="text-emerald-500"
//                         statDescripiron="Total de reviews avaliadas"
//                         statIconName="fa fa-book"
//                         statIconColor="bg-primario1"
//                       />
//                     </div>
//                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
//                       <CardStats
//                         statSubtitle="Negativas"
//                         statTitle="64"
//                         statArrow=""
//                         statPercent="0.5"
//                         statPercentColor="text-emerald-500"
//                         statDescripiron="do total de reviews"
//                         statIconName="fa fa-thumbs-down"
//                         statIconColor="bg-red-400"
//                       />
//                     </div>
//                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
//                       <CardStats
//                         statSubtitle="Positivas"
//                         statTitle="407"
//                         statArrow=""
//                         statPercent="3.5"
//                         statPercentColor="text-emerald-500"
//                         statDescripiron="do total de reviews"
//                         statIconName="fa fa-thumbs-up"
//                         statIconColor="bg-emerald-400"
//                       />
//                     </div>
//                     <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
//                       <CardStats
//                         statSubtitle="Neutros"
//                         statTitle="11206"
//                         statArrow=""
//                         statPercent="95.9"
//                         statPercentColor="text-emerald-500"
//                         statDescripiron="do total de reviews"
//                         statIconName="fa fa-grip-lines"
//                         statIconColor="bg-blueGray-200"
//                       />
//                     </div>
//                   </div>
//                   <h3 className="m-4 leading-normal">
//                     Observações do método da análise: 95% dos negativos apresentam menos de 140 caracteres e 98% dos
//                     positivos menos de 140 caracteres.
//                   </h3>
//                 </div>
//                 <h2 className="text-3xl mb-6 font-semibold leading-normal">TextSentiment</h2>
//                 <div className="relative h-450-px">
//                   <h3 className="mb-2 leading-normal">Descrição abreviada método 2</h3>
//                 </div>
//               </Box>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

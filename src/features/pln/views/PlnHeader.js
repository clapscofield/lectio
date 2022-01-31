import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function PlnHeader() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-primario-rosa2 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Obras de domínio público"
                  statTitle="82.313"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Coleta de 2021"
                  statIconName="fa fa-book"
                  statIconColor="bg-primario-rosa"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Gêneros Goodreads"
                  statTitle="80"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Coleta de 2021"
                  statIconName="fa fa-bookmark"
                  statIconColor="bg-primario-rosa2"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Autores Goodreads"
                  statTitle="966"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Coleta de 2021"
                  statIconName="fas fa-users"
                  statIconColor="bg-primario-azul"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Reviews Goodreads"
                  statTitle="4.240"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Coleta de 2021"
                  statIconName="fa fa-star"
                  statIconColor="bg-primario-azul2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { createPopper } from "@popperjs/core";
import imagemDownload from "../../../assets/img/download.svg";

export default function Download() {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="flex flex-wrap w-full px-12 mr-auto ml-auto mt-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12">
                <h1 className="text-5xl mb-2 font-semibold leading-normal">
                Download
              </h1>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Todos os dados coletados e enriquecidos estão disponíveis em
                    três versões separadas (Preliminar, Goodreads e Completo).
                    Portanto, geramos um arquivo de despejo para cada versão que
                    contém a estrutura e o conteúdo do banco de dados, que pode
                    ser importado para qualquer servidor MySQL. Como o conjunto
                    de dados está estruturado em formato tabular, também
                    disponibilizamos as três versões em formato .csv, o que
                    facilita o processamento por notebooks.
                  </p>
                  <button
                  className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-8 bg-primario-rosa2 active:bg-primario-rosa ease-linear transition-all duration-150"
                  type="button"
                  ref={btnDropdownRef}
                  onClick={() => {
                    dropdownPopoverShow
                      ? closeDropdownPopover()
                      : openDropdownPopover();
                  }}
                >
                  Download Dataset
                </button>
                <div
                  ref={popoverDropdownRef}
                  className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-primario-rosa text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
                  }
                >
                  <a
                    href="https://zenodo.org/record/5178063/files/PPORTAL.zip?download=1"
                    rel="noopener"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:text-black text-white"
                  >
                    ZIP (arquivos csv)
                  </a>
                  <a
                    href="https://zenodo.org/record/5178063/files/PPORTAL.dump.sql?download=1"
                    rel="noopener"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:text-black text-white"
                  >
                    Dump SQL
                  </a>
                </div>
                </div>
                <div className="w-6/12 sm:w-4/12 px-4">
                  <img
                    src={imagemDownload}
                    alt="..."
                    style={{ height: 423, width: 490 }}
                    className="rounded align-left border-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

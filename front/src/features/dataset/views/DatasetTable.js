import React, {useEffect} from "react";
import Papa from "papaparse";
import 

export default function DatasetTable() {
    const [csvFile, setCsvFile] = useState(); 

    useEffect(() => {
        setCsvFile(x);
        console.log(csvFile);
    });


  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="flex flex-wrap w-full px-12 mr-auto ml-auto mt-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12">
                <h1 className="text-5xl mb-2 font-semibold leading-normal">
                   Visualização tabela de dados 
              </h1>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useEffect, useRef, useState } from "react";
import { criacao, scraping, integracao, extracao, preprocessamento, conteudo, analise, formatoUso, desafios} from "../Docstexts";

export default function Docs() {
  const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = React.useState([]);

    React.useEffect(() => {
      const headingElements = Array.from(document.querySelectorAll("h2, h3"));

      // Created a list of headings, with H3s nested
      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
      console.log(headingElements);
    }, []);

    return { nestedHeadings };
  };

  const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading, index) => {
      const { innerText: title, id } = heading;

      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title
        });
      }
    });

    return nestedHeadings;
  };

  const Headings = ({ headings, activeId }) => (
    <ul>
      {headings.map((heading) => (
        <li
          key={heading.id}
          className={heading.id === activeId ? "active" : ""}
        >
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`).scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li
                  key={child.id}
                  className={child.id === activeId ? "active" : ""}
                >
                  <a
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${child.id}`).scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = useRef({});
    useEffect(() => {
      const callback = (headings) => {
        headingElementsRef.current = headings.reduce((map, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);

        const visibleHeadings = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.isIntersecting)
            visibleHeadings.push(headingElement);
        });

        const getIndexFromId = (id) =>
          headingElements.findIndex((heading) => heading.id === id);

        if (visibleHeadings.length === 1) {
          setActiveId(visibleHeadings[0].target.id);
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
          );
          setActiveId(sortedVisibleHeadings[0].target.id);
        }
      };

      const observer = new IntersectionObserver(callback, {
        rootMargin: "0px 0px -40% 0px"
      });

      const headingElements = Array.from(document.querySelectorAll("h2, h3"));

      headingElements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }, [setActiveId]);
  };

  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();

  useIntersectionObserver(setActiveId);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="flex flex-wrap w-full px-12 mr-auto ml-auto mt-6">
              <h1 className="text-5xl mb-2 font-semibold leading-normal">
                Documentação
              </h1>
              <div className="w-full lg:w-9/12 pr-5">
                <h2
                  className="text-3xl mb-2 font-semibold leading-normal"
                  id="criacao"
                >
                  1. Processo de criação do dataset
                </h2>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {criacao}
                </p>
                <h3
                  className="text-2xl mb-2 font-semibold leading-normal"
                  id="scraping"
                >
                  1.1 Web Scraping
                </h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  {scraping}
                </p>
                <h3
                  className="text-2xl mb-2 font-semibold leading-normal"
                  id="integracao"
                >
                  1.2 Integração de dados
                </h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  {integracao}
                </p>
                <h3
                  className="text-2xl mb-2 font-semibold leading-normal"
                  id="extracao"
                >
                  1.3 Extração de dados
                </h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  {extracao}
                </p>
                <h3
                  className="text-2xl mb-2 font-semibold leading-normal"
                  id="preprocessamento"
                >
                  1.4 Pré-processamento de dados
                </h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  {preprocessamento}
                </p>
              <h2
                className="text-3xl mb-2 font-semibold leading-normal"
                id="conteudo"
              >
                2. Conteúdo
              </h2>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {conteudo}
              </p>
              <h2
                className="text-3xl mb-2 font-semibold leading-normal"
                id="analise"
              >
                3. Análise exploratória dos dados
              </h2>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {analise}
              </p>
              <h2
                className="text-3xl mb-2 font-semibold leading-normal"
                id="uso"
              >
                4. Formato e uso
              </h2>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {formatoUso}
              </p>
              <h2
                className="text-3xl mb-2 font-semibold leading-normal"
                id="desafios"
              >
                5. Desafios e limitações
              </h2>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {desafios}
              </p>
              </div>
              <div className="w-full lg:w-3/12 ">
              <div className="nav-menu" aria-label="Table of contents">
                <p
                  className="text-3xl mb-2 font-semibold leading-normal"
                  id="lista"
                >
                  Conteúdos
                </p>
                  <Headings headings={nestedHeadings} activeId={activeId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

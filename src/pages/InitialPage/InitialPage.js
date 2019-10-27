import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../components/Menu/index';
import basicGraph from '../../examples/basicGraph';
import './InitialPage.scss';

const InitialPage = ({
  updateNodeGroups, updateGraph, viewGraph,
}) => {
  const click = (graph) => {
    updateNodeGroups(graph.groups);
    updateGraph({ nodes: graph.nodes, edges: graph.edges });
    viewGraph();
  };

  const button = (label, subtitle, buttonclassName, graph) => (
    <div classNameName="box">
      <article classNameName="media">
        <div classNameName="media-left">
          <button
            type="button"
            classNameName={`${buttonclassName} button is-primary`}
            onClick={() => {
              click(graph);
            }}
          >
            {label}
          </button>
        </div>
        <div classNameName="media-content">
          {subtitle}
        </div>
      </article>
    </div>
  );

  return (
    <div>
      <Menu />
      <div className="tile is-ancestor">
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <p className="title">Sobre</p>
            <p className="subtitle">Uma proposta de representação da evolução do conhecimento por meio de grafos.</p>
            <div className="content">
              Este é um trabalho desenvolvido por <a href="mailto:matheus.saraujo@gmail.com">Matheus Araujo</a>,
              como Trabalho de Conclusão de Curso da Graduação em Engenharia de Sistemas
              na Universidade Federal de Minas Gerais. <br />
              Sua proposta consiste em representar
              modelos de avanço de maturidade utilizando grafos. <br />
              Este site é uma implementação online da ferramenta proposta no trabalho. <br />
              Seu código fonte e maiores informações podem ser encontrados <a href="http://github.com/matheusaraujo/grafos-evolucao-maturidade" target="blank">aqui</a>.
            </div>
          </article>
        </div>
        <div className="tile is-parent is-4">
          <article className="tile is-child box">
            <div className="content">
              <p className="title">Grafo simples</p>
              <div className="graph-example-container">
                <button
                  className="button is-small"
                  type="button"
                  onClick={() => click(basicGraph)}
                >
                  Grafo simples
                </button>
                <p>
                  Um pequeno grafo apenas como demonstração da ferramenta.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-6">
          <article className="tile is-child box">
            <p className="title">
              <FontAwesomeIcon icon={faCogs} />&nbsp;
              Engenharia de Sistemas
            </p>
            <div className="content">
              O melhor curso que tem.
            </div>
          </article>
        </div>
        <div className="tile is-parent is-6">
          <article className="tile is-child box">
            <p className="title">
              <FontAwesomeIcon icon={faLaptopCode} />&nbsp;
              DevOps
            </p>
            <p className="subtitle">Subtitle</p>
          </article>
        </div>
      </div>
    </div>
  );
};

InitialPage.propTypes = {
  updateNodeGroups: PropTypes.func.isRequired,
  updateGraph: PropTypes.func.isRequired,
  viewGraph: PropTypes.func.isRequired,
};

export default InitialPage;

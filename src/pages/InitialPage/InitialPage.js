/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs, faLaptopCode, faStickyNote, faFlask,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '../../components/Menu/index';
import './InitialPage.scss';

const InitialPage = ({
  openBasicGraph,
  openSystemEngineerGraph1,
  openSystemEngineerGraph2,
  openSystemEngineerGraph3,
  openSystemEngineerGraph4,
  openDevOpsGraph1,
  openDevOpsGraph2,
}) => {
  return (
    <div>
      <Menu />
      <div className="tile is-ancestor">
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <p className="title">
              <FontAwesomeIcon icon={faStickyNote} />&nbsp;
              Sobre
            </p>
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
              <p className="title">
                <FontAwesomeIcon icon={faFlask} />
                &nbsp;Grafo simples
              </p>
              <div className="graph-example-container">
                <button
                  className="button is-small"
                  type="button"
                  onClick={openBasicGraph}
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
              <div className="graph-example-container">
                <button
                  className="button is-small"
                  type="button"
                  onClick={openSystemEngineerGraph1}
                >
                  Engenharia de Sistemas
                </button>
                <p>
                  Grade curricular do curso de Engenharia de Sistemas da UFMG.
                </p>
              </div>
              <div className="graph-example-container">
                <button
                  className="button is-small"
                  type="button"
                  onClick={openSystemEngineerGraph2}
                >
                  Engenharia de Sistemas 20182
                </button>
                <p>
                  Grade curricular do curso de Engenharia de Sistemas da UFMG, versão 20182.
                </p>
              </div>
              <div className="graph-example-container">
                <button
                  className="button is-small"
                  type="button"
                  onClick={openSystemEngineerGraph3}
                >
                  Engenharia de Sistemas 20182 - Matheus
                </button>
                <p>
                  Grade curricular do curso de Engenharia de Sistemas da UFMG, versão 20182.
                  Considerando as disciplinas cursadas por Matheus até 20192.
                </p>
              </div>
              <div className="graph-example-container">
                <button
                  className="button is-small"
                  type="button"
                  onClick={openSystemEngineerGraph4}
                >
                  Engenharia de Sistemas 20182 - Calouro
                </button>
                <p>
                  Grade curricular do curso de Engenharia de Sistemas da UFMG, versão 20182.
                  Considerando um aluno calouro.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-6">
          <article className="tile is-child box">
            <p className="title">
              <FontAwesomeIcon icon={faLaptopCode} />&nbsp;
              DevOps
            </p>
            <div className="content">
              <div className="graph-example-container">
                <button
                  className="button is-small"
                  type="button"
                  onClick={openDevOpsGraph1}
                >
                  DevOps v1
                </button>
                <p>
                  Modelo de Maturidade DevOps
                </p>
              </div>
              <div className="graph-example-container">
                <button
                  className="button is-small"
                  type="button"
                  onClick={openDevOpsGraph2}
                >
                  DevOps v2
                </button>
                <p>
                  Modelo de Maturidade DevOps com maior nível de granularidade
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

InitialPage.propTypes = {
  openBasicGraph: PropTypes.func.isRequired,
  openSystemEngineerGraph1: PropTypes.func.isRequired,
  openSystemEngineerGraph2: PropTypes.func.isRequired,
  openSystemEngineerGraph3: PropTypes.func.isRequired,
  openSystemEngineerGraph4: PropTypes.func.isRequired,
  openDevOpsGraph1: PropTypes.func.isRequired,
  openDevOpsGraph2: PropTypes.func.isRequired,
};

export default InitialPage;

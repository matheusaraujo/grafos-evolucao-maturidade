import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../components/Menu/index';
import './InitialPage.scss';

const InitialPage = ({
  openBasicGraph,
  openSystemEngineerGraph,
}) => (
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
                onClick={() => openBasicGraph()}
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
                onClick={() => openSystemEngineerGraph()}
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
                // eslint-disable-next-line no-alert
                onClick={() => alert('to-do')}
              >
                  Engenharia de Sistemas 20182
              </button>
              <p>
                  Grade curricular do curso de Engenharia de Sistemas da UFMG, versão 20182.
                  Com informações de horários.
              </p>
            </div>
            <div className="graph-example-container">
              <button
                className="button is-small"
                type="button"
                // eslint-disable-next-line no-alert
                onClick={() => alert('to-do')}
              >
                  Engenharia de Sistemas 20182 v2
              </button>
              <p>
                  Grade curricular do curso de Engenharia de Sistemas da UFMG, versão 20182.
                  Considerando as disciplians cursadas por Matheus até 20192.
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
          <p className="subtitle">Subtitle</p>
        </article>
      </div>
    </div>
  </div>
);

InitialPage.propTypes = {  
  openBasicGraph: PropTypes.func.isRequired,
  openSystemEngineerGraph: PropTypes.func.isRequired,
};

export default InitialPage;

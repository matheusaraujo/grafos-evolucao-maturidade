import React from 'react';
import PropTypes from 'prop-types';
import basicGraph from '../../examples/basicGraph';
import systemEngineerGraph from '../../examples/systemEngineerGraph';
import { defaultNodeGroups } from '../../commons/consts';
import * as labels from '../../commons/labels';

const InitialPage = ({
  lang, updateNodeGroups, updateGraph, viewGraph,
}) => {
  const click = (graph) => {
    updateNodeGroups(defaultNodeGroups);
    updateGraph(graph);
    viewGraph();
  };

  const title = (
    <header className="bd-header">
      <h1 className="title">
        {labels.maturityEvolutionGraphsTitle[lang]}
      </h1>
      <h2 className="subtitle">
        {labels.maturityEvolutionGraphsSubtitle[lang]}
      </h2>
      <p>&nbsp;</p>
    </header>
  );

  const button = (label, subtitle, buttonClass, graph) => (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <button
            type="button"
            className={`${buttonClass} button is-primary`}
            onClick={() => {
              click(graph);
            }}
          >
            {label}
          </button>
        </div>
        <div className="media-content">
          {subtitle}
        </div>
      </article>
    </div>
  );

  const buttonBasicGraph = button(labels.basicModel[lang],
    labels.basicModelSubtitle[lang],
    'btn-basic-graph',
    basicGraph);

  const buttonSystemEngineer = button(labels.systemEngineer[lang],
    labels.systemEngineerSubtitle[lang],
    'btn-system-engineer',
    systemEngineerGraph);

  return (
    <section className="section">
      <div className="container">
        <div className="notification">
          {title}
          {buttonBasicGraph}
          {buttonSystemEngineer}
        </div>
      </div>
    </section>
  );
};

InitialPage.propTypes = {
  lang: PropTypes.string.isRequired,
  updateNodeGroups: PropTypes.func.isRequired,
  updateGraph: PropTypes.func.isRequired,
  viewGraph: PropTypes.func.isRequired,
};

export default InitialPage;

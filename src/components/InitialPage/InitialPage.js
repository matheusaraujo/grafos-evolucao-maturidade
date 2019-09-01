import React from 'react';
import PropTypes from 'prop-types';

import basicGraph from '../../examples/basicGraph';
import systemEngineerGraph from '../../examples/systemEngineerGraph';

import * as labels from '../../commons/labels';

const InitialPage = ({ language, loadPage, updateGraph }) => {
  const handleBasicGraph = () => {
    updateGraph(basicGraph);
    loadPage();
  };

  const handleSystemEngineer = () => {
    updateGraph(systemEngineerGraph);
    loadPage();
  };

  const title = (
    <header className="bd-header">
      <h1 className="title">
        {labels.maturityEvolutionGraphsTitle[language]}
      </h1>
      <h2 className="subtitle">
        {labels.maturityEvolutionGraphsSubtitle[language]}
      </h2>
      <p>&nbsp;</p>
    </header>
  );

  const button = (label, subtitle, buttonClass, click) => (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <button type="button" className={`${buttonClass} button is-primary`} onClick={click}>
            {label}
          </button>
        </div>
        <div className="media-content">
          {subtitle}
        </div>
      </article>
    </div>
  );

  const buttonBasicGraph = button(labels.basicModel[language],
    labels.basicModelSubtitle[language],
    'btn-basic-graph',
    handleBasicGraph);

  const buttonSystemEngineer = button(labels.systemEngineer[language],
    labels.systemEngineerSubtitle[language],
    'btn-system-engineer',
    handleSystemEngineer);

  return (
    <div>
      {title}
      {buttonBasicGraph}
      {buttonSystemEngineer}
    </div>
  );
};

InitialPage.propTypes = {
  language: PropTypes.string.isRequired,
  loadPage: PropTypes.func.isRequired,
  updateGraph: PropTypes.func.isRequired,
};

export default InitialPage;

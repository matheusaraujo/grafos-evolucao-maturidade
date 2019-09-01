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

  return (
    <div>
      <div>{labels.initialPage[language]}</div>
      <button type="button" className="btn-basic-graph" onClick={handleBasicGraph}>
        {labels.basicModel[language]}
      </button>
      <button type="button" className="btn-system-engineer" onClick={handleSystemEngineer}>
        {labels.systemEngineer[language]}
      </button>
    </div>
  );
};

InitialPage.propTypes = {
  language: PropTypes.string.isRequired,
  loadPage: PropTypes.func.isRequired,
  updateGraph: PropTypes.func.isRequired,
};

export default InitialPage;

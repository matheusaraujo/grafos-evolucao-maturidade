import React from 'react';
import PropTypes from 'prop-types';

import basicDataSample from '../../examples/basicGraph';
import systemEngineer from '../../examples/systemEngineerGraph';

const InitialPage = ({ loadPage, updateGraph }) => {
  const handleBasicGraph = () => {
    updateGraph(basicDataSample);
    loadPage();
  };

  const handleSystemEngineer = () => {
    updateGraph(systemEngineer);
    loadPage();
  };

  return (
    <div>
      <div>Página Inicial!</div>
      <button type="button" onClick={handleBasicGraph}>
        Modelo básico
      </button>
      <button type="button" onClick={handleSystemEngineer}>
        Engenharia de Sistemas
      </button>
    </div>
  );
};

InitialPage.propTypes = {
  loadPage: PropTypes.func.isRequired,
  updateGraph: PropTypes.func.isRequired,
};

export default InitialPage;

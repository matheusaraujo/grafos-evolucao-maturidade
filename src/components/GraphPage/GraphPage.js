import React from 'react';

import PropTypes from 'prop-types';

import GraphEditor from '../GraphEditor/index';
import GraphViewer from '../GraphViewer/index';

import * as labels from '../../commons/labels';

const GraphPage = ({ lang, unloadPage }) => {
  const btnStyle = {
    float: 'right',
  };
  return (
    <div className="container is-fluid">
      &nbsp;
      <h1 className="title">
        {labels.maturityEvolutionGraphsTitle[lang]}
        <button className="button is-small" type="button" style={btnStyle} onClick={unloadPage}> Voltar</button>
      </h1>
      <div className="columns">
        <div className="column is-one-quarter">
          <GraphEditor />
        </div>
        <div className="column is-three-quarters">
          <GraphViewer />
        </div>
      </div>
    </div>
  );
};

GraphPage.propTypes = {
  lang: PropTypes.string.isRequired,
  unloadPage: PropTypes.func.isRequired,
};

export default GraphPage;

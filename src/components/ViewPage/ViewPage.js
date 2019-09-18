import React from 'react';

import PropTypes from 'prop-types';

import GraphEditor from '../GraphEditor/index';
import GraphViewer from '../GraphViewer/index';
import Modal from '../Modal/index';

import * as labels from '../../commons/labels';

const ViewPage = ({ lang, unloadPage }) => (
  <div className="container is-fluid">
    &nbsp;
    <h1 className="title">
      {labels.maturityEvolutionGraphsTitle[lang]}
      <button
        className="button is-small"
        type="button"
        style={{ float: 'right' }}
        onClick={unloadPage}
      >
        {labels.back[lang]}
      </button>
    </h1>
    <div className="columns">
      <div className="column is-one-quarter">
        <GraphEditor />
      </div>
      <div className="column is-three-quarters">
        <GraphViewer />
      </div>
    </div>
    <Modal />
  </div>
);


ViewPage.propTypes = {
  lang: PropTypes.string.isRequired,
  unloadPage: PropTypes.func.isRequired,
};

export default ViewPage;

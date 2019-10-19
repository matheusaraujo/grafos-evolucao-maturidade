/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import GraphEditor from '../../components/GraphEditor/index';
import GraphViewer from '../../components/GraphViewer/index';
import Modal from '../../components/Modal/index';
import Calcs from '../../components/Calcs/index';
import * as labels from '../../commons/labels';
import './MainPage.scss';

const MainPage = ({
  lang, pageMode,
  initApp, editNodes, viewGraph,
}) => {
  const buttonBack = (
    <button
      type="button"
      className="button is-danger"
      style={{ float: 'right' }}
      onClick={initApp}
    >
      {labels.restart[lang]}
    </button>
  );

  const buttonEdit = (
    <button
      className={pageMode === 'viewing' ? 'unselected' : 'selected'}
      type="button"
      onClick={editNodes}
    >
      <FontAwesomeIcon icon={faEdit} />
    </button>
  );

  const buttonView = (
    <button
      className={pageMode === 'viewing' ? 'selected' : 'unselected'}
      type="button"
      onClick={viewGraph}
    >
      <FontAwesomeIcon icon={faEye} />
    </button>
  );

  return (
    <div className="container is-fluid">
      &nbsp;
      <h1 className="title">
        {labels.maturityEvolutionGraphsTitle[lang]}
        <div className="page-mode">
          {buttonView}
          {buttonEdit}
        </div>
        <div className="calcs">
          <Calcs />
        </div>
      </h1>
      {pageMode === 'viewing' && <GraphViewer />}
      {pageMode !== 'viewing' && (
        <div className="columns">
          <div className="column is-four-fifths">
            <GraphEditor />
          </div>
          <div className="column is-one-fifths">
            <GraphViewer />
          </div>
        </div>
      )}
      <Modal />
      {buttonBack}
    </div>
  );
};

MainPage.propTypes = {
  lang: PropTypes.string.isRequired,
  pageMode: PropTypes.string.isRequired,
  initApp: PropTypes.func.isRequired,
  editNodes: PropTypes.func.isRequired,
  viewGraph: PropTypes.func.isRequired,
};

export default MainPage;

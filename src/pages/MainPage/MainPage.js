/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../components/Menu/index';
import GraphEditor from '../../components/GraphEditor/index';
import GraphViewer from '../../components/GraphViewer/index';
import Modal from '../../components/Modal/index';
import Calcs from '../../components/Calcs/index';
import * as labels from '../../utils/labels';
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
    <div>
      <Menu />
      <div className="container is-fluid">
        &nbsp;
        <h1 className="title">
          <div className="page-mode">
            {buttonView}
            {buttonEdit}
          </div>
        </h1>
        <div className="calcs">
          <Calcs />
        </div>
        {pageMode === 'viewing' && <GraphViewer />}
        {pageMode !== 'viewing' && (
          <div className="columns">
            <div className="column is-half">
              <GraphEditor />
            </div>
            <div className="column is-half">
              <GraphViewer />
            </div>
          </div>
        )}
        <Modal />
        {buttonBack}
      </div>
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

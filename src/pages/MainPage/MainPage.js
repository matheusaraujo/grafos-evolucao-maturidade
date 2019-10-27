/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../components/Menu/index';
import GraphEditor from '../../components/GraphEditor/index';
import GraphViewer from '../../components/GraphViewer/index';
import Modal from '../../components/Modal/index';
import './MainPage.scss';

const MainPage = ({
  pageMode,
  editNodes, viewGraph,
}) => {
  const buttonEdit = (
    <button
      className={pageMode === 'viewing' ? 'unselected' : 'selected'}
      type="button"
      onClick={editNodes}
    >
      <FontAwesomeIcon icon={faEdit} />
      Editar&nbsp;&nbsp;&nbsp;
    </button>
  );

  const buttonView = (
    <button
      className={pageMode === 'viewing' ? 'selected' : 'unselected'}
      type="button"
      onClick={viewGraph}
    >
      <FontAwesomeIcon icon={faEye} />
      Visualizar
    </button>
  );

  return (
    <div>
      <Menu />
      <div>
        <div className="page-mode">
          {buttonView}
          {buttonEdit}
        </div>
        {pageMode === 'viewing' && <GraphViewer />}
        {pageMode !== 'viewing' && <GraphEditor />}
        <Modal />
      </div>
    </div>
  );
};

MainPage.propTypes = {
  pageMode: PropTypes.string.isRequired,
  editNodes: PropTypes.func.isRequired,
  viewGraph: PropTypes.func.isRequired,
};

export default MainPage;

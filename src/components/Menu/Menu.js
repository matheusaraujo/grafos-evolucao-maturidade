/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import * as labels from '../../utils/labels';
import './Menu.scss';

const Menu = ({ lang, initApp }) => (
  <nav className="navbar is-fixed-top is-primary">
    <div className="navbar-start">
      <div className="navbar-item">
        <FontAwesomeIcon icon={faProjectDiagram} />
        <strong className="navbar-item">
          {labels.maturityEvolutionGraphsTitle[lang]}
        </strong>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <button type="button" className="button button-begin is-small" onClick={initApp}>
          Início
        </button>
      </div>
    </div>
  </nav>
);

Menu.propTypes = {
  lang: PropTypes.string.isRequired,
  initApp: PropTypes.func.isRequired,
};

export default Menu;

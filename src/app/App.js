import React from 'react';
import PropTypes from 'prop-types';
import InitialPage from '../pages/InitialPage/index';
import MainPage from '../pages/MainPage/index';
import './App.sass';

const App = ({ pageMode }) => {
  if (pageMode === 'initial') {
    return (<InitialPage />);
  }
  return (<MainPage />);
};

App.propTypes = {
  pageMode: PropTypes.string.isRequired,
};

export default App;

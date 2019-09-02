import React from 'react';
import PropTypes from 'prop-types';
import GraphPage from '../components/GraphPage/index';
import InitialPage from '../components/InitialPage/index';
import './App.sass';

const App = ({ loaded }) => {
  if (!loaded) {
    return (<InitialPage />);
  }
  return (<GraphPage />);
};

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
};

export default App;

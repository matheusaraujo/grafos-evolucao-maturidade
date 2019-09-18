import React from 'react';
import PropTypes from 'prop-types';
import ViewPage from '../components/ViewPage/index';
import InitialPage from '../components/InitialPage/index';
import './App.sass';

const App = ({ loaded }) => {
  if (!loaded) {
    return (<InitialPage />);
  }
  return (<ViewPage />);
};

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
};

export default App;

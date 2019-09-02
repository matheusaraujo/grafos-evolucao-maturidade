import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => ({
  loaded: state.page.loaded,
});

export default connect(
  mapStateToProps,
  null,
)(App);

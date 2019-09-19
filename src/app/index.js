import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => ({
  pageMode: state.page.mode,
});

export default connect(
  mapStateToProps,
  null,
)(App);

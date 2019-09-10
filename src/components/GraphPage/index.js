import { connect } from 'react-redux';
import GraphPage from './GraphPage';
import { unloadPage } from '../../actions/index';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
});

const mapDispatchToProps = (dispatch) => ({
  unloadPage: () => { dispatch(unloadPage()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphPage);

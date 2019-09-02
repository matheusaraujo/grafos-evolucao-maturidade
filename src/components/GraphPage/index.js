import { connect } from 'react-redux';
import GraphPage from './GraphPage';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
});

export default connect(
  mapStateToProps,
  null,
)(GraphPage);

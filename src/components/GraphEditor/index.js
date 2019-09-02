import { connect } from 'react-redux';
import GraphEditor from './GraphEditor';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
});

export default connect(
  mapStateToProps,
  null,
)(GraphEditor);

import { connect } from 'react-redux';
import NodeEditor from './NodeEditor';
import { endNodeEdition } from '../../../actions/index';

const mapStateToProps = (state) => ({
  nodeEdition: state.page.nodeEdition,
});

const mapDispatchToProps = (dispatch) => ({
  endNodeEdition: () => { dispatch(endNodeEdition()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NodeEditor);

import { connect } from 'react-redux';
import NextsOptions from './NextsOptions';
import { hideNexts } from '../../../actions/nexts';

const mapStateToProps = (state) => ({
  nexts: state.nexts,
});

const mapDispatchToProps = (dispatch) => ({
  hideNexts: () => { dispatch(hideNexts()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NextsOptions);

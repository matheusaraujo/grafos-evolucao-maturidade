import { connect } from 'react-redux';
import Details from './Details';
import { hideDetails } from '../../actions/index';

const mapStateToProps = (state) => ({
  showDetails: state.details.show,
  content: state.details.content,
});

const mapDispatchToProps = (dispatch) => ({
  hideDetails: () => { dispatch(hideDetails()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);

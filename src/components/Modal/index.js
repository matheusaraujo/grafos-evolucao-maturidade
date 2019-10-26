import { connect } from 'react-redux';
import Modal from './Modal';
import { hideModal } from '../../redux/general.actions';

const mapStateToProps = (state) => ({
  visible: state.modal.visible,
  title: state.modal.title,
  subtitle: state.modal.subtitle,
  content: state.modal.content,
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => { dispatch(hideModal()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

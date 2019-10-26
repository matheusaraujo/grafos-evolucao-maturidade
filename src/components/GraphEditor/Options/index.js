import { connect } from 'react-redux';
import OptionsEditor from './OptionsEditor';
import { updateOptions } from '../../../redux/general.actions';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
  options: state.options,
});

const mapDispatchToProps = (dispatch) => ({
  updateOptions: (options) => { dispatch(updateOptions(options)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionsEditor);

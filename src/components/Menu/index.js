import { connect } from 'react-redux';
import { initApp } from '../../redux/page.actions';

import Menu from './Menu';

const mapStateToProps = (state) => ({
  lang: state.page.lang,
});

const mapDispatchToProps = (dispatch) => ({
  initApp: () => { dispatch(initApp()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

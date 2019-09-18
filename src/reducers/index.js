import { combineReducers } from 'redux';
import modal from './modal';
import graph from './graph';
import options from './options';
import page from './page';

export default combineReducers({
  modal,
  graph,
  options,
  page,
});

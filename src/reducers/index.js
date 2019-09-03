import { combineReducers } from 'redux';
import page from './page';
import graph from './graph';
import options from './options';

export default combineReducers({
  page,
  graph,
  options,
});

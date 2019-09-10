import { combineReducers } from 'redux';
import details from './details';
import graph from './graph';
import options from './options';
import page from './page';

export default combineReducers({
  details,
  graph,
  options,
  page,
});

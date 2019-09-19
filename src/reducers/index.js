import { combineReducers } from 'redux';

import graph from './graph';
import modal from './modal';
import nodeGroups from './nodeGroups';
import options from './options';
import page from './page';

export default combineReducers({
  graph,
  modal,
  nodeGroups,
  options,
  page,
});

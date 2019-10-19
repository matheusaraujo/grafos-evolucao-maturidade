import { combineReducers } from 'redux';

import graph from './graph';
import modal from './modal';
import nexts from './nexts';
import nodeGroups from './nodeGroups';
import options from './options';
import page from './page';

export default combineReducers({
  graph,
  modal,
  nexts,
  nodeGroups,
  options,
  page,
});

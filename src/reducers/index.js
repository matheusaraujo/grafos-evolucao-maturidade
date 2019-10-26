import { combineReducers } from 'redux';

import graph from '../redux/graph.reducer';
import modal from './modal';
import nexts from '../redux/nexts.reducer';
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

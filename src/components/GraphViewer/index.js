import { connect } from 'react-redux';
import GraphViewer from './GraphViewer';
import { fillModal, showModal } from '../../redux/general.actions';
import { mapGraph } from '../../services/Mappers/GraphMapper';
import { mapOptions } from '../../services/Mappers/OptionsMapper';

const mapStateToProps = (state) => ({
  mappedGraph: mapGraph(state.graph, state.nodeGroups, state.options.hierarchical),
  graph: state.graph,
  nodeGroups: state.nodeGroups,
  mappedOptions: mapOptions(state.options),
});

const mapDispatchToProps = (dispatch) => ({
  fillModal: (title, subtitle, content) => { dispatch(fillModal(title, subtitle, content)); },
  showModal: () => { dispatch(showModal()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphViewer);

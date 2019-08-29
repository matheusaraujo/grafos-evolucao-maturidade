import React from 'react';
import JsonEditor from './features/jsonEditor/views/jsonEditor';
import GraphViewer from './features/graphViewer/views/graphViewer';
import './App.css';

function App() {
  const graph = {
    nodes: [
      { id: 1, label: 'Node 1', title: 'node 1 tootip text' },
      { id: 2, label: 'Node 2', title: 'node 2 tootip text' },
      { id: 3, label: 'Node 3', title: 'node 3 tootip text' },
      { id: 4, label: 'Node 4', title: 'node 4 tootip text' },
      { id: 5, label: 'Node 5', title: 'node 5 tootip text' },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  };

  return (
    <div className="container">
      <div>
        <JsonEditor message={graph} />
      </div>
      <div>
        <GraphViewer graph={graph} />
      </div>
    </div>
  );
}

export default App;

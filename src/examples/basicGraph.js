const basicGraph = {
  nodes: [
    {
      id: 0,
      label: 'Zero',
      title: 'Zero 0',
      details: '**bold**',
    },
    {
      id: 1,
      label: 'One',
      title: 'One 1',
      details: '_italic_',
    },
    {
      id: 2,
      label: 'Two',
      title: 'Two 2',
      details: 'Two  \n lines',
    },
  ],
  edges: [
    {
      id: 0,
      from: 0,
      to: 1,
      title: 'From 0 to 1',
      details: 'Edge\'s details',
    },
    {
      id: 1,
      from: 1,
      to: 2,
      title: 'From 1 to 2',
    },
  ],
};

export default basicGraph;

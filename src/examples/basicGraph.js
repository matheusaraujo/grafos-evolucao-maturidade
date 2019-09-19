const basicGraph = {
  nodes: [
    {
      id: 1,
      groupId: 1,
      label: 'One',
      title: 'Title One',
      details: '**bold**',
    },
    {
      id: 2,
      groupId: 2,
      label: 'Two',
      title: 'Title Two',
      details: 'Two  \n lines',

    },
    {
      id: 3,
      groupId: 2,
      label: 'Three',
      title: 'Title Three',
      details: '_italic_',
    },
  ],
  edges: [
    {
      id: 1,
      from: 1,
      to: 2,
      title: 'From 1 to 2',
      details: 'Edge\'s details',
    },
    {
      id: 2,
      from: 2,
      to: 3,
      title: 'From 2 to 3',
    },
  ],
};

export default basicGraph;

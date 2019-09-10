const basicGraph = {
  nodes: [
    {
      id: 0,
      label: 'Zero',
      title: 'Zero 0',
      details: 'Zero Details',
    },
    {
      id: 1,
      label: 'One',
      title: 'One 1',
      details: 'One Details',
    },
    {
      id: 2,
      label: 'Two',
      title: 'Two 2',
      details: 'Two Details',
    },
  ],
  edges: [
    {
      id: 0,
      from: 0,
      to: 1,
      title: 'From 0 to 1',
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

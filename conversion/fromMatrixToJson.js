/* eslint-disable no-console */
const colors = ['#AC92EB', '#4FC1E8', '#A0D568', '#FFCE54', '#ED5564'];

function getGroups(matrix) {
  const groups = [];

  matrix.forEach((line, i) => {
    if (i === 0) return;

    const generalCycle = line[6].trim();
    const detailCycle = line[7].trim();
    const group = groups.find((c) => c.label === generalCycle);

    if (!group) {
      groups.push({
        id: groups.length + 1,
        label: generalCycle,
        subGroups: [],
        color: colors[groups.length % colors.length],
      });
    } else {
      const subGroup = group.subGroups.find((sc) => sc.label === detailCycle);
      if (!subGroup) {
        group.subGroups.push({
          id: group.subGroups.length + 1,
          label: detailCycle,
        });
      }
    }
  });

  return groups;
}

function getNodes(matrix, groups) {
  const nodes = [];

  matrix.forEach((line, i) => {
    if (i === 0) return;

    const generalCycle = line[6].trim();
    const detailCycle = line[7].trim();
    const group = groups.find((c) => c.label === generalCycle);
    let subGroup = null;
    if (group) {
      subGroup = group.subGroups.find((sc) => sc.label === detailCycle);
    }

    nodes.push({
      id: i,
      label: line[0].trim(),
      title: line[1],
      details: line[8],
      level: parseInt(line[4], 10),
      weight: parseInt(line[3], 10),
      groupId: group && group.id,
      subGroupId: subGroup && subGroup.id,
    });
  });

  return nodes;
}

function getEdges(matrix, nodes) {
  const edges = [];
  matrix.forEach((line, i) => {
    if (i === 0) return;
    const code = line[0].trim();
    let preCodes = line[2].trim();
    if (preCodes !== 'NA') {
      preCodes = preCodes.split(',');
      const toNode = nodes.find((n) => n.label === code);
      if (toNode && toNode.id && preCodes) {
        preCodes.forEach((p) => {
          let p1 = p.trim();
          if (p1 === 'MAT015') p1 = 'MAT040';
          if (p1 === 'ELE084') p1 = 'ELEXXG';
          const fromNode = nodes.find((n) => n.label === p1);
          if (fromNode) {
            edges.push({
              id: edges.length + 1,
              from: fromNode.id,
              to: toNode.id,
              label: `${fromNode.label} -> ${toNode.label}`,
            });
          } else {
            console.error('ERROR: ' + p);
          }
        });
      }
    }
  });
  return edges;
}

export default function (matrix) {
  const groups = getGroups(matrix);
  const nodes = getNodes(matrix, groups);
  const edges = getEdges(matrix, nodes);
  return {
    groups,
    nodes,
    edges,
  };
}

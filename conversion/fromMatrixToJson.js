/* eslint-disable no-console */
const colors = ['#AC92EB', '#4FC1E8', '#A0D568', '#FFCE54', '#ED5564'];

export const getGroups = (matrix) => {
  const groups = [];

  matrix.forEach((line, i) => {
    if (i === 0) return;

    const generalCycle = line[6].trim();
    const detailCycle = line[7].trim();
    let group = groups.find((c) => c.label === generalCycle);

    if (!group) {
      group = {
        id: groups.length + 1,
        label: generalCycle,
        subGroups: [],
        color: colors[groups.length % colors.length],
      };
      groups.push(group);
    }
    const subGroup = group.subGroups.find((sc) => sc.label === detailCycle);
    if (!subGroup) {
      group.subGroups.push({
        id: group.subGroups.length + 1,
        label: detailCycle,
      });
    }
  });

  return groups;
};

export const getNodes = (matrix, groups) => {
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

    const node = {
      id: i,
      label: line[0].trim(),
      title: line[1],
      details: line[8],
      level: parseInt(line[4], 10),
      weight: parseInt(line[3], 10),
      groupId: group && group.id,
      subGroupId: subGroup && subGroup.id,
    };

    if (line.length > 9) {
      node.slots = line[9].trim().split(',');
      for (let j = 0; j < node.slots.length; j += 1) {
        node.slots[j] = parseInt(node.slots[j], 10);
      }
    }
    if (line.length > 10) {
      node.status = line[10] === '1';
    }

    nodes.push(node);
  });

  return nodes;
};

export const getEdges = (matrix, nodes) => {
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
          const p1 = p.trim();
          const fromNode = nodes.find((n) => n.label === p1);
          if (fromNode) {
            edges.push({
              id: edges.length + 1,
              from: fromNode.id,
              to: toNode.id,
              label: `${fromNode.label} -> ${toNode.label}`,
            });
          } else {
            console.error(`ERROR NOT FOUND: ${p}`);
          }
        });
      }
    }
  });
  return edges;
};

export const fromMatrixToJson = (matrix) => {
  const groups = getGroups(matrix);
  const nodes = getNodes(matrix, groups);
  const edges = getEdges(matrix, nodes);
  return {
    groups,
    nodes,
    edges,
  };
};

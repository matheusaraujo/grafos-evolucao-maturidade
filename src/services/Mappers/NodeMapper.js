import { isDefined } from '../../utils/objects';

export const getGroup = (node, group) => {
  let g = '';
  let sg = '';
  if (group) {
    g = group.label ? `**Grupo:** ${group.label}  \n` : '';
    const subGroup = group.subGroups
      && group.subGroups.find((g1) => g1.id === node.subGroupId);
    if (subGroup) sg = subGroup.label ? `**Subgrupo:** ${subGroup.label}  \n` : '';
  }
  return [g, sg];
};

export const mapNodeDetails = (node, nodeGroups) => {
  const w = node.weight ? `**Peso:** ${node.weight}  \n` : '';
  const l = node.level ? `**Nível:** ${node.level}  \n` : '';
  const group = nodeGroups.find((ng) => ng.id === node.groupId);
  const gg = getGroup(node, group);
  const g = gg[0];
  const sg = gg[1];
  let s = '';
  if (node.slots) {
    s = `**Slots:** ${node.slots.join(', ')}  \n`;
  }
  let st = '';
  if (isDefined(node.status)) {
    st = `**Status:** ${node.status === 1 ? 'Concluído' : 'Não concluído'}  \n`;
  }
  return `${node.details}  \n---  \n${w + l + g + sg + s + st}`;
};

import { isDefined } from '../../utils/objects';

export const getGroup = (node, group) => {
  let g = '';
  let sg = '';
  if (group) {
    g = group.label ? `**Ciclo Geral**: ${group.label}  \n` : '';
    const subGroup = group.subGroups
      && group.subGroups.find((g1) => g1.id === node.subGroupId);
    if (subGroup) sg = subGroup.label ? `**Ciclo Detalhado:** ${subGroup.label}  \n` : '';
  }
  return [g, sg];
};

export const mapNodeDetails = (node, nodeGroups) => {
  const w = node.weight ? `**Carga Horária:** ${node.weight}  \n` : '';
  const l = node.level ? `**Período:** ${node.level}  \n` : '';
  const group = nodeGroups.find((ng) => ng.id === node.groupId);
  const gg = getGroup(node, group);
  const g = gg[0];
  const sg = gg[1];
  let s = '';
  if (node.slots) {
    s = `**Horários**: ${node.slots.join(', ')}  \n`;
  }
  let st = '';
  if (isDefined(node.status)) {
    st = `**Status**: ${node.status === 1 ? 'Concluído' : 'Não concluído'}  \n`;
  }
  return `${node.details}  \n---  \n${w + l + g + sg + s + st}`;
};

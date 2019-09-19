export const updateOptions = (options) => ({
  type: 'UPDATE_OPTIONS',
  options,
});

export const updateNodeGroups = (nodeGroups) => ({
  type: 'UPDATE_NODE_GROUPS',
  nodeGroups,
});

export const showModal = () => ({
  type: 'SHOW_MODAL',
});

export const hideModal = () => ({
  type: 'HIDE_MODAL',
});

export const fillModal = (title, subtitle, content) => ({
  type: 'FILL_MODAL',
  title,
  subtitle,
  content,
});

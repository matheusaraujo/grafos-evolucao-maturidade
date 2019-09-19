export const updateOptions = (options) => ({
  type: 'UPDATE_OPTIONS',
  options,
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

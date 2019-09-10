export const isValidJson = (s) => {
  if (!(typeof s === 'string')) return false;
  try {
    JSON.parse(s);
    return true;
  } catch {
    return false;
  }
};

export const toAceEditor = (o) => JSON.stringify(o, null, ' ');

export const fromAceEditor = (s) => JSON.parse(s);

export default isValidJson;

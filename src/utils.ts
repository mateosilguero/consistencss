export const atomGenerator = (property: string, value: string) => ({
  [property]: value,
});

export const camelCaseSplit = (string: string): [string, string] => {
  const [key, ...value] = string.replace('_', '-').split(/(?=[-A-Z0-9])/);
  const v = value.join('').toLowerCase();
  return [key.toLowerCase(), v];
};

export const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export const isEmpty = (val: any) => val == null || !Object.keys(val).length;

export const warnOnInvalidKey = (message: string) =>
  __DEV__ && console.warn(message);


export const merge = <T>(target: T, ...sources: T[]): Required<T> => {
  const next = appendTo({} as T, target);
  sources.forEach(s => appendTo(next, s));
  return appendTo({} as Required<T>, next as Required<T>);
};

const appendTo = <T>(t: T, s: T): T => {
  Object.keys(s).reverse().forEach(k => {
    t[k] && k[0] === '_' && typeof t[k] === 'object'
      ? appendTo(t[k], s[k])
      : !t[k] &&
          (t[k] = s[k]);
  });
  return t;
};

const cache: Record<string, any> = {};

export const cacheByKey = <T>(getter: () => T, ...keys: string[]) => {
  const key = keys.join(';');

  if (!cache[key]) {
    cache[key] = getter();
  }

  return cache[key];
};

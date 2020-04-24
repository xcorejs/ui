
export const merge = <T>(target: T, ...sources: T[]): Required<T> => {
  const next = appendTo({} as T, target);
  sources.forEach(s => appendTo(next, s));
  return appendTo({} as Required<T>, next as Required<T>);
};

const appendTo = <T>(t: T, s: T): T => {
  Object.keys(s).reverse().forEach(k => {
    t[k] && k[0] === '_' && typeof t[k] === 'object'
      ? appendTo(t[k], s[k])
      : !(k in t) &&
          (t[k] = s[k]);
  });
  return t;
};

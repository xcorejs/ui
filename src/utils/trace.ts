export const trace = <T>(a: T, ...rest: any[]) => {
  console.info(a, ...rest);
  return a;
};

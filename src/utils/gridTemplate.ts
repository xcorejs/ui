const repeatRegex = /(repeat\()([0-9]+)( *, *)(.+)(\))/;

type ParseState = [string[], string, number];

export const parseTemplate = (template: string, gap?: string | null): string[] =>
  parse(
    template
      .split('')
      .reduce(([result, current, indent], val) => val === ' ' && indent === 0
        ? parse([result, current, indent], gap)
        : val === '('
          ? [result, current + val, indent + 1] as ParseState
          : val === ')'
            ? [result, current + val, indent - 1] as ParseState
            : [result, current + val, indent] as ParseState
      , [[], '', 0] as ParseState),
    gap,
    true
  )[0];

const parse = ([result, current]: ParseState, gap?: string | null, last?: boolean): ParseState => [
  [
    ...result,
    ...repeatRegex.test(current)
      ? repeat(current, gap)
      : [current],
    ...!last && gap ? [gap] : []
  ],
  '',
  0
];

const repeat = (r: string, gap?: string | null) => {
  const [_, __, count, ___, val] = repeatRegex.exec(r)!;
  const n = parseInt(count);

  return getTemplate(n, val, gap);
};

export const getTemplate = (n: number, val: string, gap?: string | null) => {
  const length = gap ? n * 2 - 1 : n;
  return [...Array(length >= 0 ? length : 0)].map((v, i) => i % 2 === 1 ? gap ?? val : val);
};

export const parseTwin = <T extends string | null>(val: T): [string | T, string | T] => {
  if (!val) {
    return [null as T, null as T];
  }
  const [a, b] = val.split(' ');

  return [
    a,
    b || a
  ];
};

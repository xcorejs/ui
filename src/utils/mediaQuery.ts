import { css } from 'styled-components';

import { Breakpoints } from '../theme';

export const mediaQueries = (breakpoints: Breakpoints, predicate: (i: number, br: string) => any) => breakpoints
  .map((br, i) =>
    i === 0
      ? css`
        ${predicate(i, br)}
      `
      : css`
        @media screen and (min-width: ${breakpoints[i - 1]}) {
          ${predicate(i, br)}
        }
      `
  );

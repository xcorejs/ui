import { css } from 'styled-components';
import { Breakpoints } from '../scales/breakpoints';

export const mediaQueries = (breakpoints: Breakpoints, predicate: (i: number, br: string) => any) =>
  breakpoints
    .map((br, i) => {
      const val = predicate(i, br);

      return isValueEmpty(val)
        ? css``
        : i === 0
          ? val
          : css`
            @media screen and (min-width: ${breakpoints[i - 1]}) {
              ${val}
            }
          `;
    });

const isValueEmpty = <T extends unknown>(val: T) =>
// eslint-disable-next-line @typescript-eslint/no-extra-parens
  val === false || val === undefined || (Array.isArray(val) && !val.some(Boolean));

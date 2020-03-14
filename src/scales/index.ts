import { breakpoints, BreakpointScale } from './breakpoints';
import { colors, ColorScale } from './colors';
import { fonts, FontScale } from './fonts';

export type Scales =
  & ColorScale
  & FontScale
  & BreakpointScale;

export const createScales = (scale: Partial<Scales> = {}): Scales => ({
  ...colors(),
  ...breakpoints(),
  ...fonts(),
  ...scale
});

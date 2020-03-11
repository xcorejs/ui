import { Scale, scale } from './utils';

export type Breakpoints = Scale<string>;

export type BreakpointScale = {
  breakpoints: Breakpoints;
};

export const breakpoints = (
  b: string[] = ['30em', '48em', '64em', '78em', '85em'],
  aliases: string[] = ['xs', 'sm', 'md', 'lg', 'xl']
) => ({ breakpoints: scale(b, aliases) });

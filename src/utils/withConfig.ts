import { ThemedStyledFunction } from 'styled-components';
import { borderConfig } from '../bases/config/border';
import { cursorConfig } from '../bases/config/cursor';
import { flexConfig } from '../bases/config/flex';
import { gridConfig } from '../bases/config/grid';
import { gridItemConfig } from '../bases/config/gridItem';
import { layoutConfig } from '../bases/config/layout';
import { positionConfig } from '../bases/config/position';
import { shadowConfig } from '../bases/config/shadow';
import { spaceConfig } from '../bases/config/space';
import { typographyConfig } from '../bases/config/typography';
import { visualsConfig } from '../bases/config/visuals';
import { selectionSystem } from '../bases/configs';

const withConfig = <T extends ThemedStyledFunction<any, any>>(sc: T): T => sc.withConfig({ shouldForwardProp }) as T;

export default withConfig;

export const shouldForwardProp = (
  prop: string | number | symbol,
  isValidAttr: (prop: any) => boolean
) =>
  isValidAttr(prop) && (typeof prop !== 'string' || !(prop[0] === '_' || blacklist.includes(prop)));

const blacklist = [
  ...Object.keys(selectionSystem),
  ...Object.keys(borderConfig),
  ...Object.keys(cursorConfig),
  ...Object.keys(flexConfig),
  ...Object.keys(gridConfig),
  ...Object.keys(gridItemConfig),
  ...Object.keys(layoutConfig),
  ...Object.keys(positionConfig),
  ...Object.keys(shadowConfig),
  ...Object.keys(spaceConfig),
  ...Object.keys(typographyConfig),
  ...Object.keys(visualsConfig)
];

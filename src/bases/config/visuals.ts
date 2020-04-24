import { Config } from '@styled-system/core';
import { colorTransform } from 'scales/colors';

export const visualsConfig: Config = {
  background: {
    property: 'background',
    scale: 'colors',
    transform: colorTransform
  },
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  color: {
    property: 'color',
    scale: 'colors',
    transform: colorTransform
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
    transform: colorTransform
  },
  opacity: true
};

visualsConfig.bgImage = visualsConfig.backgroundImage;
visualsConfig.bgSize = visualsConfig.backgroundSize;
visualsConfig.bgPosition = visualsConfig.backgroundPosition;
visualsConfig.bgRepeat = visualsConfig.backgroundRepeat;
visualsConfig.bg = visualsConfig.background;

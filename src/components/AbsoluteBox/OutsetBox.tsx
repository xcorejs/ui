import Portal from '@reach/portal';
import React, { FC, MutableRefObject, useLayoutEffect, useState, useEffect, useMemo } from 'react';
import { ResponsiveValue } from 'styled-system';

import useTheme from '../../useTheme';
import convert from '../../utils/convert';
import Box, { BoxProps } from '../Box';
import { HorizontalPosition, VerticalPosition } from './data';
import { useDebouncedCallback } from 'use-debounce';

export type OutsetBoxProps = {
  horizontalPosition?: ResponsiveValue<HorizontalPosition>;
  h?: ResponsiveValue<HorizontalPosition>;

  verticalPosition?: VerticalPosition;
  v?: VerticalPosition;

  target: MutableRefObject<HTMLElement>;
} & BoxProps;

const OutsetBox: FC<OutsetBoxProps> = ({ h, horizontalPosition, v, verticalPosition, target, ...props }) => {
  const { breakpoints } = useTheme();
  const { toArray } = convert(breakpoints);

  const hor = toArray(h ?? horizontalPosition);
  const ver = toArray(v ?? verticalPosition);

  const [{ top, left, right, bottom }, setRect] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

  const up = () => {
    const rect = target.current.getBoundingClientRect();
    if (top !== rect.top || left !== rect.left || right !== rect.right || bottom !== rect.bottom) {
      setRect({ top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom });
    }
  };

  const [update] = useDebouncedCallback(up, 500);

  useLayoutEffect(() => {
    if (target.current) {
      up();
    }
  });

  useEffect(() => {
    const handler = () => update();

    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <Portal>
      <Box
        position="absolute"
        left={hor.map(y =>
          y === 'right'
            ? right
            : y === 'center'
              ? left
              : null)}
        right={hor.map(y =>
          y === 'left'
            ? `calc(100vw - ${left}px)`
            : y === 'center'
              ? `calc(100vw - ${right}px)`
              : null)}
        bottom={ver.map(x => x === 'top'
          ? `calc(100vh - ${top}px)`
          : x === 'center'
            ? `calc(100vh - ${bottom}px)`
            : null)}
        top={ver.map(x => x === 'bottom'
          ? bottom
          : x === 'center'
            ? top
            : null)}
      >
        <Box {...props} />
      </Box>
    </Portal>
  );
};

export default OutsetBox;

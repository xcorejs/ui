import Portal from '@reach/portal';
import { ResponsiveValue } from '@styled-system/core';
import Box, { BoxProps } from 'components/Box';
import React, { FC, MutableRefObject, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import useTheme from 'useTheme';
import { transform } from 'utils/transform';

import { HorizontalPosition, VerticalPosition } from './data';

export type OutsetBoxTarget = MutableRefObject<Element> | Element;

export type OutsetBoxProps = {
  horizontalPosition?: ResponsiveValue<HorizontalPosition>;
  h?: ResponsiveValue<HorizontalPosition>;

  verticalPosition?: VerticalPosition;
  v?: VerticalPosition;

  target: OutsetBoxTarget;
} & BoxProps;

const OutsetBox: FC<OutsetBoxProps> = ({ h, horizontalPosition, v, verticalPosition, target, ...props }) => {
  const { breakpoints } = useTheme();
  const tr = transform(breakpoints);

  const hor = tr(h ?? horizontalPosition);
  const ver = tr(v ?? verticalPosition);

  const [{ top, left, right, bottom }, setRect] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

  const t = target instanceof Element ? target : target.current;

  const up = () => {
    const rect = t.getBoundingClientRect();
    if (top !== rect.top || left !== rect.left || right !== rect.right || bottom !== rect.bottom) {
      setRect({ top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom });
    }
  };

  const [update] = useDebouncedCallback(up, 500);

  useLayoutEffect(() => {
    t && up();
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

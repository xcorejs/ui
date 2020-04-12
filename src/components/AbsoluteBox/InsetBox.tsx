import Portal from '@reach/portal';
import Box, { BoxProps } from 'components/Box';
import React, { FC, MutableRefObject, useLayoutEffect, useState } from 'react';
import { ResponsiveValue } from 'styled-system';
import useTheme from 'useTheme';
import convert from 'utils/convert';

import { HorizontalPosition, VerticalPosition } from './data';

export type InsetBoxProps = {
  horizontalPosition?: ResponsiveValue<HorizontalPosition>;
  h?: ResponsiveValue<HorizontalPosition>;

  verticalPosition?: VerticalPosition;
  v?: VerticalPosition;

  target?: MutableRefObject<HTMLElement>;
} & BoxProps;

const InsetBox: FC<InsetBoxProps> = ({ target, ...p }) => {
  const [rect, setRect] = useState({
    x: null! as number,
    y: null! as number,
    width: null! as number,
    height: null! as number
  });

  useLayoutEffect(() => {
    if (target?.current) {
      const { x, y, width, height } = target.current.getBoundingClientRect();
      if (x !== rect.x || y !== rect.y || width !== rect.width || height !== rect.height) {
        setRect({ x, y, width, height });
      }
    }
  });

  return (
    <Portal>
      {target
        ? (
          <Box position="absolute" left={rect.x} top={rect.y} width={rect.width} height={rect.height}>
            <Box position="relative" width="100%" height="100%">
              <InnerInsetBox {...p} />
            </Box>
          </Box>
        )
        : <InnerInsetBox {...p} />}

    </Portal>
  );
};

export default InsetBox;

const InnerInsetBox: FC<InsetBoxProps> = ({ h, horizontalPosition, v, verticalPosition, ...props }) => {
  const { breakpoints } = useTheme();
  const { transform } = convert(breakpoints);

  const hor = transform(h ?? horizontalPosition);
  const ver = transform(v ?? verticalPosition);

  return (
    <Box
      position="absolute"
      top={ver.map(y =>
        y === 'top' || y === 'stretch'
          ? 0
          : y === 'center'
            ? '50%'
            : null
      )}
      bottom={ver.map(y =>
        y === 'bottom' || y === 'stretch'
          ? 0
          : null
      )}
      left={hor.map(x =>
        x === 'left' || x === 'stretch'
          ? 0
          : x === 'center'
            ? '50%'
            : null
      )}
      right={hor.map(x =>
        x === 'right' || x === 'stretch'
          ? 0
          : null
      )}
      transform={ver.map((y, i) =>
          `${y === 'center' ? 'translateY(-50%)' : ''} ${hor.get(i) === 'center' ? 'translateX(-50%)' : ''}`
      )}
      {...props}
    />
  );
};

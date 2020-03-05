import React, { FC, useRef, useState } from 'react';

import { InsetBox, Button, LoremIpsum, Paragraph, Box, OutsetBox } from '../../src';

export default { title: 'OutsetBox' };

export const BasicUsage: FC = () => {
  const [state, setState] = useState(0);
  const box = useRef<HTMLDivElement>(null!);

  return (
    <>
      <Box bg="crimson" m="50px" ref={box}>
        {[...Array(state)].map(i => <LoremIpsum key={i} />)}

        <button onClick={() => setState(state + 1)}>Add</button>
      </Box>

      <OutsetBox target={box} v="top" h="right">
        AAAAA
      </OutsetBox>
      <OutsetBox target={box} v="top" h="center">
        AAAAA
      </OutsetBox>
      <OutsetBox target={box} v="top" h="left">
        AAAAA
      </OutsetBox>

      <OutsetBox target={box} v="center" h="right">
        AAAAA
      </OutsetBox>
      <OutsetBox target={box} v="center" h="left">
        AAAAA
      </OutsetBox>

      <OutsetBox target={box} v="bottom" h="right">
        AAAAA
      </OutsetBox>
      <OutsetBox target={box} v="bottom" h="center">
        AAAAA
      </OutsetBox>
      <OutsetBox target={box} v="bottom" h="left">
        AAAAA
      </OutsetBox>
    </>
  );
};

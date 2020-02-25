import React, { FC, useState } from 'react';

import { Collapse, LoremIpsum, Stack, Button } from '../src';

export default { title: 'Collapse' };

export const BasicUsage: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack gap="30px" dir="column">
      <Button onClick={() => setOpen(!open)}>
        Toggle
      </Button>
      <Collapse open={open}>
        <LoremIpsum />
      </Collapse>

      <Collapse open>
        <LoremIpsum />
      </Collapse>
      <Collapse>
        <LoremIpsum />
      </Collapse>
    </Stack>
  );
};

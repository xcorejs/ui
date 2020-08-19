import React, { FC } from 'react';

import { CloseControl, Stack } from '../../src';

export default { title: 'Close control' };

export const BasicUsage: FC = () => {
  return (
    <Stack gap="gap" direction="column">
      <CloseControl s="xs" />
      <CloseControl s="sm" />
      <CloseControl s="md" />
      <CloseControl s="lg" />
    </Stack>
  );
};

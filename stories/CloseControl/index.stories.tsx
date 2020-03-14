import React, { FC } from 'react';

import { CloseControl, Box, Stack } from '../../src';

export default { title: 'Close control' };

export const BasicUsage: FC = () => {
  return (
    <Stack gap="gap" dir="column">
      <CloseControl s="xs" />
      <CloseControl s="sm" />
      <CloseControl s="md" />
      <CloseControl s="lg" />
    </Stack>
  );
};

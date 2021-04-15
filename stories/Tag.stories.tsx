import React, { FC } from 'react';

import { Stack, Tag, XcoreProvider } from '../src';

export default { title: 'Tag' };

export const BasicUsage: FC = () => {
  return (
    <XcoreProvider>
      <Stack direction="column" gap="10px" alignItems="flex-start">
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </Stack>
    </XcoreProvider>
  );
};

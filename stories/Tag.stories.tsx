import React, { FC } from 'react';

import { Stack, Tag } from '../src';

export default { title: 'Tag' };

export const BasicUsage: FC = () => {
  return (
    <Stack direction="column" gap="10px">
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
    </Stack>
  );
};

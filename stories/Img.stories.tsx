import React, { FC, useState } from 'react';

import { Stack, Img } from '../src';

export default { title: 'Img' };

export const BasicUsage: FC = () => {
  return (
    <Stack gap="30px" dir="row" justifyContent="flex-start" alignItems="flex-start">
      <Img src="http://placekitten.com/200/300" alt="" />
      <Img src="http://placekitten.com/400/500" alt="" />
      <Img src="http://placekitten.com/400/200" alt="" />
    </Stack>
  );
};

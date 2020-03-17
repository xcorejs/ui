import React, { FC } from 'react';

import { Box } from '../src';

export default { title: 'Box' };

export const BasicUsage: FC = () => {
  return (
    <Box>
      <Box background="crimson" color="white" p="10px" my="15px">
        Box 1
      </Box>
      <Box
        background="navy"
        color="white"
        p="10px"
        my="15px"
        _hover={{
          background: { _: 'crimson', md: 'green' }
        }}
      >
        Box 2
      </Box>
      <Box
        background="navy"
        color="white"
        p="10px"
        my="15px"
        _before={{
          content: '"before"',
          background: 'green'
        }}
        _after={{
          content: '"after"',
          background: 'green'
        }}
      >
        Box 3
      </Box>

      <Box role="group">
        <Box>Outside</Box>
        <Box _group={{ _hover: { background: 'navy' } }}>Inside</Box>
      </Box>

      <Box _icon={{ fill: 'crimson' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
          <path
            fill="#1E1E1E"
            fillRule="evenodd"
            d="M0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L1.70710678,0.292893219 L4,2.585 L6.29289322,0.292893219 C6.65337718,-0.0675907428 7.22060824,-0.0953202783 7.61289944,0.209704612 L7.70710678,0.292893219 C8.09763107,0.683417511 8.09763107,1.31658249 7.70710678,1.70710678 L7.70710678,1.70710678 L5.415,4 L7.70710678,6.29289322 C8.06759074,6.65337718 8.09532028,7.22060824 7.79029539,7.61289944 L7.70710678,7.70710678 C7.31658249,8.09763107 6.68341751,8.09763107 6.29289322,7.70710678 L6.29289322,7.70710678 L4,5.415 L1.70710678,7.70710678 C1.34662282,8.06759074 0.779391764,8.09532028 0.387100557,7.79029539 L0.292893219,7.70710678 C-0.0976310729,7.31658249 -0.0976310729,6.68341751 0.292893219,6.29289322 L0.292893219,6.29289322 L2.585,4 L0.292893219,1.70710678 C-0.0675907428,1.34662282 -0.0953202783,0.779391764 0.209704612,0.387100557 Z"
          />
        </svg>
      </Box>
    </Box>
  );
};

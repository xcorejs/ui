import React, { FC, useContext } from 'react';
import { Typography, Tag, Stack, Text } from '@xcorejs/ui';
import { PropsContext } from '../PropsContext';
import Link from 'next/link';

interface Props {
  props: string[];
}

const Extends: FC<Props> = ({ props }) => {
  const propsLinks = useContext(PropsContext);

  return (
    <Typography mb="2rem">
      Extends:
      <Stack gap="1rem" mt="1rem">
        {props.map(p => p in propsLinks ? (
          <Text>
            <Link href={propsLinks[p]}>
              <a><Tag key={p} bg="primary">{p}</Tag></a>
            </Link>
          </Text>

        ) : <Tag key={p} v="outline">{p}</Tag>)}
      </Stack>

    </Typography>
  );
};

export default Extends;

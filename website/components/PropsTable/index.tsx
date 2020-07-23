import React, { FC, useContext } from 'react';
import { Box, Tag, Stack, Text } from '@xcorejs/ui';
import { PropsContext } from 'components/PropsContext';
import Link from 'next/link';

interface Props {
  props: [string, string | string[], string | null, string][];
}

const tdStyle: {} = { p: '1rem', fontWeight: 400, textAlign: 'left' };
const thStyle = { borderBottom: '1px solid', borderColor: 'grey' };

const PropsTable: FC<Props> = ({ props }) => {
  return (
    <Box as="table" width="100%">
      <thead>
        <Box as="tr" borderBottom="1px solid" borderColor="grey">
          <Box as="th" {...tdStyle} {...thStyle}>Name</Box>
          <Box as="th" {...tdStyle} {...thStyle}>Type</Box>
          <Box as="th" {...tdStyle} {...thStyle}>Default</Box>
          <Box as="th" {...tdStyle} {...thStyle}>Description</Box>
        </Box>
      </thead>
      {props.map(([prop, type, def, text]) => (
        <Box as="tr" key={prop}>
          <Box as="td" {...tdStyle}>{prop}</Box>
          <Box as="td" {...tdStyle}>
            <Stack gap=".5rem">
              {Array.isArray(type)
                ? type.map(t => <TypeBadge key={t} type={t} />)
                : <TypeBadge type={type} />}
            </Stack>
          </Box>
          <Box as="td" {...tdStyle}>{def}</Box>
          <Box as="td" {...tdStyle}>{text}</Box>
        </Box>
      ))}
    </Box>
  );
};

const TypeBadge: FC<{ type: string }> = ({ type: t, ...props }) => {
  const propsLinks = useContext(PropsContext);

  return t in propsLinks ? (
    <Text>
      <Link href={propsLinks[t]}>
        <a>
          <Tag bg="primary" {...props}>
            {t}
          </Tag>
        </a>
      </Link>
    </Text>
  ) : (
    <Tag v="outline" {...props}>
      {t}
    </Tag>
  );
};

export default PropsTable;

import React, { FC } from 'react';
import styled from 'styled-components';

import Complement, { SideComplementProps, sideComp } from '../Complement';
import { FlexProps, flexBase } from '../Flex';
import { TextProps, textBase } from '../Text';

export type ListItemProps =
  & FlexProps
  & TextProps
  & SideComplementProps;

const ListItem: FC<ListItemProps> = p => {
  const [comp, { children, ...props }] = sideComp(p);

  return (
    <ListItemStyle alignItems="flex-start" {...props}>
      <Complement {...comp} />
      <span>
        {children}
      </span>
    </ListItemStyle>
  );
};

const ListItemStyle = styled.li<FlexProps>`
  ${p => flexBase(p)}
  ${p => textBase(p)}
`;

export default ListItem;

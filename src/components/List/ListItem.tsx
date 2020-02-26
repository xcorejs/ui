import React, { FC } from 'react';
import styled from 'styled-components';

import Complement, { SideComplementProps, sideComp } from '../Complement';
import { FlexBaseProps, TextBaseProps, flexBase, textBase } from '../../bases';
import { compose } from '../../utils/baseStyle';

export type ListItemProps =
  & FlexBaseProps
  & TextBaseProps
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

const ListItemStyle = styled.li<FlexBaseProps & TextBaseProps>`
  ${compose(flexBase, textBase)}
`;

export default ListItem;

import { flexBase, FlexBaseProps, textBase, TextBaseProps } from 'bases';
import Complement, { sideComp, SideComplementProps } from 'components/Complement';
import React, { FC, forwardRef } from 'react';
import styled from 'styled-components';
import { compose } from 'utils/baseStyle';
import { shouldForwardProp } from 'utils/withConfig';

export type ListItemProps =
  & FlexBaseProps
  & TextBaseProps
  & SideComplementProps;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((p, ref) => {
  const [comp, { children, ...props }] = sideComp(p);

  return (
    <ListItemStyle alignItems="flex-start" {...props} ref={ref}>
      <Complement {...comp} />
      <span>
        {children}
      </span>
    </ListItemStyle>
  );
});

const ListItemStyle = styled.li.withConfig<FlexBaseProps & TextBaseProps>({ shouldForwardProp })`
  ${compose(flexBase, textBase)}
`;

export default ListItem;

import React, { FC } from 'react';

import useTheme from '../../useTheme';
import { defaults } from '../../utils/defaults';
import renderComponent, { Renderable } from '../../utils/renderComponent';
import { typeVariant } from '../../utils/variant';
import { BoxProps } from '../Box';
import Flex, { FlexProps } from '../Flex';
import Tag, { TagProps } from '../Tag';
import Text, { TextProps } from '../Text';
import { CardType } from './theme';

export type CardProps =
  {
    header?: Renderable;
    _header?: FlexProps;

    title?: string;
    _title?: TextProps;

    tag?: Renderable;
    _tag?: TagProps;

    media?: Renderable;
    _media?: FlexProps;

    body?: Renderable;
    _body?: FlexProps;

    footer?: Renderable;
    _footer?: FlexProps;
  }
  & BoxProps;

export type ExtendedCardProps = {
  t?: CardType;
  type?: CardType;
} & CardProps;

const Card: FC<ExtendedCardProps> = ({
  children,
  ...p
}) => {
  const { card } = useTheme();

  const {
    _header,
    header,
    _tag,
    tag,
    _title,
    title,
    _media,
    media,
    _body,
    body,
    _footer,
    footer,
    ...props
  } = defaults(
    p,
    typeVariant(card, 'elevated', p),
    card.default
  );

  return (
    <Flex
      role="group"
      width='100%'
      position='relative'
      flexDirection='column'
      {...props}
    >
      {(header || title) && (
        <Flex order={1} {..._header}>
          {header
            ? renderComponent(header)
            : (
              <Text
                fontSize='2rem'
                lineHeight='3rem'
                {..._title}
              >{title}
              </Text>
            )}
        </Flex>
      )}

      {media && (
        <Flex order={2} {..._media}>
          {renderComponent(media)}
        </Flex>
      )}

      {body && (
        <Flex order={3} {..._body}>
          {renderComponent(body)}
        </Flex>
      )}

      {children && (
        <Flex order={3} {..._body}>
          {children}
        </Flex>
      )}

      {footer && (
        <Flex order={4} {..._footer}>
          {renderComponent(footer)}
        </Flex>
      )}
      {tag && (
        <Tag {..._tag}>
          {renderComponent(tag)}
        </Tag>
      )}
    </Flex>
  );
};

export default Card;

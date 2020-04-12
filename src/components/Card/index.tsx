import { BoxProps } from 'components/Box';
import Flex, { FlexProps } from 'components/Flex';
import Tag, { TagProps } from 'components/Tag';
import Text, { TextProps } from 'components/Text';
import CSS from 'csstype';
import React, { forwardRef, ReactNode } from 'react';
import { ResponsiveValue } from 'styled-system';
import useTheme from 'useTheme';
import renderComponent, { Renderable } from 'utils/renderComponent';
import useMerge from 'utils/useMerge';
import { typeVariant } from 'utils/variant';

import { CardVariant } from './theme';

export type CardProps =
  {
    header?: Renderable;
    _header?: FlexProps;

    title?: Renderable;
    _title?: TextProps;

    tag?: Renderable;
    _tag?: TagProps;

    media?: Renderable;
    _media?: FlexProps;

    body?: Renderable;
    _body?: FlexProps;

    footer?: Renderable;
    _footer?: FlexProps;

    innerPadding?: ResponsiveValue<CSS.PaddingProperty<number>>;
  }
  & BoxProps;

export type ExtendedCardProps = {
  v?: CardVariant;
  variant?: CardVariant;

  children?: ReactNode;
} & CardProps;

const Card = forwardRef<HTMLDivElement, ExtendedCardProps>(({
  children,
  ...p
}, ref) => {
  const { card } = useTheme();

  const type = typeVariant(card, 'elevated', p);

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
    innerPadding,
    ...props
  } = useMerge(
    p,
    type,
    card.default
  );

  const getPadding = <T extends unknown>(
    target: (p: CardProps) => { padding?: T } | undefined
  ) =>
    target(p)?.padding ??
    p.innerPadding ??
    target(type)?.padding ??
    type.innerPadding ??
    target(card.default)?.padding ??
    card.default.innerPadding;

  return (
    <Flex
      role="group"
      width='100%'
      position='relative'
      flexDirection='column'
      {...props}
      ref={ref}
    >
      {(header || title) && (
        <Flex>
          <Flex order={1} {..._header} padding={getPadding(x => x._header)}>
            <Flex flexGrow={1}>
              {header
                ? renderComponent(header)
                : (
                  <Text
                    fontSize='2rem'
                    lineHeight='3rem'
                    {..._title}
                  >
                    {renderComponent(title)}
                  </Text>
                )}
            </Flex>
          </Flex>
        </Flex>
      )}

      {tag && (
        <Tag position="absolute" top="0" right="0" alignSelf="center" m={_header.p ?? _header.padding} {..._tag}>
          {renderComponent(tag)}
        </Tag>
      )}

      {media && (
        <Flex order={2} {..._media}>
          {renderComponent(media)}
        </Flex>
      )}

      {body && (
        <Flex order={3} {..._body} padding={getPadding(x => x._body)}>
          {renderComponent(body)}
        </Flex>
      )}

      {children && (
        <Flex order={3} {..._body} padding={getPadding(x => x._body)}>
          {children}
        </Flex>
      )}

      {footer && (
        <Flex order={4} {..._footer} padding={_footer.p ?? _footer.padding ?? innerPadding}>
          {renderComponent(footer)}
        </Flex>
      )}

    </Flex>
  );
});

export default Card;

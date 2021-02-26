import { x } from '@xstyled/styled-components';
import { Tag } from 'components/Tag';
import { useTheme } from '../../useTheme';
import renderComponent, { Renderable } from 'utils/renderComponent';
import { xcoreComponent } from 'utils/xcoreComponent';

import { CardThemeProps, CardVariant } from './theme';

export * from "./theme";

export interface CardProps extends CardThemeProps {
  header?: Renderable;
  title?: Renderable;
  tag?: Renderable;
  media?: Renderable;
  body?: Renderable;
  footer?: Renderable;
};

export const Card = xcoreComponent<"div", CardProps, CardVariant>(({
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
  children,
  v,
  ...props
}, ref) => {

  return (
    <x.div
    display="flex"
    role="group"
    w='100%'
    position='relative'
    flexDirection='column'
    {...props}
    ref={ref as any}
  >
    {(header || title) && (
      <x.div {..._header}>
        {header
          ? renderComponent(header)
          : (
            <x.span
              fontSize='2rem'
              lineHeight='3rem'
              {..._title}
            >
              {renderComponent(title)}
            </x.span>
          )}
      </x.div>
    )}

    {tag && (
      <Tag m={_header?.p ?? _header?.padding} {..._tag}>
        {renderComponent(tag)}
      </Tag>
    )}

    {media && (
      <x.div order={2} {..._media}>
        {renderComponent(media)}
      </x.div>
    )}

    {body && (
      <x.div {..._body}>
        {renderComponent(body)}
      </x.div>
    )}

    {children && (
      <x.div {..._body}>
        {children}
      </x.div>
    )}

    {footer && (
      <x.div>
        {renderComponent(footer)}
      </x.div>
    )}

  </x.div>
  )
});

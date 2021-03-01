import { x } from "@xstyled/emotion";
import { Tag } from "components/Tag";
import { useTheme } from "../../hooks/useTheme";
import renderComponent, { Renderable } from "utils/renderComponent";
import { xcoreComponent } from "utils/xcoreComponent";

import { CardThemeProps, CardVariant } from "./theme";
import { useComponentTheme } from "hooks/useComponentTheme";

export * from "./theme";

export interface CardProps extends Omit<CardThemeProps, "title"> {
  header?: Renderable;
  title?: Renderable;
  tag?: Renderable;
  media?: Renderable;
  body?: Renderable;
  footer?: Renderable;
}

export const Card = xcoreComponent<"div", CardProps, CardVariant>("div", ({
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
  const theme = useComponentTheme("card", v);

  return (
    <x.div
      {...theme}
      {...props}
      ref={ref as any}
    >
      {(header || title) && (
        <x.div {...theme._header} {..._header}>
          {header
            ? renderComponent(header)
            : (
              <x.span {...theme._title} {..._title}>
                {renderComponent(title)}
              </x.span>
            )}
        </x.div>
      )}

      {tag && (
        <Tag m={_header?.p ?? _header?.padding} {...theme._tag} {..._tag}>
          {renderComponent(tag)}
        </Tag>
      )}

      {media && (
        <x.div order={2} {...theme._media} {..._media}>
          {renderComponent(media)}
        </x.div>
      )}

      {body && (
        <x.div {...theme._body} {..._body}>
          {renderComponent(body)}
        </x.div>
      )}

      {children && (
        <x.div {...theme._body} {..._body}>
          {children}
        </x.div>
      )}

      {footer && (
        <x.div {...theme._body} {..._footer}>
          {renderComponent(footer)}
        </x.div>
      )}

    </x.div>
  );
});

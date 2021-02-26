import { x } from '@xstyled/styled-components';
import Complement, { comp, ComplementProps } from 'components/Complement';
import { useComponentTheme } from 'hooks/useComponentTheme';
import { xcoreComponent } from 'utils/xcoreComponent';

import { TagVariant } from './theme';

export * from "./theme";

export type TagProps = ComplementProps;

export const Tag = xcoreComponent<"div", TagProps, TagVariant>(({ children, v, ...p }, ref) => {
  const theme = useComponentTheme("tag", v);

  const [left, right, props] = comp(p);

  return (
    <x.div ref={ref as any} {...theme} {...props}>
      <Complement {...theme._leftIcon} {...left} />
      {children}
      <Complement {...theme._leftIcon} {...right} />
    </x.div>
  );
});

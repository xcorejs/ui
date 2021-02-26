import { x } from '@xstyled/styled-components';
import Complement, { comp, ComplementProps } from 'components/Complement';
import { xcoreComponent } from 'utils/xcoreComponent';
import { TagVariant } from './theme';
import useTheme from '../../useTheme';

export * from "./theme";

export type TagProps = ComplementProps;

export const Tag = xcoreComponent<"div", TagProps, TagVariant>(({ children, v, ...p }, ref) => {
  const [left, right, props] = comp(p);

  return (
    <x.div ref={ref as any} {...props}>
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </x.div>
  );
});

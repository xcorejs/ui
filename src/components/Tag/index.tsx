import { x } from '@xstyled/styled-components';
import Complement, { comp, ComplementProps } from 'components/Complement';
import useTheme from 'useTheme';
import { xcoreComponent } from 'utils/xcoreComponent';
import { TagVariant } from './theme';

export * from "./theme";

export type TagProps = ComplementProps;

const Tag = xcoreComponent<"div", TagProps, TagVariant>(({ children, v, ...p }, ref) => {
  const { tag } = useTheme();

  const [left, right, props] = comp(p);

  return (
    <x.div
      ref={ref as any}
      whiteSpace="nowrap"
      alignItems='center'
      userSelect='none'
      transition='color 300ms, background 300ms, border-color 300ms'
      {...props}
    >
      <Complement {...left} />
      {children}
      <Complement {...right} />
    </x.div>
  );
});

export default Tag;

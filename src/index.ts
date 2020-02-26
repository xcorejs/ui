export { default as Box, BoxProps } from './components/Box';
export { default as Icon, IconProps, ExtendedIconProps } from './components/Icon';
export { default as Flex, FlexProps, ExtendedFlexProps } from './components/Flex';
export { default as Stack, StackProps, ExtendedStackProps } from './components/Stack';
export { default as Container } from './components/Container';
export { default as ActiveBreakpoint } from './components/ActiveBreakpoint';
export { default as Button, ButtonProps, ExtendedButtonProps } from './components/Button';
export { default as XcoreGlobal } from './components/XcoreGlobal';

export { default as Text, TextProps, ExtendedTextProps } from './components/Text';
export {
  Em,
  Strong,
  Underline,
  Abbr,
  Strikethrough,
  Sub,
  Sup
} from './components/Text/aliases';

export { default as Typography, ExtendedTypographyProps } from './components/Typography';
export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Lead
} from './components/Typography/aliases';

export { default as Grid, GridProps, ExtendedGridProps } from './components/Grid';
export { default as Cell, CellProps, ExtendedCellProps } from './components/Grid/Cell';
export { default as SimpleGrid, SimpleGridProps } from './components/SimpleGrid';
export { default as LoremIpsum, LoremIpsumProps } from './components/LoremIpsum';
export { default as AspectRatio, AspectRatioProps } from './components/AspectRatio';
export { default as Collapse, CollapseProps } from './components/Collapse';
export { default as Img, ImgProps } from './components/Img';
export { default as Link, LinkProps } from './components/Link';
export { default as Tag, TagProps } from './components/Tag';
export { default as Card, CardProps } from './components/Card';
export { default as List, ListProps } from './components/List';
export { default as ListItem, ListItemProps } from './components/List/ListItem';

export {
  XcoreTheme,
  container,
  breakpoints,
  BreakpointsTheme,
  createTheme,
  Breakpoints,
  text,
  button,
  global,
  typography,
  ButtonSize,
  ButtonType,
  ButtonAs,
  TypographyAs,
  TypographyType,
  TextAs,
  TextType
} from './theme';

export { default as useTheme } from './useTheme';

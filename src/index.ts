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
export { default as InsetBox, InsetBoxProps } from './components/AbsoluteBox/InsetBox';
export { default as OutsetBox, OutsetBoxProps } from './components/AbsoluteBox/OutsetBox';
export { default as CloseControl, CloseControlProps, ExtendedCloseControlProps } from './components/CloseControl';
export { default as Modal, ModalProps, ExtendedModalProps } from './components/Modal';
export { ModalContext, useModal } from './components/Modal/data';
export { default as ModalProvider } from './components/Modal/ModalProvider';
export { default as XcoreProvider, XcoreProviderProps } from './components/XcoreProvider';

export { XcoreTheme, createTheme } from './theme';

export { container } from './components/Container/theme';
export { text, TextAs, TextType } from './components/Text/theme';
export { button, ButtonSize, ButtonType, ButtonAs } from './components/Button/theme';
export { global } from './components/XcoreGlobal/theme';
export { typography, TypographyType, TypographyAs } from './components/Typography/theme';
export { link, LinkType, LinkAs } from './components/Link/theme';
export { list, ListType } from './components/List/theme';
export { tag, TagType } from './components/Tag/theme';
export { card, CardType } from './components/Card/theme';

export { Scales, createScales } from './scales';

export { breakpoints, BreakpointScale } from './scales/breakpoints';
export {
  colors,
  ColorScale,
  darken,
  lighten,
  opacify,
  transparentize,
  saturate,
  desaturate,
  shade,
  tint,
  adjustHue,
  lightColorTheme,
  darkColorTheme
} from './scales/colors';
export { fonts, FontScale } from './scales/fonts';

export { default as useTheme } from './useTheme';

export { default as useDisclosure } from './hooks/useDisclosure';

// Basic components
export { default as ActiveBreakpoint } from './components/ActiveBreakpoint';
export { default as AspectRatio, AspectRatioProps } from './components/AspectRatio';
export { default as Box, BoxProps } from './components/Box';
export { default as Collapse, CollapseProps } from './components/Collapse';
export { default as Flex, FlexProps, ExtendedFlexProps } from './components/Flex';
export { default as Icon, IconProps, ExtendedIconProps } from './components/Icon';
export { default as Img, ImgProps } from './components/Img';
export { default as LoremIpsum, LoremIpsumProps } from './components/LoremIpsum';
export { default as SimpleGrid, SimpleGridProps } from './components/SimpleGrid';
export { default as Spinner, SpinnerProps } from './components/Spinner';
export { default as Stack, StackProps, ExtendedStackProps } from './components/Stack';

export { default as Grid, GridProps, ExtendedGridProps } from './components/Grid';
export { default as Cell, CellProps, ExtendedCellProps } from './components/Grid/Cell';
export { default as InsetBox, InsetBoxProps } from './components/AbsoluteBox/InsetBox';
export { default as OutsetBox, OutsetBoxProps } from './components/AbsoluteBox/OutsetBox';
export { HorizontalPosition, VerticalPosition } from './components/AbsoluteBox/data';

// Button
export { default as Button, ButtonProps, ExtendedButtonProps } from './components/Button';
export { button, ButtonSize, ButtonVariant, ButtonAs } from './components/Button/theme';

// Card
export { default as Card, CardProps, ExtendedCardProps } from './components/Card';
export { card, CardVariant } from './components/Card/theme';

// Close control
export { default as CloseControl, CloseControlProps, ExtendedCloseControlProps } from './components/CloseControl';
export { closeControl, CloseControlSizes } from './components/CloseControl/theme';

// Container
export { default as Container, ContainerProps, ExtendedContainerProps } from './components/Container';
export { container } from './components/Container/theme';

// Link
export { default as Link, LinkProps, ExtendedLinkProps } from './components/Link';
export { link, LinkVariant, LinkAs } from './components/Link/theme';

// List
export { default as List, ListProps, ExtendedListProps } from './components/List';
export { default as ListItem, ListItemProps } from './components/List/ListItem';
export { list, ListVariant } from './components/List/theme';

// Modal
export { default as Modal, ModalProps, ExtendedModalProps } from './components/Modal';
export { ModalContext, useModal, useModalHistory } from './components/Modal/data';
export { default as ModalProvider } from './components/Modal/ModalProvider';
export { modal } from './components/Modal/theme';

// Tag
export { default as Tag, TagProps } from './components/Tag';
export { tag, TagVariant } from './components/Tag/theme';

// Text
export { default as Text, TextProps, ExtendedTextProps } from './components/Text';
export { text, TextAs, TextVariant } from './components/Text/theme';
export {
  Em,
  Strong,
  Underline,
  Abbr,
  Strikethrough,
  Sub,
  Sup
} from './components/Text/aliases';

// Typography
export { default as Typography, TypographyProps, ExtendedTypographyProps } from './components/Typography';
export { typography, TypographyVariant, TypographyAs } from './components/Typography/theme';
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

// Helper components
export { default as XcoreProvider, XcoreProviderProps } from './components/XcoreProvider';
export { default as XcoreGlobal } from './components/XcoreGlobal';
export { global } from './components/XcoreGlobal/theme';

// Theme & scales functions
export { XcoreTheme, createTheme } from './theme';

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

// Hooks
export { default as useTheme } from './useTheme';
export { default as useDisclosure } from './hooks/useDisclosure';

import InsetBox from 'components/AbsoluteBox/InsetBox';
import CloseButton, { CloseControlProps } from 'components/CloseControl';
import Flex, { ExtendedFlexProps, FlexProps } from 'components/Flex';
import Typography, { ExtendedTypographyProps } from 'components/Typography';
import React, { FC, useContext } from 'react';
import useTheme from 'useTheme';
import { merge } from 'utils/merge';
import renderComponent, { Renderable } from 'utils/renderComponent';
import { sizeVariant } from 'utils/variant';

import Box, { BoxProps } from '../Box';
import { ModalContext } from './data';
import { ModalSize } from './theme';

export type ModalProps = {
  title?: Renderable;
  _title?: ExtendedTypographyProps;

  header?: Renderable;
  _header?: BoxProps;

  _close?: CloseControlProps;
  _overlay?: ExtendedFlexProps;
} & FlexProps;

export type ExtendedModalProps = {
  s?: ModalSize;
  size?: ModalSize;

  onClose?: () => unknown;
} & ModalProps;

const Modal: FC<ExtendedModalProps> = ({ children, onClose, ...p }) => {
  const { modal } = useTheme();
  const { setModal } = useContext(ModalContext);

  const { title, _title, header, _header, _close, _overlay, ...props } = merge(
    p,
    sizeVariant(modal, 'md', p),
    modal.default
  );

  return (
    <InsetBox
      horizontalPosition="stretch"
      verticalPosition="stretch"
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={3}
      {..._overlay}
    >
      <Flex flexDirection="column" position="relative" {...props}>
        <Box onClick={onClose ?? (() => setModal(undefined))}>
          <CloseButton {..._close} />
        </Box>

        {(header || title) && (
          <Flex mb="2rem" {..._header}>
            {header
              ? renderComponent(header)
              : (
                <Typography v="h3" as="div" {..._title}>
                  {renderComponent(title)}
                </Typography>
              )}
          </Flex>
        )}

        {children}
      </Flex>
    </InsetBox>
  );
};

export default Modal;

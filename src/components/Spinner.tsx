import { FC } from 'react';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Box, { BoxProps } from './Box';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export type SpinnerProps = {
  speed?: string;
} & BoxProps;

const SpinnerStyle = styled(Box)<SpinnerProps>`
  animation: ${spin} ${({ speed }) => speed} linear infinite;
`;

const Spinner: FC<SpinnerProps> = props => {
  return (
    <SpinnerStyle
      display="inline-block"
      borderColor="currentColor"
      borderStyle="solid"
      borderRadius="full"
      borderWidth="2px"
      borderLeftColor="transparent"
      borderBottomColor="transparent"
      width="1.6rem"
      height="1.6rem"
      speed="0.5s"
      {...props}
    />
  );
};

export default Spinner;

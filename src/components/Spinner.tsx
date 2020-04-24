import { BoxBaseProps, composedBoxBase } from 'bases';
import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

export type SpinnerProps = {
  speed?: string;
} & BoxBaseProps;

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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyle = styled.div<SpinnerProps>`
  ${composedBoxBase}

  animation: ${spin} ${({ speed }) => speed} linear infinite;
`;

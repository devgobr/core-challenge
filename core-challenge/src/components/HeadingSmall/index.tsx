import React from 'react';
import { StyledComponentPropsWithRef } from 'styled-components';
import * as Styled from './styles';
import { AsProp } from '../typeUtils';

export type HeadingSmallProps = StyledComponentPropsWithRef<'h6'> &
  AsProp & {};

export const HeadingSmall = React.forwardRef<HTMLButtonElement, HeadingSmallProps>(
  (
    {
      children = null,
      onClick = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <Styled.Base {...props}>
        {children}
      </Styled.Base>
    );
  }
);

HeadingSmall.displayName = 'HeadingSmall';

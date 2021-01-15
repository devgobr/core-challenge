import React from 'react';
import { StyledComponentPropsWithRef } from 'styled-components';
import * as Styled from './styles';
import { AsProp } from '../typeUtils';

export type ShapeProps = StyledComponentPropsWithRef<'div'> &
  AsProp & {};

export const Shape = React.forwardRef<HTMLButtonElement, ShapeProps>(
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

Shape.displayName = 'Shape';

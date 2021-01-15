import React from 'react';
import { StyledComponentPropsWithRef } from 'styled-components';
import * as Styled from './styles';
import { AsProp } from '../typeUtils';

export type ParagraphProps = StyledComponentPropsWithRef<'p'> &
  AsProp & {};

export const Paragraph = React.forwardRef<HTMLButtonElement, ParagraphProps>(
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

Paragraph.displayName = 'Paragraph';

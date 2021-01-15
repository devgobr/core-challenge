import React from 'react';
import { StyledComponentPropsWithRef } from 'styled-components';
import * as Styled from './styles';
import { AsProp } from '../typeUtils';

export type SubtitleSmallProps = StyledComponentPropsWithRef<'h1'> &
  AsProp & {};

export const SubtitleSmall = React.forwardRef<HTMLButtonElement, SubtitleSmallProps>(
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

SubtitleSmall.displayName = 'SubtitleSmall';

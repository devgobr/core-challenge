import React, { useRef } from 'react';
import { StyledComponentPropsWithRef } from 'styled-components';
import * as Styled from './styles';
import { AsProp } from '../typeUtils';

export type ButtonBaseProps = StyledComponentPropsWithRef<'button'> &
  AsProp & {};

export const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      children = null,
      onClick = () => {},
      ...props
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick(event);
    };

    return (
      <Styled.Base ref={ref} onClick={handleClick} {...props}>
        {children}
      </Styled.Base>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

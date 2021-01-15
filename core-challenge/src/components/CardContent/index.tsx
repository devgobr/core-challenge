import React from 'react';
import { StyledComponentPropsWithRef } from 'styled-components';
import { AsProp } from '../typeUtils';
import { SubtitleSmall, HeadingSmall, Paragraph } from './styles';
import { ButtonPrimary } from '../ButtonPrimary';
import { Shape } from '../Shape';

export type CardContentProps = StyledComponentPropsWithRef<'div'> &
  AsProp & {
    label: string;
    heading: string;
    subtitle: string;
    paragraph: string;
  };

export const CardContent = React.forwardRef<HTMLButtonElement, CardContentProps>(
  (
    {
      onClick,
      label,
      heading,
      subtitle,
      paragraph
    },
    ref
  ) => {

    const handleClick = (event) => {
      onClick(event);
    };

    return (
      <Shape>
        <HeadingSmall>{heading}</HeadingSmall>
        <SubtitleSmall>{subtitle}</SubtitleSmall>
        <Paragraph>{paragraph}</Paragraph>
        <ButtonPrimary onClick={handleClick}>{label}</ButtonPrimary>
      </Shape>
    );
  }
);

CardContent.displayName = 'CardContent';

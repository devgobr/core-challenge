import styled from 'styled-components';
import tokens from '~tokens';

export const Base = styled.h1`
  font-size: ${tokens.fontSizeMd};
  line-height: ${tokens.lineHeightMedium};
  font-family: ${tokens.fontFamilyBase};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutral02};
`;

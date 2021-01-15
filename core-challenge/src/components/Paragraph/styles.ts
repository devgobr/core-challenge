import styled from 'styled-components';
import tokens from '~tokens';

export const Base = styled.p`
  font-size: ${tokens.fontSizeXs};
  line-height: ${tokens.lineHeightDistant};
  font-family: ${tokens.fontFamilyBase};
  font-weight: ${tokens.fontWeightRegular};
  color: ${tokens.colorNeutral02};
`;

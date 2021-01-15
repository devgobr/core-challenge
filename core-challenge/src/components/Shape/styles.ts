import styled from 'styled-components';
import tokens from '~tokens';

export const Base = styled.div`
  border-radius: ${tokens.borderRadiusNone};
  padding: ${tokens.spacingInsetLg};
  border-width: ${tokens.borderWidthThin};
  border-color: ${tokens.colorNeutral04};
  background-color: ${tokens.colorNeutral05};
`;

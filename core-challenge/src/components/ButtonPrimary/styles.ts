import styled from 'styled-components';
import tokens from '~tokens';

export const Base = styled.button`
  //adicionado para remoção da borda (não havia nos arquivos, mas o desenho mostrava 
  // que não havia bordas)
  border: none;
  font-size: ${tokens.fontSizeSm};
  line-height: ${tokens.lineHeightTight};
  border-radius: ${tokens.borderRadiusNone};
  padding: ${tokens.spacingSquishXs};
  
  font-family: ${tokens.fontFamilyBase};
  font-weight: ${tokens.fontWeightMedium};
  color: ${tokens.colorNeutral05};
  background-color: ${tokens.colorBrandPrimary03};
  
  :hover{
    background-color: ${tokens.colorBrandPrimary02};
  }
`;

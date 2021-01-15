import styled from 'styled-components';
import tokens from 'core-challenge/tokens';

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  background-color: darkgray;
`;

export const ContainerCard = styled.div`
  flex: 1 1 33.333333%;
  max-width: 400px;
  max-height: 600px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 20px;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  justify-items: stretch;
`;

export const HeaderTitle = styled.h1`
  font-size: ${tokens.fontSizeDisplay};
  flex: 1 1 100%;
  text-align: center;
`;

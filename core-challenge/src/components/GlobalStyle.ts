import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'AvertaStd';
    src: url('/fonts/Archivo-Regular.ttf') format('woff2')
    font-weight: normal;
  }

  @font-face {
    font-family: 'AvertaStd';
    src: url('/fonts/Archivo-Regular.ttf') format('ttf')
    font-weight: 600;
  }

  @font-face {
    font-family: 'AvertaStd';
    src: url('/fonts/Archivo-Bold.ttf') format('ttf');
    font-weight: 700;
  }

  * {
    box-sizing: inherit;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-size: 1rem;
    font-family: 'AvertaStd', sans-serif;
    margin: 0;
    padding: 0;
    cursor: default;
    min-width: 320px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: inherit;
    font-size: 100%;
  }
`;

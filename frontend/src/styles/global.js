import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }

  html, body, #root {
    min-height: 100%;
    margin: inherit;
    background-color: #f0f0f0;
  }
`;
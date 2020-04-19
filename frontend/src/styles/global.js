import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0 !important;
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
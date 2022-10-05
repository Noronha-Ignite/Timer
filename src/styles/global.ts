import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F0F0F0;

    * {
      font-family: 'Roboto', sans-serif;
    }

    .mono-bold {
      font-family: 'Roboto Mono', monospace;
    }
  }
`;

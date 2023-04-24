import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    height: 100vh;
    ${theme.fonts.main}
  }
  a {
    text-decoration: none;
    color:inherit;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    height: 100vh;
    ${theme.fonts.main}
  }
`;

export default GlobalStyle;

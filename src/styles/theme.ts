import { DefaultTheme, css } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
  }
}

const colors = {
  sky: "#4CB5F9",
  instaSky: "#0095F6",
  darkSky: "#1877F2",
  lightSky: "#B3E0FC",
  black: "#000000",
  white: "#ffffff",
  dimGray: "#00000066",
  darkGray: "#00000099;"
};

const fonts = {
  main: css`
    font-family: "Noto Sans KR", sans-serif;
  `,
};

export const theme: DefaultTheme = {
  colors,
  fonts,
};

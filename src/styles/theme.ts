import { DefaultTheme } from "styled-components";

const colors = {
  white: "#ffffff",
  extralight: "#f5f5f7",
  lightgray: "#d2d2d7",
  gray: "#808080",
  darkgray: "#424245",
  black: "#121212",
  succeess: "#32936f",
  error: "#f55f56",
};

const flexSet = (direction = "column", just = "center", align = "center") => {
  return `display: flex;
  flex-direction: ${direction};
  justify-content: ${just};
  align-items: ${align};`;
};

export const theme: DefaultTheme = {
  colors,
  flexSet,
};

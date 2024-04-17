import { DefaultTheme, IStyleName } from "styled-components";

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

const flexSet = (direction = "row", just = "center", align = "center") => {
  return `display: flex;
  flex-direction: ${direction};
  justify-content: ${just};
  align-items: ${align};`;
};

const typography = (styleName: IStyleName) => {
  switch (styleName) {
    case "Heading1":
      return `
      font-size: 67px;
      line-height: 120%;
      font-weight: 600;
    `;
    case "Heading2":
      return `
      font-size: 50px;
      line-height: 120%;
      font-weight: 600;
    `;
    case "Heading3":
      return `
      font-size: 38px;
      line-height: 120%;
      font-weight: 500;
    `;
    case "Heading4":
      return `
      font-size: 28px;
      line-height: 120%;
      font-weight: 500;
    `;
    case "Heading5":
      return `
      font-size: 21px;
      line-height: 120%;
      font-weight: 500;
    `;
    case "Heading6":
      return `
      font-size: 16px;
      line-height: 120%;
      font-weight: 500;
    `;
    case "Subtitle":
      return `
      font-size: 18px;
      line-height: 120%;
      font-weight: 500;
    `;
    case "Body":
      return `
      font-size: 16px;
      line-height: 140%;
      font-weight: 400;
    `;
    case "Button":
      return `
      font-size: 16px;
      line-height: 120%;
      font-weight: 500;
      text-transform: uppercase;
    `;
    case "Links":
      return `
      font-size: 16px;
      line-height: 120%;
      font-weight: 500;
    `;
    case "OverLine":
      return `
      font-size: 14px;
      line-height: 120%;
      font-weight: 500;
      text-transform: uppercase;
    `;
    case "Caption":
      return `
      font-size: 14px;
      line-height: 120%;
      font-weight: 400;
    `;
    case "CaptionSmall":
      return `
      font-size: 12px;
      line-height: 120%;
      font-weight: 500;
    `;
    case "CaptionBold":
      return `
      font-size: 14px;
      line-height: 120%;
      font-weight: 500;
      `;
  }
};

export const theme: DefaultTheme = {
  colors,
  flexSet,
  typography,
};

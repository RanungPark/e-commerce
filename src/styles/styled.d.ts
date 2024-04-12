import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      extralight: string;
      lightgray: string;
      gray: string;
      darkgray: string;
      black: string;
      succeess: string;
      error: string;
    };
    flexSet: (direction?: string, just?: string, align?: string) => string;
  }
}

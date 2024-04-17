import 'styled-components';

declare module 'styled-components' {
  export type IStyleName =
    | 'Heading1'
    | 'Heading2'
    | 'Heading3'
    | 'Heading4'
    | 'Heading5'
    | 'Heading6'
    | 'Subtitle'
    | 'Body'
    | 'Button'
    | 'Links'
    | 'OverLine'
    | 'Caption'
    | 'CaptionSmall'
    | 'CaptionBold';

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
    typography: (styleName: IStyleName) => string;
  }
}

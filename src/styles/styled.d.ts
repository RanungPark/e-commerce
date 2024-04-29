import 'styled-components';

declare module 'styled-components' {
  type Typography =
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
    | 'Overline'
    | 'Caption'
    | 'CaptionSmall'
    | 'CaptionBold';

  type Weight = 'Semibold' | 'Medium' | 'Regular';

  interface DefaultTheme {
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
    typography: {
      [K in Typography]: string;
    };
  }
}

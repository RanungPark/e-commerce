import { Typography, Weight } from 'src/@types/theme';

const colors = {
  white: '#ffffff',
  extralight: '#f5f5f7',
  lightgray: '#d2d2d7',
  gray: '#808080',
  darkgray: '#424245',
  black: '#121212',
  succeess: '#32936f',
  error: '#f55f56',
};

const weightScheme: Record<Weight, number> = {
  Semibold: 600,
  Medium: 500,
  Regular: 400,
};

const sizeMap: Record<Typography, number> = {
  Heading1: 67,
  Heading2: 50,
  Heading3: 38,
  Heading4: 28,
  Heading5: 21,
  Heading6: 16,
  Subtitle: 18,
  Body: 16,
  Button: 16,
  Links: 16,
  Overline: 14,
  Caption: 14,
  CaptionSmall: 12,
  CaptionBold: 14,
};

const lineHeightMap: Record<Typography, number> = {
  Heading1: 120,
  Heading2: 120,
  Heading3: 120,
  Heading4: 120,
  Heading5: 120,
  Heading6: 120,
  Subtitle: 140,
  Body: 140,
  Button: 120,
  Links: 120,
  Overline: 120,
  Caption: 120,
  CaptionSmall: 120,
  CaptionBold: 120,
};

const weightMap: Record<Typography, number> = {
  Heading1: weightScheme.Semibold,
  Heading2: weightScheme.Semibold,
  Heading3: weightScheme.Medium,
  Heading4: weightScheme.Medium,
  Heading5: weightScheme.Medium,
  Heading6: weightScheme.Medium,
  Subtitle: weightScheme.Medium,
  Body: weightScheme.Regular,
  Button: weightScheme.Medium,
  Links: weightScheme.Medium,
  Overline: weightScheme.Medium,
  Caption: weightScheme.Regular,
  CaptionSmall: weightScheme.Medium,
  CaptionBold: weightScheme.Medium,
};

const buildTypographya = (typo: Typography) => {
  return `
    font-size: ${sizeMap[typo]}px; 
    font-weight: ${weightMap[typo]}; 
    line-height: ${lineHeightMap[typo]}%;
  `;
};

const typography: Record<Typography, string> = {
  Heading1: buildTypographya('Heading1'),
  Heading2: buildTypographya('Heading2'),
  Heading3: buildTypographya('Heading3'),
  Heading4: buildTypographya('Heading4'),
  Heading5: buildTypographya('Heading5'),
  Heading6: buildTypographya('Heading6'),
  Subtitle: buildTypographya('Subtitle'),
  Body: buildTypographya('Body'),
  Button: buildTypographya('Button') + `text-transform: uppercase;`,
  Links: buildTypographya('Links'),
  Overline: buildTypographya('Overline') + `text-transform: uppercase;`,
  Caption: buildTypographya('Caption'),
  CaptionSmall: buildTypographya('CaptionSmall'),
  CaptionBold: buildTypographya('CaptionSmall'),
};

export const theme = {
  colors,
  typography,
};

export type Theme = typeof theme;

import type { Preview } from '@storybook/react';
import React from 'react';
import GlobalStyles from '../src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      theme: theme,
    },
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export default preview;

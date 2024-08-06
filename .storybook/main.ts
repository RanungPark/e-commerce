import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-themes',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@public': path.resolve(__dirname, '../public'),
        '@assets': path.resolve(__dirname, '../src/assets'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@constants': path.resolve(__dirname, '../src/constants'),
        '@contexts': path.resolve(__dirname, '../src/contexts'),
        '@data': path.resolve(__dirname, '../src/data'),
        '@hooks': path.resolve(__dirname, '../src/hooks'),
        '@mocks': path.resolve(__dirname, '../src/mocks'),
        '@pages': path.resolve(__dirname, '../src/pages'),
        '@store': path.resolve(__dirname, '../src/store'),
        '@styles': path.resolve(__dirname, '../src/styles'),
        '@utils': path.resolve(__dirname, '../src/utils'),
        '@config': path.resolve(__dirname, '../config.ts'),
      },
    };

    return config;
  },
};

export default config;

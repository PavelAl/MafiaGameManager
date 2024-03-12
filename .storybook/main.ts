import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts';

import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  refs: {
    '@chakra-ui/react': {
      disable: true
    }
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '~': path.resolve(__dirname, '../src')
        }
      },
      plugins: [sassDts()]
    });
  }
};
export default config;

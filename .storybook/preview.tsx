import { ChakraProvider } from '@chakra-ui/react';
import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/App.css';
import { BrowserRouter } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    Story => (
      <BrowserRouter>
        <ChakraProvider>
          <Story />
        </ChakraProvider>
      </BrowserRouter>
    )
  ]
};

export default preview;

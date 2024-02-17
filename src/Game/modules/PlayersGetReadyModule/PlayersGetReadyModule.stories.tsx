import { Meta, StoryObj } from '@storybook/react';

import { PlayersGetReadyModule, PlayersGetReadyModuleProps } from './PlayersGetReadyModule';

export default {
  title: 'GameSetup/PlayersGetReadyModule',
  component: PlayersGetReadyModule,
  argTypes: {
    onStart: { action: 'start' }
  }
} as Meta<PlayersGetReadyModuleProps>;

export const Default: StoryObj<PlayersGetReadyModuleProps> = {};

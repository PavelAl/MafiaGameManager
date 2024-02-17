import { Meta, StoryObj } from '@storybook/react';

import { MainMenu } from './MainMenu';
import { MainMenuProps } from './MainMenu.types';

type Args = MainMenuProps;

export default {
  title: 'App/MainMenu',
  component: MainMenu
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

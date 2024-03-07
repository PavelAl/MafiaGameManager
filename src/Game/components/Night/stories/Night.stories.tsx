import { Meta, StoryObj } from '@storybook/react';

import { NightProps } from '../Night.types';

import { NightStory } from './NightStory';

type Args = NightProps;

export default {
  title: 'Game/Night',
  component: NightStory
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

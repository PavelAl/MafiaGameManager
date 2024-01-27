import { Meta, StoryObj } from '@storybook/react';

import { PlayersListProps } from '../PlayersList.types';

import { PlayersListStory } from './PlayersListStory';

type Args = PlayersListProps;

export default {
  title: 'Players/PlayersList',
  component: PlayersListStory
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

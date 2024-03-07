import { Meta, StoryObj } from '@storybook/react';

import { EliminatingProps } from '../Eliminating.types';

import { initialPlayersNames } from '~/Players/data';

import { EliminatingStory } from './EliminatingStory';

type Args = EliminatingProps;

export default {
  title: 'Game/Eliminating',
  component: EliminatingStory,
  args: {
    label: 'День 1',
    participants: initialPlayersNames
  }
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

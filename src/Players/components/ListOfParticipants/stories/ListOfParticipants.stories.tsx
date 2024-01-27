import { Meta, StoryObj } from '@storybook/react';

import { ListOfParticipantsProps } from '../ListOfParticipants.types';

import { initialPlayersNames } from '~/Players/data';

import { ListOfParticipantsStory } from './ListOfParticipants';

type Args = ListOfParticipantsProps;

export default {
  title: 'ListOfParticipants',
  component: ListOfParticipantsStory,
  args: {
    players: initialPlayersNames
  }
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

import { Meta, StoryObj } from '@storybook/react';

import { ParticipantsPage } from './ParticipantsPage';
import { ParticipantsPageProps } from './ParticipantsPage.types';

type Args = ParticipantsPageProps;

export default {
  title: 'ParticipantsPage',
  component: ParticipantsPage
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

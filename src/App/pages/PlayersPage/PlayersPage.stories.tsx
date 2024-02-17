import { Meta, StoryObj } from '@storybook/react';

import { PlayersPage } from './PlayersPage';
import { PlayersPageProps } from './PlayersPage.types';

type Args = PlayersPageProps;

export default {
  title: 'PlayersPage',
  component: PlayersPage
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

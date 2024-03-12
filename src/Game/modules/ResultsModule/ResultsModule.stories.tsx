import { Meta, StoryObj } from '@storybook/react';

import { initialPlayersNames } from '~/Players';

import { ResultsModule } from './ResultsModule';
import { ResultsModuleProps } from './ResultsModule.types';

type Args = ResultsModuleProps;

export default {
  title: 'Game/Modules/ResultsModule',
  component: ResultsModule,
  args: {
    participants: initialPlayersNames.slice(0, 12),
    rolesRegistration: [
      { key: 'mafia-0', label: 'Мафия 1', player: 'Gensh', role: 'mafia' },
      { key: 'mafia-1', label: 'Мафия 2', player: 'Roxi', role: 'mafia' },
      { key: 'boss', label: 'Босс', player: 'Shandy', role: 'boss' },
      { key: 'sheriff', label: 'Шериф', player: 'Sidorovich', role: 'sheriff' },
      { key: 'maniac', label: 'Маньяк', player: 'Reunion', role: 'maniac' }
    ]
  }
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

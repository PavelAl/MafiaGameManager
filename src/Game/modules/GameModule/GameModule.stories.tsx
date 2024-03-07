import { Meta, StoryObj } from '@storybook/react';
import { FC } from 'react';

import { useGameState } from '../../hooks';

import { initialPlayersNames } from '~/Players';

import { GameModule } from './GameModule';
import { GameModuleProps } from './GameModule.types';

type Args = GameModuleProps;

const GameModuleStory: FC = () => {
  const state = useGameState({
    settings: {
      putana: true,
      players: 12,
      mafia: 1,
      sheriff: true,
      boss: true,
      maniac: true,
      doctor: false
    },
    participants: initialPlayersNames.slice(0, 12)
  });

  return <GameModule {...state} />;
};

export default {
  title: 'GameModule',
  component: GameModuleStory
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

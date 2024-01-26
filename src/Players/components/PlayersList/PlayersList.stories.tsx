import { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';

import { initialPlayersNames } from '~/Players/data';

import { PlayersList } from './PlayersList';
import { PlayersListProps } from './PlayersList.types';

type Args = PlayersListProps;

export const PlayersListStory: FC = () => {
  const [players, setPlayers] = useState(initialPlayersNames);

  const handleChangePlayers = (players: string[]) => {
    setPlayers(players.sort());
  };

  return <PlayersList players={players} onPlayersChange={handleChangePlayers} />;
};

export default {
  title: 'PlayersList',
  component: PlayersListStory
} as Meta<Args>;

type Story = StoryObj<Args>;

export const Default: Story = {};

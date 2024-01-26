import { FC } from 'react';

import { PlayersListView } from './components';
import { PlayersListProps } from './PlayersList.types';

export const PlayersList: FC<PlayersListProps> = props => {
  const { players = [], onPlayersChange } = props;

  const handleAddPlayer = (name: string) => {
    if (!name || players.some(n => n === name)) return;

    const newPlayers = [...players, name];

    onPlayersChange?.(newPlayers);
  };

  const handleRemovePlayer = (name: string) => {
    const newPlayers = players.filter(n => n !== name);

    onPlayersChange?.(newPlayers);
  };

  return (
    <PlayersListView
      players={players}
      onAddPlayer={handleAddPlayer}
      onDeletePlayer={handleRemovePlayer}
    />
  );
};

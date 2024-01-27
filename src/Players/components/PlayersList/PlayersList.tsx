import { FC } from 'react';

import { usePlayersList } from '../../hooks';

import { PlayersListView } from './components';
import { PlayersListProps } from './PlayersList.types';

export const PlayersList: FC<PlayersListProps> = props => {
  const { players = [] } = props;

  const { onAddPlayer, onRemovePlayer } = usePlayersList(props);

  return (
    <PlayersListView players={players} onAddPlayer={onAddPlayer} onDeletePlayer={onRemovePlayer} />
  );
};

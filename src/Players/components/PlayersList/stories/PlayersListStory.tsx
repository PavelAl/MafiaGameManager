import { FC } from 'react';

import { PlayersList } from '../PlayersList';

import { initialPlayersNames } from '~/Players/data';
import { usePlayersListState } from '~/Players/hooks';

export const PlayersListStory: FC = () => {
  const [players, onPlayersChanged] = usePlayersListState(initialPlayersNames);

  return <PlayersList players={players} onPlayersChanged={onPlayersChanged} />;
};

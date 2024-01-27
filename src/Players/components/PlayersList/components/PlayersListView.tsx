import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { RemovableListOfNames } from '../../ListsOfPlayers';

import { initialPlayersNames } from '~/Players/data';

import { AddPlayerInput } from './AddPlayerInput';

export type PlayersListViewProps = {
  players?: string[];
  onAddPlayer?: (name: string) => void;
  onDeletePlayer?: (name: string) => void;
};

export const PlayersListView: FC<PlayersListViewProps> = props => {
  const { players = initialPlayersNames, onAddPlayer, onDeletePlayer } = props;

  return (
    <Stack spacing="4">
      <AddPlayerInput onAddPlayer={onAddPlayer} />

      <RemovableListOfNames players={players} onDeletePlayer={onDeletePlayer} />
    </Stack>
  );
};

import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { initialPlayersNames } from '~/Players/data';

import { AddPlayerInput } from './AddPlayerInput';
import { ListOfNames } from './ListOfNames';

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

      <ListOfNames players={players} onDeletePlayer={onDeletePlayer} />
    </Stack>
  );
};

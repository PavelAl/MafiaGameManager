import { HStack, StackDivider } from '@chakra-ui/react';
import { FC } from 'react';

import { AddibleListOfNames, RemovableListOfNames } from '../ListsOfPlayers';

import { ListOfParticipantsProps } from './ListOfParticipants.types';

export const ListOfParticipants: FC<ListOfParticipantsProps> = props => {
  const { players = [], participants = [], onParticipantRemoved, onPlayerAdded } = props;

  return (
    <HStack spacing={4} divider={<StackDivider />} alignItems={'flex-start'}>
      <AddibleListOfNames label="Игроки" players={players} onAddPlayer={onPlayerAdded} />

      <RemovableListOfNames
        label="Участники"
        players={participants}
        onDeletePlayer={onParticipantRemoved}
      />
    </HStack>
  );
};

import { FC } from 'react';

import { ListOfParticipants } from '../ListOfParticipants';
import { ListOfParticipantsProps } from '../ListOfParticipants.types';

import { usePlayersListState } from '~/Players/hooks';

export const ListOfParticipantsStory: FC<ListOfParticipantsProps> = props => {
  const [players, onPlayerChanged, addPlayer, removePlayer] = usePlayersListState(props.players);
  const [participants, onParticipantChanged, addParticipant, removeParticipant] =
    usePlayersListState(props.participants);

  const onPlayerAdded = (name: string) => {
    removePlayer(name);
    addParticipant(name);
  };

  const onParticipantRemoved = (name: string) => {
    removeParticipant(name);
    addPlayer(name);
  };

  return (
    <ListOfParticipants
      participants={participants}
      players={players}
      onPlayerAdded={onPlayerAdded}
      onParticipantRemoved={onParticipantRemoved}
    />
  );
};

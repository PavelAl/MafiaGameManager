/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import { ListOfParticipants } from '../ListOfParticipants';
import { ListOfParticipantsProps } from '../ListOfParticipants.types';

import { usePlayersListState } from '~/Players/hooks';

export const ListOfParticipantsStory: FC<ListOfParticipantsProps> = props => {
  const [participants, onParticipantChanged, addParticipant, removeParticipant] =
    usePlayersListState(props.participants);

  return (
    <div style={{ height: '95vh' }}>
      <ListOfParticipants
        participants={participants}
        players={props.players}
        onParticipantAdded={addParticipant}
        onParticipantRemoved={removeParticipant}
      />
    </div>
  );
};

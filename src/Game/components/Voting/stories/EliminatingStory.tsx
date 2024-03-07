/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';

import { Eliminating } from '../Eliminating';
import { EliminatingProps } from '../Eliminating.types';

import { usePlayersListState } from '~/Players/hooks';

export const EliminatingStory: FC<EliminatingProps> = props => {
  const [eliminated, onParticipantsChanged, addEliminated, removeEliminated] = usePlayersListState(
    []
  );

  return (
    <div style={{ height: '95vh', width: 400 }}>
      <Eliminating
        label={props.label}
        participants={props.participants?.filter(player => !eliminated.includes(player))}
        eliminated={eliminated}
        onParticipantEliminated={addEliminated}
        onParticipantRestored={removeEliminated}
      />
    </div>
  );
};

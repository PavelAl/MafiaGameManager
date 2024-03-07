import { FC, useContext } from 'react';

import { GameContext } from '../Game.context';

import { Eliminating } from '~/Game/components';

export const Day: FC = () => {
  const { currentDay, currentPlayers, day } = useContext(GameContext);

  const dayEliminated = day.eliminatedRecords[currentDay]?.eliminated ?? [];

  return (
    <Eliminating
      label={`День ${currentDay}`}
      participants={currentPlayers}
      eliminated={dayEliminated}
      onParticipantEliminated={day.onAddEliminated}
      onParticipantRestored={day.onRemoveEliminated}
    />
  );
};

import { FC, useContext } from 'react';

import { GameContext } from '../Game.context';

import { Eliminating } from '~/Game/components';

export const Morning: FC = () => {
  const { currentDay, currentPlayers, morning } = useContext(GameContext);

  const morningEliminated = morning.eliminatedRecords[currentDay]?.eliminated ?? [];

  return (
    <Eliminating
      label={`Утро ${currentDay}`}
      participants={currentPlayers}
      eliminated={morningEliminated}
      onParticipantEliminated={morning.onAddEliminated}
      onParticipantRestored={morning.onRemoveEliminated}
    />
  );
};

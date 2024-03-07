import { FC } from 'react';

import { DualList } from '~/Common/components';

import { ListOfParticipantsProps } from './ListOfParticipants.types';

export const ListOfParticipants: FC<ListOfParticipantsProps> = props => {
  const { players = [], participants = [], onParticipantRemoved, onParticipantAdded } = props;

  return (
    <DualList
      leftLabel={'Игроки'}
      rightLabel={`Участники(${participants.length})`}
      left={players.filter(player => !participants.includes(player))}
      right={participants}
      onAdded={onParticipantAdded}
      onRemoved={onParticipantRemoved}
    />
  );
};

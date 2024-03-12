import { EliminatedRecord } from '~/Game/types';

import { getAllEliminated } from './getAllEliminated';

export function getCurrentPlayers(args: {
  daysRecords: EliminatedRecord;
  morningRecords: EliminatedRecord;
  participants: string[];
}) {
  const { daysRecords, morningRecords, participants } = args;

  const allEliminated = [...getAllEliminated(daysRecords), ...getAllEliminated(morningRecords)];
  const currentPlayers = participants.filter(player => !allEliminated.includes(player));

  return currentPlayers;
}

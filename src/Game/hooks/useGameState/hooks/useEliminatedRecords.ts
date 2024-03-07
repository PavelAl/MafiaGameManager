import { useState } from 'react';

import { DayRecord, EliminatedState } from '../../../types';

export const useEliminatedRecords = (currentDay: number): EliminatedState => {
  const [eliminatedRecords, setDaysRecords] = useState<Record<number, DayRecord>>({
    1: { eliminated: [] }
  });

  const todayEliminated = eliminatedRecords[currentDay]?.eliminated ?? [];

  const onAddEliminated = (name: string) => {
    if (!name || todayEliminated.some(n => n === name)) return;

    const newPlayers = [...todayEliminated, name];

    setDaysRecords(prev => ({ ...prev, [currentDay]: { eliminated: newPlayers } }));
  };

  const onRemoveEliminated = (name: string) => {
    const newPlayers = todayEliminated.filter(n => n !== name);

    setDaysRecords(prev => ({ ...prev, [currentDay]: { eliminated: newPlayers } }));
  };

  return {
    eliminatedRecords,
    onAddEliminated,
    onRemoveEliminated
  };
};

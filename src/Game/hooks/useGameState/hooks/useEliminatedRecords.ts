import { DayRecord, EliminatedState } from '../../../types';

import { useStateWithCache } from '~/Common';

export const useEliminatedRecords = (currentDay: number, key: string): EliminatedState => {
  const [eliminatedRecords, setDaysRecords] = useStateWithCache<Record<number, DayRecord>>(
    {
      1: { eliminated: [] }
    },
    key
  );

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

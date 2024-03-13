import { DayRecord, EliminatedState } from '../../../types';

import { useStateWithCache } from '~/Common';

export const useEliminatedRecords = (currentDay: number, key: string): EliminatedState => {
  const [eliminatedRecords, setRecords] = useStateWithCache<Record<number, DayRecord>>(
    { 1: { eliminated: [] } },
    key
  );

  const todayEliminated = eliminatedRecords[currentDay]?.eliminated ?? [];

  const onAddEliminated = (name: string) => {
    if (!name || todayEliminated.some(n => n === name)) return;

    const newPlayers = [...todayEliminated, name];

    setRecords(prev => ({ ...prev, [currentDay]: { eliminated: newPlayers } }));
  };

  const onRemoveEliminated = (name: string) => {
    const newPlayers = todayEliminated.filter(n => n !== name);

    setRecords(prev => ({ ...prev, [currentDay]: { eliminated: newPlayers } }));
  };

  const reset = () => {
    setRecords({ 1: { eliminated: [] } });
  };

  return {
    eliminatedRecords,
    onAddEliminated,
    onRemoveEliminated,
    reset
  };
};

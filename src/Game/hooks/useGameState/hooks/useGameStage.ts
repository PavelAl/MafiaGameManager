import { GameMode } from '../../../types';

import { useStateWithCache } from '~/Common';
import { localGameStateStorageKeys } from '~/Game/storage';

export const useGameStage = () => {
  const [currentDay, setCurrentDay] = useStateWithCache(1, localGameStateStorageKeys.currentDay);
  const [mode, setMode] = useStateWithCache<GameMode>('day', localGameStateStorageKeys.gameMode);

  const goNextStage = () => {
    if (mode === 'morning') setMode('day');
    if (mode === 'day') setMode('night');
    if (mode === 'night') {
      setCurrentDay(prev => prev + 1);
      setMode('morning');
    }
  };

  const goPreviousStage = () => {
    if (mode === 'morning') {
      setMode('night');
      setCurrentDay(prev => prev - 1);
    }
    if (mode === 'day') setMode('morning');
    if (mode === 'night') setMode('day');
  };

  const resetGameStage = () => {
    setCurrentDay(1);
    setMode('day');
  };

  return { currentDay, mode, goNextStage, goPreviousStage, resetGameStage };
};

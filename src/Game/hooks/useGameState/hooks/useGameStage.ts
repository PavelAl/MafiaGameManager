import { useState } from 'react';

import { GameMode } from '../../../types';

export const useGameStage = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [mode, setMode] = useState<GameMode>('day');

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

  return { currentDay, mode, goNextStage, goPreviousStage };
};

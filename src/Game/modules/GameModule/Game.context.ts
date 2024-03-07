import { createContext } from 'react';

import { GameState } from '../../types';

export const GameContext = createContext<GameState>({
  mode: 'morning',
  currentDay: 1,
  currentPlayers: [],
  morning: {
    eliminatedRecords: {},
    onAddEliminated: () => null,
    onRemoveEliminated: () => null
  },
  day: {
    eliminatedRecords: {},
    onAddEliminated: () => null,
    onRemoveEliminated: () => null
  },
  nightActions: [],
  updateNightAction: () => null,
  goNextStage: () => null,
  goPreviousStage: () => null
});

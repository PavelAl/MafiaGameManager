import { createContext } from 'react';

import { GameState } from '../../types';

export const GameContext = createContext<GameState>({
  mode: 'morning',
  currentDay: 1,
  rolesRegistrations: [],
  currentPlayers: [],
  morning: {
    eliminatedRecords: {},
    onAddEliminated: () => null,
    onRemoveEliminated: () => null,
    reset: () => null
  },
  day: {
    eliminatedRecords: {},
    onAddEliminated: () => null,
    onRemoveEliminated: () => null,
    reset: () => null
  },
  nightActions: [],
  updateNightAction: () => null,
  goNextStage: () => null,
  goPreviousStage: () => null
});

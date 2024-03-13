import { GameMode, EliminatedState } from '../types';

import { RoleRegistrationOption } from '~/RoleRegistration/types';

export type GameState = {
  mode: GameMode;
  currentDay: number;
  currentPlayers: string[];
  morning: EliminatedState;
  day: EliminatedState;
  nightActions: RoleRegistrationOption[];
  updateNightAction?: (option: RoleRegistrationOption) => void;
  goNextStage?: () => void;
  goPreviousStage?: () => void;
  resetGameState?: () => void;
};

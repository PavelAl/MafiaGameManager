import { localGameStateStorageKeys } from '~/Game/storage';
import { GameState } from '~/Game/types';
import { GameSettings } from '~/GameSetup';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

import { useEliminatedRecords, useNightsRecords, useGameStage } from './hooks';
import { getCurrentPlayers } from './tools';

type Args = {
  participants?: string[];
  settings?: GameSettings;
  rolesRegistrations?: RoleRegistrationOption[];
};

export const useGameState = (args: Args): GameState => {
  const { settings, participants = [], rolesRegistrations = [] } = args;

  const { currentDay, mode, goNextStage, goPreviousStage, resetGameStage } = useGameStage();

  const day = useEliminatedRecords(currentDay, localGameStateStorageKeys.dayRecords);
  const { eliminatedRecords: daysRecords, reset: resetDay } = day;

  const morning = useEliminatedRecords(currentDay, localGameStateStorageKeys.morningRecords);
  const { eliminatedRecords: morningRecords, reset: resetMorning } = morning;

  const currentPlayers = getCurrentPlayers({
    daysRecords,
    morningRecords,
    participants
  });

  const { nightActions, updateNightAction, resetNight } = useNightsRecords({
    currentDay,
    currentPlayers,
    settings
  });

  const resetGameState = () => {
    resetGameStage();
    resetDay();
    resetMorning();
    resetNight();
  };

  return {
    mode,
    currentDay,
    currentPlayers,
    day,
    morning,
    nightActions,
    rolesRegistrations,
    goNextStage,
    goPreviousStage,
    updateNightAction,
    resetGameState
  };
};

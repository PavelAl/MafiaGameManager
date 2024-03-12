import { localGameStateStorageKeys } from '~/Game/storage';
import { GameState } from '~/Game/types';
import { GameSettings } from '~/GameSetup';

import { useEliminatedRecords, useNightsRecords, useGameStage } from './hooks';
import { getCurrentPlayers } from './tools';

type Args = {
  participants?: string[];
  settings?: GameSettings;
};

export const useGameState = (args: Args): GameState => {
  const { settings, participants = [] } = args;

  const { currentDay, mode, goNextStage, goPreviousStage } = useGameStage();

  const day = useEliminatedRecords(currentDay, localGameStateStorageKeys.dayRecords);
  const { eliminatedRecords: daysRecords } = day;

  const morning = useEliminatedRecords(currentDay, localGameStateStorageKeys.morningRecords);
  const { eliminatedRecords: morningRecords } = morning;

  const currentPlayers = getCurrentPlayers({ daysRecords, morningRecords, participants });

  const { nightActions, updateNightAction } = useNightsRecords({
    currentDay,
    currentPlayers,
    settings
  });

  return {
    mode,
    currentDay,
    currentPlayers,
    day,
    morning,
    nightActions,
    goNextStage,
    goPreviousStage,
    updateNightAction
  };
};

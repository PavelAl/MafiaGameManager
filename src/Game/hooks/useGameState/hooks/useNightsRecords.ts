import { useEffect } from 'react';

import { NightRecord } from '../../../types';

import { useStateWithCache } from '~/Common';
import { localGameStateStorageKeys } from '~/Game/storage';
import { GameSettings } from '~/GameSetup';
import { gameSettingsToRegistrationOptions } from '~/RoleRegistration/tools';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

type Args = {
  currentDay: number;
  currentPlayers: string[];
  settings?: GameSettings;
};

export const useNightsRecords = (args: Args) => {
  const { currentDay, settings } = args;

  const [nightsRecords, setNightsRecords] = useStateWithCache<Record<number, NightRecord>>(
    createNewDayRecord(1, settings),
    localGameStateStorageKeys.night
  );

  const nightActions = nightsRecords[currentDay]?.results ?? [];

  useEffect(() => {
    setNightsRecords(prev => {
      if (prev[currentDay]) return prev;

      return { ...prev, ...createNewDayRecord(currentDay, settings) };
    });
  }, [currentDay]);

  useEffect(() => {
    setNightsRecords(createNewDayRecord(1, settings));
  }, [settings]);

  const updateNightAction = (updatedOption: RoleRegistrationOption): void => {
    setNightsRecords(prevState => {
      return {
        ...prevState,
        [currentDay]: {
          results:
            nightActions?.map(option => {
              return option.key === updatedOption.key ? updatedOption : option;
            }) ?? []
        }
      };
    });
  };

  const resetNight = () => {
    setNightsRecords(createNewDayRecord(1, settings));
  };

  return { nightsRecords, nightActions, updateNightAction, resetNight };
};

function createNewDayRecord(
  dayOrder: number,
  settings?: GameSettings
): Record<number, NightRecord> {
  return {
    [dayOrder]: {
      results: gameSettingsToRegistrationOptions({
        ...settings,
        players: 0,
        mafia: 1
      })
    }
  };
}

import { useEffect, useState } from 'react';

import { NightRecord } from '../../../types';

import { GameSettings } from '~/GameSetup';
import { gameSettingsToRegistrationOptions } from '~/RoleRegistration/tools';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

type Args = {
  currentDay: number;
  currentPlayers: string[];
  settings?: GameSettings;
};

export const useNightsRecords = (args: Args) => {
  const { currentDay, currentPlayers, settings } = args;

  const [nightsRecords, setNightsRecords] = useState<Record<number, NightRecord>>({
    1: {
      results: gameSettingsToRegistrationOptions({
        ...settings,
        players: currentPlayers.length,
        mafia: 1
      })
    }
  });

  const nightActions = nightsRecords[currentDay]?.results ?? [];

  useEffect(() => {
    setNightsRecords(prev => {
      if (prev[currentDay]) return prev;

      return {
        ...prev,
        [currentDay]: {
          results: gameSettingsToRegistrationOptions({
            ...settings,
            players: currentPlayers.length,
            mafia: 1
          })
        }
      };
    });
  }, [settings, currentDay]);

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

  return { nightsRecords, nightActions, updateNightAction };
};

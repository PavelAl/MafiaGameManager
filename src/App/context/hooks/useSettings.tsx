import { useEffect, useState } from 'react';

import { GameSettings } from '~/GameSetup/types';

export const useSettings = (participants: string[], initialSettings?: GameSettings) => {
  const [settings, setSettings] = useState<GameSettings>(
    initialSettings ?? { players: participants.length, mafia: 0 }
  );

  useEffect(
    () =>
      setSettings(prev => ({
        ...prev,
        players: participants.length
      })),
    [participants]
  );

  return { settings, setSettings };
};

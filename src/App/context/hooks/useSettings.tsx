import { useEffect, useState } from 'react';

import { GameSettings } from '~/GameSetup/types';

export const useSettings = (participants: string[]) => {
  const [settings, setSettings] = useState<GameSettings>({
    players: 8,
    mafia: 2,
    sheriff: true,
    boss: true,
    maniac: true
  });

  useEffect(
    () =>
      setSettings({
        players: participants.length,
        mafia: 2,
        sheriff: true,
        boss: true,
        maniac: true
      }),
    [participants]
  );

  return { settings, setSettings };
};

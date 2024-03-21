import { RoleRegistrationOption } from '../types';

import { cardsPool } from '~/Cards/data';
import { GameSettings, soloRoles } from '~/GameSetup/types';

export function gameSettingsToRegistrationOptions(
  gameSettings?: GameSettings
): RoleRegistrationOption[] {
  if (!gameSettings) return [];

  const result: RoleRegistrationOption[] = [];
  const { putana, mafia } = gameSettings;

  if (putana) result.push({ key: `putana`, label: 'Путана', player: '', role: 'putana' });

  if (mafia === 1) {
    result.push({ key: `mafia`, label: `Мафия`, player: '', role: 'mafia' });
  } else {
    for (let i = 0; i < mafia; i++) {
      result.push({ key: `mafia-${i}`, label: `Мафия ${i + 1}`, player: '', role: 'mafia' });
    }
  }

  soloRoles.forEach(role => {
    if (role !== 'citizen' && role !== 'putana' && role !== 'mafia' && gameSettings[role]) {
      const { nameRu } = cardsPool[role];

      result.push({ key: role, label: nameRu, player: '', role });
    }
  });

  return result;
}

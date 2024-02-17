import { RoleRegistrationOption } from '../types';

import { GameSettings } from '~/GameSetup/types';

export function gameSettingsToRegistrationOptions(
  gameSettings?: GameSettings
): RoleRegistrationOption[] {
  if (!gameSettings) return [];

  const result: RoleRegistrationOption[] = [];
  const { putana, mafia, boss, sheriff, doctor, maniac } = gameSettings;

  if (putana) result.push({ key: `putana`, label: 'Путана', player: '', role: 'putana' });

  for (let i = 0; i < mafia; i++) {
    result.push({
      key: `mafia-${i}`,
      label: 'Мафия',
      player: '',
      role: 'mafia'
    });
  }

  if (boss) result.push({ key: `boss`, label: 'Босс', player: '', role: 'boss' });
  if (sheriff) result.push({ key: `sheriff`, label: 'Шериф', player: '', role: 'sheriff' });
  if (doctor) result.push({ key: `doctor`, label: 'Доктор', player: '', role: 'doctor' });
  if (maniac) result.push({ key: `maniac`, label: 'Маньяк', player: '', role: 'maniac' });

  return result;
}

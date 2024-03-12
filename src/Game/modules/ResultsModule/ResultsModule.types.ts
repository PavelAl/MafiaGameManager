import { SelectOption } from '~/Common';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

export type ResultsModuleProps = {
  participants?: string[];
  rolesRegistration?: RoleRegistrationOption[];
};

export const winnerOptions: SelectOption[] = [
  { key: 'mafia', label: 'Мафия' },
  { key: 'city', label: 'Город' },
  { key: 'maniac', label: 'Маньяк' },
  { key: 'widow', label: 'Вдова' },
  { key: 'psycho', label: 'Псих' },
  { key: 'city-widow', label: 'Город, вдова' },
  { key: 'city-psycho', label: 'Город, псих' },
  { key: 'city-psycho-widow', label: 'Город, псих, вдова' }
];

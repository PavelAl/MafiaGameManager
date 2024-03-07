import { RoleRegistrationOption } from '~/RoleRegistration/types';

export type NightProps = {
  players: string[];
  currentDay: number;
  options: RoleRegistrationOption[];
  onOptionPlayerSelected?: (updatedOption: RoleRegistrationOption) => void;
};

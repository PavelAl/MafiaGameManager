import { RoleRegistrationOption } from '../../types';

export type RoleRegistrationProps = {
  options: RoleRegistrationOption[];
  players: string[];
  onOptionPlayerSelected: (updatedOption: RoleRegistrationOption) => void;
};

import { RoleRegistrationOption } from '../../types';

export type RoleRegistrationProps = {
  options: RoleRegistrationOption[];
  players: string[];
  uniqueSelections?: boolean;
  onOptionPlayerSelected?: (updatedOption: RoleRegistrationOption) => void;
};

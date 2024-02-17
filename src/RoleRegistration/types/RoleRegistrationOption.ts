import { Role } from '~/GameSetup/types';

export type RoleRegistrationOption = {
  key: string;
  label: string;
  role: Role;
  player: string;
};

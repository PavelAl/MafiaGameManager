import { Role } from '~/GameSetup/types';

export type RolesRegistrationResult = Partial<Record<Role, string>>;

export type RoleRegistrationProps = {
  roles: Role[];
  players: string[];
  result: RolesRegistrationResult;
  onRoleSelected: (record: { role: Role; player: string }) => void;
};

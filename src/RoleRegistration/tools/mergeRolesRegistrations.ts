import { RoleRegistrationOption } from '../types';

export function mergeRolesRegistrations(
  rolesRegA: RoleRegistrationOption[],
  rolesRegB: RoleRegistrationOption[]
): RoleRegistrationOption[] {
  const allRoles = rolesRegA.map(record => record.label);

  return allRoles.map(label => {
    const recordInA = rolesRegA.find(record => record.label === label) as RoleRegistrationOption;
    const recordInB = rolesRegB.find(record => record.label === label) as RoleRegistrationOption;

    return { ...recordInA, ...recordInB };
  });
}

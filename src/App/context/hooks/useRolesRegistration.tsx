import { useEffect, useState } from 'react';

import { GameSettings } from '~/GameSetup';
import { gameSettingsToRegistrationOptions } from '~/RoleRegistration/tools';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

export const useRolesRegistration = (
  settings: GameSettings,
  initial?: RoleRegistrationOption[]
) => {
  const [rolesRegistration, setRolesRegistration] = useState<RoleRegistrationOption[]>(
    initial ?? gameSettingsToRegistrationOptions(settings)
  );

  useEffect(() => {
    setRolesRegistration(gameSettingsToRegistrationOptions(settings));
  }, [settings]);

  const updateRoleRegistration = (updatedOption: RoleRegistrationOption): void => {
    setRolesRegistration(prevState =>
      prevState.map(option => {
        return option.key === updatedOption.key ? updatedOption : option;
      })
    );
  };

  return { rolesRegistration, updateRoleRegistration };
};

import { useEffect, useState } from 'react';

import { GameSettings } from '~/GameSetup';
import {
  gameSettingsToRegistrationOptions,
  mergeRolesRegistrations
} from '~/RoleRegistration/tools';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

export const useRolesRegistration = (
  settings: GameSettings,
  initial?: RoleRegistrationOption[]
) => {
  const [rolesRegistration, setRolesRegistration] = useState<RoleRegistrationOption[]>(
    initial ?? gameSettingsToRegistrationOptions(settings)
  );

  useEffect(() => {
    const clearRegistration = gameSettingsToRegistrationOptions(settings);

    setRolesRegistration(
      initial ? mergeRolesRegistrations(clearRegistration, initial) : clearRegistration
    );
  }, [settings, initial]);

  const updateRoleRegistration = (updatedOption: RoleRegistrationOption): void => {
    setRolesRegistration(prevState =>
      prevState.map(option => {
        return option.key === updatedOption.key ? updatedOption : option;
      })
    );
  };

  const resetRolesRegistration = () => {
    setRolesRegistration(gameSettingsToRegistrationOptions(settings));
  };

  return { rolesRegistration, updateRoleRegistration, resetRolesRegistration };
};

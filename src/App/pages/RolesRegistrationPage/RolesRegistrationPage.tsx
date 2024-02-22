import { Stack } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { useAppContext } from '../../context';

import { appPaths } from '~/App/appPaths';
import { LinkButton } from '~/Common';
import { RoleRegistration } from '~/RoleRegistration/components/RoleRegistration';
import { gameSettingsToRegistrationOptions } from '~/RoleRegistration/tools';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

export const RolesRegistrationPage: FC = () => {
  const { settings, participants = [] } = useAppContext();

  const [rolesRegistration, setRolesRegistration] = useState<RoleRegistrationOption[]>(
    gameSettingsToRegistrationOptions(settings)
  );

  const updateOption = (updatedOption: RoleRegistrationOption): void => {
    setRolesRegistration(prevState =>
      prevState.map(option => {
        return option.key === updatedOption.key ? updatedOption : option;
      })
    );
  };

  return (
    <Stack spacing={6}>
      <RoleRegistration
        options={rolesRegistration}
        players={participants}
        onOptionPlayerSelected={updateOption}
      />

      <LinkButton to={appPaths.day} label="Начать игру" />
    </Stack>
  );
};

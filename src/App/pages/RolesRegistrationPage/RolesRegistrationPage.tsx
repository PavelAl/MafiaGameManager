import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { useAppContext } from '../../context';

import { appPaths } from '~/App/appPaths';
import { LinkButton } from '~/Common';
import { RoleRegistration } from '~/RoleRegistration/components';

export const RolesRegistrationPage: FC = () => {
  const { participants = [], rolesRegistration = [], updateRoleRegistration } = useAppContext();

  return (
    <Stack spacing={6}>
      <RoleRegistration
        options={rolesRegistration}
        players={participants}
        onOptionPlayerSelected={updateRoleRegistration}
      />

      <LinkButton to={appPaths.game} label="Начать игру" />
    </Stack>
  );
};

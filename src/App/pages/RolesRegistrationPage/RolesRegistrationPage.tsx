import { Stack } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { appPaths } from '~/App/appPaths';
import { useAppContext } from '~/AppContext';
import { LinkButton } from '~/Common';
import { GameSettings, Role } from '~/GameSetup';
import { RoleRegistration } from '~/RoleRegistration/components/RoleRegistration';
import { gameSettingsToRegistrationOptions } from '~/RoleRegistration/tools';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

export const RolesRegistrationPage: FC = () => {
  const { settings, participants = [] } = useAppContext();

  const [options, setOptions] = useState<RoleRegistrationOption[]>(
    gameSettingsToRegistrationOptions(settings)
  );

  const updateOption = (updatedOption: RoleRegistrationOption): void => {
    setOptions(prevState =>
      prevState.map(option => {
        return option.key === updatedOption.key ? updatedOption : option;
      })
    );
  };

  return (
    <Stack spacing={6}>
      <RoleRegistration
        options={options}
        players={participants}
        onOptionPlayerSelected={updateOption}
      />

      <LinkButton to={appPaths.day} label="Начать игру" />
    </Stack>
  );
};

function settingsToRolesList(settings?: GameSettings): Role[] {
  if (!settings) return [];

  const result: Role[] = [];

  if (settings.sheriff) result.push('sheriff');
  if (settings.boss) result.push('boss');
  if (settings.maniac) result.push('maniac');
  if (settings.putana) result.push('putana');
  if (settings.doctor) result.push('doctor');

  for (let i = 0; i < settings.mafia; i++) {
    result.push('mafia-' + i);
  }

  return result;
}

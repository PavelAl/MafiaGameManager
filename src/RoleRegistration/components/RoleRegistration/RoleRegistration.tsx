import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { RoleRegistrationInput } from '../RoleRegistrationInput';

import { rolesDescriptions } from '~/GameSetup';

import { RoleRegistrationProps } from './RoleRegistration.types';

export const RoleRegistration: FC<RoleRegistrationProps> = props => {
  const { roles, players, result, onRoleSelected } = props;

  const selectedPlayers = Object.values(result);

  return (
    <Stack spacing={8}>
      {roles.map(role => {
        const selected = result[role];

        return (
          <RoleRegistrationInput
            key={role}
            label={rolesDescriptions[role].name}
            players={players.filter(player => selected || !selectedPlayers.includes(player))}
            selectedPlayer={selected}
            onPlayerSelected={player => onRoleSelected({ role, player })}
          />
        );
      })}
    </Stack>
  );
};

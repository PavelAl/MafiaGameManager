import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { RoleRegistrationInput } from '../RoleRegistrationInput';

import { RoleRegistrationProps } from './RoleRegistration.types';

const RoleRegistrationModule: FC<RoleRegistrationProps> = props => {
  const { options, players, onOptionPlayerSelected } = props;

  const selectedPlayers = options.map(({ player }) => player);
  const availablePlayers = players.filter(player => !selectedPlayers.includes(player));

  return (
    <Stack spacing={8}>
      {options.map(option => {
        const { key, label, player } = option;

        return (
          <RoleRegistrationInput
            key={key}
            label={label}
            players={[player, ...availablePlayers]}
            selectedPlayer={player}
            onPlayerSelected={newPlayer => onOptionPlayerSelected({ ...option, player: newPlayer })}
          />
        );
      })}
    </Stack>
  );
};

export { RoleRegistrationModule as RoleRegistration };

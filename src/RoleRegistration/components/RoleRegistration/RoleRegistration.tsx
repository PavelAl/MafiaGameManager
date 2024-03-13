import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { RoleRegistrationInput } from '../RoleRegistrationInput';

import { RoleRegistrationProps } from './RoleRegistration.types';

export const RoleRegistration: FC<RoleRegistrationProps> = props => {
  const { options, players, uniqueSelections = true, onOptionPlayerSelected } = props;

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
            players={uniqueSelections ? [player, ...availablePlayers] : players}
            selectedPlayer={player}
            onPlayerSelected={newPlayer =>
              onOptionPlayerSelected?.({ ...option, player: newPlayer })
            }
          />
        );
      })}
    </Stack>
  );
};

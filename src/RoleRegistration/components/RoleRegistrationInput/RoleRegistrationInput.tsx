import { HStack, IconButton, Select, Stack, Text } from '@chakra-ui/react';
import { Clear } from '@mui/icons-material';
import { FC } from 'react';

import { RoleRegistrationInputProps } from './RoleRegistrationInput.types';

export const RoleRegistrationInput: FC<RoleRegistrationInputProps> = props => {
  const { label, selectedPlayer, players, onPlayerSelected } = props;

  return (
    <Stack>
      <Text fontSize="16" fontWeight={600}>
        {label}
      </Text>

      <HStack spacing={4}>
        <Select
          defaultValue={''}
          value={selectedPlayer}
          size="sm"
          onChange={e => onPlayerSelected(e.target.value)}
        >
          <option value="" disabled hidden>
            {'Выберите игрока'}
          </option>

          {players.map(player => (
            <option key={player} value={player}>
              {player}
            </option>
          ))}
        </Select>

        <IconButton
          variant="link"
          colorScheme="teal"
          aria-label="Add player"
          icon={<Clear />}
          onClick={() => onPlayerSelected('')}
        />
      </HStack>
    </Stack>
  );
};

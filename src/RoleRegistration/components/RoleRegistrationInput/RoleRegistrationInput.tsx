import { HStack, IconButton, Text } from '@chakra-ui/react';
import { Clear } from '@mui/icons-material';
import { FC } from 'react';

import { Select } from '~/Common';

import { RoleRegistrationInputProps } from './RoleRegistrationInput.types';

export const RoleRegistrationInput: FC<RoleRegistrationInputProps> = props => {
  const { label, selectedPlayer = '', players, onPlayerSelected } = props;

  return (
    <HStack spacing={4}>
      <Text fontSize="16" fontWeight={600} width={`100px`}>
        {label}
      </Text>

      <Select
        placeholder="Выберите игрока"
        selectedKey={selectedPlayer}
        options={players.map(player => ({ key: player, label: player }))}
        onOptionSelected={onPlayerSelected}
      />

      <IconButton
        variant="link"
        colorScheme="teal"
        aria-label="Add player"
        icon={<Clear />}
        onClick={() => onPlayerSelected('')}
      />
    </HStack>
  );
};

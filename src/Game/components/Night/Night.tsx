import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { RoleRegistration } from '~/RoleRegistration/components';

import { NightProps } from './Night.types';

export const Night: FC<NightProps> = props => {
  const { players, currentDay, options, onOptionPlayerSelected } = props;

  return (
    <Stack spacing={8} align={'center'} width={'100%'}>
      <Text fontSize="20" fontWeight={600} align={'center'}>
        Ночь {currentDay}
      </Text>

      <RoleRegistration
        options={options}
        players={players}
        uniqueSelections={false}
        onOptionPlayerSelected={onOptionPlayerSelected}
      />
    </Stack>
  );
};

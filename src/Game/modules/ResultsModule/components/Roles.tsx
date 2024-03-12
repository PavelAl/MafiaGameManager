import { SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { RoleRegistrationOption } from '~/RoleRegistration/types';

type Props = { rolesRegistration?: RoleRegistrationOption[] };

export const Roles: FC<Props> = props => {
  const { rolesRegistration } = props;

  return (
    <Stack spacing={3}>
      <Text fontSize={20} fontWeight={600}>
        Роли
      </Text>

      <SimpleGrid columns={2} spacing={2} border={'1px solid'} p={[1, 2]}>
        {rolesRegistration?.map(({ key, player, label }) => (
          <>
            <Text key={key} fontSize={14} fontWeight={800}>
              {player}
            </Text>

            <Text key={key} fontSize={14} fontWeight={400}>
              {label}
            </Text>
          </>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

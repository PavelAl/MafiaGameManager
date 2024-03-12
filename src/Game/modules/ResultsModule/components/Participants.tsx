import { SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

type ParticipantsProps = {
  participants: string[];
};

export const Participants: FC<ParticipantsProps> = props => {
  const { participants } = props;

  return (
    <Stack spacing={3}>
      <Text fontSize={20} fontWeight={600}>
        Участники
      </Text>

      <SimpleGrid columns={2} spacing={2} border={'1px solid'} p={[1, 2]}>
        {participants?.map(player => (
          <Text key={player} fontSize={14} fontWeight={400}>
            {player}
          </Text>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

import { HStack, IconButton, Text } from '@chakra-ui/react';
import { Remove } from '@mui/icons-material';
import { FC } from 'react';

export const PlayerRecord: FC<{ name: string; onDelete?: () => void }> = props => {
  const { name, onDelete } = props;

  return (
    <HStack alignItems={'center'} justifyContent={'space-between'} spacing={3} width={200}>
      <Text p="2" fontSize="sm">
        {name}
      </Text>

      <IconButton
        variant="link"
        colorScheme="teal"
        aria-label="Send email"
        icon={<Remove />}
        onClick={onDelete}
      />
    </HStack>
  );
};

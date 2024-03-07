import { Text } from '@chakra-ui/react';
import { FC } from 'react';

export const ListLabel: FC<{ label: string }> = props => {
  const { label } = props;

  return (
    <Text fontSize="20" fontWeight={600} align={'center'}>
      {label}
    </Text>
  );
};

import { Stack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export const ListOfPlayersStack: FC<{ children: ReactNode }> = props => {
  const { children } = props;

  const listMinWidth = 100;

  return (
    <Stack spacing="0" minWidth={listMinWidth} flex={1} overflow={'auto'} height={'100%'}>
      {children}
    </Stack>
  );
};

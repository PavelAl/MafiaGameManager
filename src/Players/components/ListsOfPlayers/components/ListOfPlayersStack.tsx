import { Stack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export const ListOfPlayersStack: FC<{ children: ReactNode }> = props => {
  const { children } = props;

  const listMinWidth = 100;
  // const listMaxWidth = 150;

  return (
    <Stack spacing="1" minWidth={listMinWidth} flex={1}>
      {children}
    </Stack>
  );
};

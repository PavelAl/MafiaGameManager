import { Stack, StackDivider } from '@chakra-ui/react';
import { FC } from 'react';

import { PlayerRecord } from './PlayerRecord';

type Props = {
  players: string[];
  onDeletePlayer?: (name: string) => void;
};

export const ListOfNames: FC<Props> = props => {
  const { players, onDeletePlayer } = props;

  return (
    <Stack divider={<StackDivider />} spacing="1">
      {players.map(player => (
        <PlayerRecord key={player} name={player} onDelete={() => onDeletePlayer?.(player)} />
      ))}
    </Stack>
  );
};

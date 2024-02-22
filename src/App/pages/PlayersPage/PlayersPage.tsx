import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { useAppContext } from '../../context';

import { LinkButton } from '~/Common';
import { PlayersList } from '~/Players/components';

export type PlayersPageProps = {
  backUrl: string;
};

export const PlayersPage: FC<PlayersPageProps> = props => {
  const { players, setPlayers } = useAppContext();

  return (
    <Stack spacing={4}>
      <LinkButton to={props.backUrl} label="Назад" />

      <PlayersList players={players} onPlayersChanged={setPlayers} />
    </Stack>
  );
};

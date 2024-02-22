import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { useAppContext } from '../../context';

import { appPaths } from '~/App/appPaths';
import { LinkButton } from '~/Common';

export const MainMenu: FC = () => {
  const { participants } = useAppContext();

  return (
    <Stack spacing={8} alignItems={'center'}>
      <LinkButton to={appPaths.players} label={'Список игроков'} />

      <LinkButton to={appPaths.participants} label={`Участники(${participants?.length})`} />

      <LinkButton to={appPaths.settings} label={`Настройки ролей`} />

      <LinkButton to={appPaths.cardsDealing} label={'Начать игру'} />
    </Stack>
  );
};

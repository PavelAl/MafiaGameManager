import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { useAppContext } from '../../context';

import { appPaths } from '~/App/appPaths';
import { LinkButton } from '~/Common';
import { ResultsModule } from '~/Game/modules/ResultsModule';
import { resetGameStorage } from '~/Game/storage';

export const ResultsPage: FC = () => {
  const { participants, rolesRegistration, startNewGame } = useAppContext();

  const onStartNewGame = () => {
    startNewGame?.();
    resetGameStorage();
  };

  return (
    <Stack spacing={8} alignItems={'center'}>
      <LinkButton to={appPaths.root} label={'Новая игра'} onClick={onStartNewGame} />

      <ResultsModule participants={participants} rolesRegistration={rolesRegistration} />
    </Stack>
  );
};

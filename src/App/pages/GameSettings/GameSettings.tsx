import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { useAppContext } from '../../context';

import { LinkButton } from '~/Common';
import { GameSetup } from '~/GameSetup';

type Props = {
  backUrl: string;
};

export const GameSettings: FC<Props> = ({ backUrl }) => {
  const { settings, setSettings } = useAppContext();

  return (
    <Stack spacing={8} alignItems={'center'}>
      <GameSetup settings={settings} onChange={setSettings} />

      <LinkButton to={backUrl} label={'Готово'} />
    </Stack>
  );
};

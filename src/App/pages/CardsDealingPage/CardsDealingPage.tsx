import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../../context';

import { appPaths } from '~/App/appPaths';
import { CardsDealingModule } from '~/Cards/modules';
import { PlayersGetReadyModule } from '~/Game/modules';
import { GameSettings } from '~/GameSetup/types';

type PageStage = 'prepare' | 'dealing';

export const CardsDealingPage: FC = () => {
  const { settings } = useAppContext();

  const navigate = useNavigate();

  const [stage, setStage] = useState<PageStage>('prepare');
  const onStart = () => setStage('dealing');

  switch (stage) {
    case 'dealing':
      return (
        <CardsDealingModule
          gameSettings={settings as GameSettings}
          onFinish={() => navigate(appPaths.rolesRegistration)}
        />
      );
    case 'prepare':
      return <PlayersGetReadyModule onStart={onStart} />;
  }
};

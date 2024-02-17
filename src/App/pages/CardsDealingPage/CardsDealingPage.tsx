import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { appPaths } from '~/App/appPaths';
import { useAppContext } from '~/AppContext';
import { CardsDealingPage } from '~/Cards/pages';
import { PlayersGetReadyModule } from '~/Game/modules';
import { GameSettings } from '~/GameSetup/types';

type PageStage = 'prepare' | 'dealing';

export const AppCardsDealingPage: FC = () => {
  const { settings } = useAppContext();

  const navigate = useNavigate();

  const [stage, setStage] = useState<PageStage>('prepare');
  const onStart = () => setStage('dealing');

  switch (stage) {
    case 'dealing':
      return (
        <CardsDealingPage
          gameSettings={settings as GameSettings}
          onFinish={() => navigate(appPaths.rolesRegistration)}
        />
      );
    case 'prepare':
      return <PlayersGetReadyModule onStart={onStart} />;
  }
};

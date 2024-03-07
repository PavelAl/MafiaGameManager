import { Stack } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { useAppContext } from '../../context';

import { GameModule } from '~/Game/modules';
import { RoleRegistration } from '~/RoleRegistration/components';

import { GamePageToolbar } from './components';
import { PageMode } from './PageMode';

export const GamePage: FC = () => {
  const {
    gameState,
    participants = [],
    rolesRegistration = [],
    updateRoleRegistration
  } = useAppContext();

  const [pageMode, setPageMode] = useState<PageMode>('game');

  return (
    <Stack spacing={6}>
      <GamePageToolbar
        pageMode={pageMode}
        onSeeRoles={() => setPageMode('roles')}
        onReturnToGame={() => setPageMode('game')}
      />

      {pageMode === 'roles' && (
        <RoleRegistration
          options={rolesRegistration}
          players={participants}
          onOptionPlayerSelected={updateRoleRegistration}
        />
      )}

      {pageMode === 'game' && gameState && <GameModule {...gameState} />}
    </Stack>
  );
};

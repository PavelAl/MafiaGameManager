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
    rolesRegistrations = [],
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
          options={rolesRegistrations}
          players={participants}
          onOptionPlayerSelected={updateRoleRegistration}
        />
      )}

      {pageMode === 'game' && gameState && (
        <GameModule {...gameState} rolesRegistrations={rolesRegistrations} />
      )}
    </Stack>
  );
};

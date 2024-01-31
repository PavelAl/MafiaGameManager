import { FC, useState } from 'react';

import { RoleRegistration } from '../RoleRegistration';
import { RolesRegistrationResult } from '../RoleRegistration.types';

import { rolesList } from '~/GameSetup';
import { initialPlayersNames } from '~/Players';

export const RoleRegistrationStory: FC = () => {
  const [result, setResult] = useState<RolesRegistrationResult>({});

  return (
    <RoleRegistration
      roles={rolesList}
      players={initialPlayersNames.slice(0, 12)}
      result={result}
      onRoleSelected={record => {
        setResult(prev => ({ ...prev, [record.role]: record.player }));
      }}
    />
  );
};

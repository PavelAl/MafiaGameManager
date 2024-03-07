import { HStack, IconButton } from '@chakra-ui/react';
import { ArrowBack, Groups } from '@mui/icons-material';
import { FC } from 'react';

import { PageMode } from '../PageMode';

import { appPaths } from '~/App/appPaths';
import { LinkButton } from '~/Common';

interface ToolbarProps {
  pageMode?: PageMode;
  onSeeRoles: () => void;
  onReturnToGame: () => void;
}

export const GamePageToolbar: FC<ToolbarProps> = props => {
  const { pageMode, onSeeRoles, onReturnToGame } = props;

  return (
    <HStack justifyContent={'space-between'} width={'100%'}>
      {pageMode === 'roles' ? (
        <IconButton aria-label="Back" icon={<ArrowBack />} onClick={onReturnToGame} />
      ) : (
        <div style={{ width: 64 }} />
      )}

      <LinkButton to={appPaths.game} label="Подвести итоги" />

      {pageMode === 'game' ? (
        <IconButton aria-label="Roles" icon={<Groups />} onClick={onSeeRoles} />
      ) : (
        <div style={{ width: 64 }} />
      )}
    </HStack>
  );
};

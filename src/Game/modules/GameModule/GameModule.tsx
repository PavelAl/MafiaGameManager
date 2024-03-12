import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { ConnectedNight, Day, Morning, Toolbar } from './contextComponents';
import { GameContext } from './Game.context';
import { GameModuleProps } from './GameModule.types';

export const GameModule: FC<GameModuleProps> = props => {
  const { mode } = props;

  return (
    <Stack spacing={10} align={'flex-end'}>
      <GameContext.Provider value={props}>
        {mode === 'morning' && <Morning />}

        {mode === 'day' && <Day />}

        {mode === 'night' && <ConnectedNight />}

        <Toolbar />
      </GameContext.Provider>
    </Stack>
  );
};

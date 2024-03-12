import { Stack, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { ChooseWinner, Participants, Roles } from './components';
import { ResultsModuleProps, winnerOptions } from './ResultsModule.types';

type Mode = 'choose-winner' | 'show-results';

export const ResultsModule: FC<ResultsModuleProps> = props => {
  const { participants = [], rolesRegistration } = props;

  const [winner, setWinner] = useState('');
  const [mode, setMode] = useState<Mode>('choose-winner');

  const showResults = () => setMode('show-results');

  return (
    <div>
      {mode === 'choose-winner' && (
        <ChooseWinner winner={winner} onWinnerChange={setWinner} onApprove={showResults} />
      )}

      {mode === 'show-results' && (
        <Stack spacing={5}>
          <Text fontSize={20} fontWeight={600}>
            Победа: {winnerOptions.find(option => option.key === winner)?.label ?? ''}
          </Text>

          <Roles rolesRegistration={rolesRegistration} />

          <Participants participants={participants} />
        </Stack>
      )}
    </div>
  );
};

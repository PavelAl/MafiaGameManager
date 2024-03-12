import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { winnerOptions } from '../ResultsModule.types';

import { Select } from '~/Common';

type Props = {
  winner: string;
  onWinnerChange: (winner: string) => void;
  onApprove: () => void;
};

export const ChooseWinner: FC<Props> = props => {
  const { winner, onWinnerChange, onApprove } = props;

  return (
    <Stack spacing={10}>
      <Select
        placeholder="Выберите победителя"
        options={winnerOptions}
        selectedKey={winner}
        onOptionSelected={onWinnerChange}
      />

      <Button colorScheme={'blue'} onClick={onApprove}>
        Подтвердить
      </Button>
    </Stack>
  );
};

import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Timer } from '../Timer';

import { DualList } from '~/Common/components';

import { EliminatingProps } from './Eliminating.types';

export const Eliminating: FC<EliminatingProps> = props => {
  const { label, participants, eliminated, onParticipantEliminated, onParticipantRestored } = props;

  return (
    <Stack spacing={8} align={'center'} width={'100%'}>
      {label && (
        <Text fontSize="20" fontWeight={600} align={'center'}>
          {label}
        </Text>
      )}

      <Timer />

      <DualList
        leftLabel={'Участники'}
        rightLabel={'Выбывшие'}
        left={participants}
        right={eliminated}
        onAdded={onParticipantEliminated}
        onRemoved={onParticipantRestored}
      />
    </Stack>
  );
};

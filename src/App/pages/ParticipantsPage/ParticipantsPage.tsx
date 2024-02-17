import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { useAppContext } from '~/AppContext';
import { LinkButton } from '~/Common';
import { ListOfParticipants } from '~/Players/components';

export type ParticipantsPageProps = {
  backUrl: string;
};

export const ParticipantsPage: FC<ParticipantsPageProps> = props => {
  const { players, participants, addParticipant, removeParticipant } = useAppContext();

  return (
    <Stack spacing={4}>
      <LinkButton to={props.backUrl} label="Назад" />

      <ListOfParticipants
        players={players}
        participants={participants}
        onParticipantAdded={addParticipant}
        onParticipantRemoved={removeParticipant}
      />
    </Stack>
  );
};

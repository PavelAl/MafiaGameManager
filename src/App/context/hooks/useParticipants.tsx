import { useEffect } from 'react';

import { usePlayersListState } from '~/Players/hooks';

export const useParticipants = (players: string[], initial?: string[]) => {
  const [participants, setParticipants, addParticipant, removeParticipant] =
    usePlayersListState(initial);

  useEffect(() => {
    const relevantParticipants = participants.filter(player => players.includes(player));

    if (relevantParticipants.length !== participants.length) {
      setParticipants(relevantParticipants);
    }
  }, [players]);

  return { participants, setParticipants, addParticipant, removeParticipant };
};

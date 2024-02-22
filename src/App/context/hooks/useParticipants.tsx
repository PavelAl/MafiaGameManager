import { useEffect } from 'react';

import { usePlayersListState } from '~/Players/hooks';

export const useParticipants = (players: string[]) => {
  const [participants, setParticipants, addParticipant, removeParticipant] = usePlayersListState([
    'Gensh',
    'Reunion',
    'Roxi',
    'Sarochka',
    'Shandy',
    'Sidorovich',
    'Алико',
    'Аня'
  ]);

  useEffect(() => {
    const relevantParticipants = participants.filter(player => players.includes(player));

    if (relevantParticipants.length !== participants.length) {
      setParticipants(relevantParticipants);
    }
  }, [players]);

  return { participants, setParticipants, addParticipant, removeParticipant };
};

import { useState } from 'react';

import { usePlayersList } from './usePlayersList';

type Output = [string[], (names: string[]) => void, (name: string) => void, (name: string) => void];

export const usePlayersListState = (initialValue: string[] = []): Output => {
  const [players, setPlayers] = useState(initialValue);

  const onPlayersChanged = (players: string[]) => {
    setPlayers(players.sort());
  };

  const { onAddPlayer, onRemovePlayer } = usePlayersList({ players, onPlayersChanged });

  return [players, onPlayersChanged, onAddPlayer, onRemovePlayer];
};

import { useState } from 'react';

import { GameSettings } from './GameSetup';
import { initialPlayersNames } from './Players';
import { usePlayersListState } from './Players/hooks';

export type PlayersContextValue = {
  players?: string[];
  participants?: string[];
  nextPath?: string;
  settings?: GameSettings;
  setSettings?: (settings: GameSettings) => void;
  setPlayers?: (players: string[]) => void;
  setParticipants?: (players: string[]) => void;
  addParticipant?: (players: string) => void;
  removeParticipant?: (players: string) => void;
  setNextPath?: (path: string) => void;
};

const initialPlayers = initialPlayersNames;

export const useCreatePlayersContextValue = (): PlayersContextValue => {
  const [settings, setSettings] = useState<GameSettings>({
    players: 8,
    mafia: 2,
    sheriff: true,
    boss: true,
    maniac: true
  });
  const onParticipantsChanged = (newParticipants: string[]) =>
    setSettings(prevState => ({ ...prevState, players: newParticipants.length }));

  const [participants, setParticipants, addParticipant, removeParticipant] = usePlayersListState(
    ['Gensh', 'Reunion', 'Roxi', 'Sarochka', 'Shandy', 'Sidorovich', 'Алико', 'Аня'],
    onParticipantsChanged
  );
  const resetParticipants = () => setParticipants([]);

  const [players] = usePlayersListState(initialPlayers, resetParticipants);

  const [nextPath, setNextPath] = useState<string | undefined>();

  console.log(participants);
  console.log(settings);

  return {
    players,
    participants,
    settings,
    nextPath,
    setSettings,
    setPlayers: resetParticipants,
    setParticipants: onParticipantsChanged,
    addParticipant,
    removeParticipant,
    setNextPath
  };
};

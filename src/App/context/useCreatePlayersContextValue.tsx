import { useEffect, useState } from 'react';

import { useGameState } from '~/Game/hooks';
import { initialPlayersNames } from '~/Players/data';
import { usePlayersListState } from '~/Players/hooks';

import { AppContextValue } from './AppContextValue';
import { useParticipants, useRolesRegistration, useSettings } from './hooks';

const initialPlayers = initialPlayersNames;

export const useCreateAppContextValue = (): AppContextValue => {
  const [players, setPlayers] = usePlayersListState(initialPlayers);

  const { participants, setParticipants, addParticipant, removeParticipant } =
    useParticipants(players);

  const { settings, setSettings } = useSettings(participants);

  const { rolesRegistration, updateRoleRegistration } = useRolesRegistration(settings);

  const gameState = useGameState({ settings, participants });

  const [] = useState(() => {
    console.log('players', JSON.parse(localStorage.getItem('players') ?? ''));
    console.log('participants', JSON.parse(localStorage.getItem('participants') ?? ''));
    console.log('settings', JSON.parse(localStorage.getItem('settings') ?? ''));
    console.log('rolesRegistration', JSON.parse(localStorage.getItem('rolesRegistration') ?? ''));
    console.log('gameState', JSON.parse(localStorage.getItem('gameState') ?? ''));
  });

  useEffect(() => {}, []);

  useEffect(() => {
    console.log('saving');

    localStorage.setItem('players', JSON.stringify(players));
    localStorage.setItem('participants', JSON.stringify(participants));
    localStorage.setItem('settings', JSON.stringify(settings));
    console.log(JSON.parse(localStorage.getItem('settings') ?? ''));
    localStorage.setItem('rolesRegistration', JSON.stringify(rolesRegistration));
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }, [players, participants, settings, rolesRegistration, gameState]);

  return {
    players,
    participants,
    settings,
    rolesRegistration,
    gameState,
    setSettings,
    setPlayers,
    setParticipants,
    addParticipant,
    removeParticipant,
    updateRoleRegistration
  };
};

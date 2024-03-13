import { useEffect, useState } from 'react';

import { useGameState } from '~/Game/hooks';
import { GameSettings } from '~/GameSetup';
import { usePlayersListState } from '~/Players/hooks';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

import { AppContextValue } from './AppContextValue';
import { useParticipants, useRolesRegistration, useSettings } from './hooks';

export type InitialContextValue = {
  initialPlayers?: string[];
  initialParticipants?: string[];
  initialSettings?: GameSettings;
  initialRolesRegistration?: RoleRegistrationOption[];
};

export const useCreateAppContextValue = (args: InitialContextValue): AppContextValue => {
  const { initialPlayers, initialParticipants, initialSettings, initialRolesRegistration } = args;

  const [players, setPlayers] = usePlayersListState(initialPlayers);

  const { participants, setParticipants, addParticipant, removeParticipant } = useParticipants(
    players,
    initialParticipants
  );

  const { settings, setSettings } = useSettings(participants, initialSettings);

  const { rolesRegistration, updateRoleRegistration, resetRolesRegistration } =
    useRolesRegistration(settings, initialRolesRegistration);

  const gameState = useGameState({ settings, participants });

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
    localStorage.setItem('participants', JSON.stringify(participants));
    localStorage.setItem('settings', JSON.stringify(settings));
    localStorage.setItem('rolesRegistration', JSON.stringify(rolesRegistration));
  }, [players, participants, settings, rolesRegistration, gameState]);

  const startNewGame = () => {
    resetRolesRegistration();
    gameState.resetGameState?.();
  };

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
    updateRoleRegistration,
    startNewGame
  };
};

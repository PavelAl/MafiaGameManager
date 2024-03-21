import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { appPaths } from './App/appPaths';
import { AppContext, InitialContextValue, useCreateAppContextValue } from './App/context';
import {
  GameSettings,
  MainMenu,
  ParticipantsPage,
  PlayersPage,
  CardsDealingPage,
  RolesRegistrationPage,
  GamePage,
  ResultsPage
} from './App/pages';
import { localGameStateStorageKeys } from './Game/storage';

const initial: InitialContextValue = {
  initialPlayers: JSON.parse(localStorage.getItem('players') ?? '[]'),
  initialParticipants: JSON.parse(localStorage.getItem('participants') ?? '[]'),
  initialSettings: JSON.parse(localStorage.getItem('settings') ?? '{}'),
  initialRolesRegistration: JSON.parse(
    localStorage.getItem(localGameStateStorageKeys.rolesRegistration) ?? '[]'
  )
};

export function App() {
  const contextValue = useCreateAppContextValue(initial);

  const { players, participants, settings, rolesRegistrations, gameState } = contextValue;

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
    localStorage.setItem('participants', JSON.stringify(participants));
    localStorage.setItem('settings', JSON.stringify(settings));
    localStorage.setItem(
      localGameStateStorageKeys.rolesRegistration,
      JSON.stringify(rolesRegistrations)
    );
  }, [players, participants, settings, rolesRegistrations, gameState]);

  return (
    <Box padding={'20px 0'} maxWidth={430} margin={'auto'}>
      <AppContext.Provider value={contextValue}>
        <Routes>
          <Route path={appPaths.root} element={<MainMenu />} />

          <Route path={appPaths.players} element={<PlayersPage backUrl={appPaths.root} />} />

          <Route
            path={appPaths.participants}
            element={<ParticipantsPage backUrl={appPaths.root} />}
          />

          <Route path={appPaths.settings} element={<GameSettings backUrl={appPaths.root} />} />

          <Route path={appPaths.cardsDealing} element={<CardsDealingPage />} />

          <Route path={appPaths.rolesRegistration} element={<RolesRegistrationPage />} />

          <Route path={appPaths.game} element={<GamePage />} />

          <Route path={appPaths.results} element={<ResultsPage />} />
        </Routes>
      </AppContext.Provider>
    </Box>
  );
}

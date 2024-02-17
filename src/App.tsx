import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { appPaths } from './App/appPaths';
import {
  GameSettings,
  MainMenu,
  ParticipantsPage,
  PlayersPage,
  AppCardsDealingPage,
  RolesRegistrationPage
} from './App/pages';
import { AppContext } from './AppContext';
import { useCreatePlayersContextValue } from './useCreatePlayersContextValue';

import './App.css';

export function App() {
  const contextValue = useCreatePlayersContextValue();

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

          <Route path={appPaths.cardsDealing} element={<AppCardsDealingPage />} />

          <Route path={appPaths.rolesRegistration} element={<RolesRegistrationPage />} />
        </Routes>
      </AppContext.Provider>
    </Box>
  );
}

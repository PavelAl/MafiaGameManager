import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { appPaths } from './App/appPaths';
import { AppContext, useCreateAppContextValue } from './App/context';
import {
  GameSettings,
  MainMenu,
  ParticipantsPage,
  PlayersPage,
  CardsDealingPage,
  RolesRegistrationPage,
  GamePage
} from './App/pages';

import './App.css';

export function App() {
  const contextValue = useCreateAppContextValue();

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
        </Routes>
      </AppContext.Provider>
    </Box>
  );
}

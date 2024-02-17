import { createContext, useContext } from 'react';

import { PlayersContextValue } from './useCreatePlayersContextValue';

type AppContextValue = PlayersContextValue;

export const AppContext = createContext<AppContextValue>({});

export const useAppContext = () => {
  return useContext(AppContext);
};

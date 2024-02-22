import { createContext, useContext } from 'react';

import { AppContextValue } from './AppContextValue';

export const AppContext = createContext<AppContextValue>({});

export const useAppContext = () => {
  return useContext(AppContext);
};

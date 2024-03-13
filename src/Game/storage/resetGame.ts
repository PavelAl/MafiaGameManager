import { localGameStateStorageKeys } from './localGameStateStorageKeys';

export function resetGameStorage() {
  Object.values(localGameStateStorageKeys).forEach(key => {
    localStorage.removeItem(key);
  });
}

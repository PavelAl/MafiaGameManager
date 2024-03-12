import { localGameStateStorageKeys } from './localGameStateStorageKeys';

export function resetGame() {
  Object.values(localGameStateStorageKeys).forEach(key => {
    localStorage.removeItem(key);
  });
}

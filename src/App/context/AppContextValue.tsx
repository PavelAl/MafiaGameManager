import { GameState } from '~/Game/types';
import { GameSettings } from '~/GameSetup';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

export type AppContextValue = {
  players?: string[];
  participants?: string[];

  settings?: GameSettings;
  rolesRegistration?: RoleRegistrationOption[];

  gameState?: GameState;

  setSettings?: (settings: GameSettings) => void;
  setPlayers?: (players: string[]) => void;

  setParticipants?: (players: string[]) => void;
  addParticipant?: (players: string) => void;
  removeParticipant?: (players: string) => void;

  updateRoleRegistration?: (updatedOption: RoleRegistrationOption) => void;
};

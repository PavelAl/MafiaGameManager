import { GameSettings } from '~/GameSetup';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

export type AppContextValue = {
  players?: string[];
  participants?: string[];
  nextPath?: string;
  settings?: GameSettings;
  rolesRegistration?: RoleRegistrationOption[];
  setSettings?: (settings: GameSettings) => void;
  setPlayers?: (players: string[]) => void;
  setParticipants?: (players: string[]) => void;
  addParticipant?: (players: string) => void;
  removeParticipant?: (players: string) => void;
  setNextPath?: (path: string) => void;
  updateRoleRegistration?: (updatedOption: RoleRegistrationOption) => void;
};

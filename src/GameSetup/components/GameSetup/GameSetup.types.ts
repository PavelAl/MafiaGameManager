import { GameSettings } from '~/GameSetup/types';

export type GameSetupProps = {
  settings?: GameSettings;
  onChange?: (settings: GameSettings) => void;
};

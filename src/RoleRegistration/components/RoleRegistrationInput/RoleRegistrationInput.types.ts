export type RoleRegistrationInputProps = {
  label: string;
  selectedPlayer?: string;
  players: string[];
  onPlayerSelected: (player: string) => void;
};

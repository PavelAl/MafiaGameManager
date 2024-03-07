export type EliminatingProps = {
  label?: string;

  participants?: string[];
  eliminated?: string[];

  onParticipantEliminated?: (name: string) => void;
  onParticipantRestored?: (name: string) => void;
};

export type ListOfParticipantsProps = {
  players?: string[];
  participants?: string[];

  onPlayerAdded?: (name: string) => void;

  onParticipantRemoved?: (name: string) => void;
};

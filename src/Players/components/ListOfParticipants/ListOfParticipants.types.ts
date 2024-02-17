export type ListOfParticipantsProps = {
  players?: string[];
  participants?: string[];

  onParticipantAdded?: (name: string) => void;
  onParticipantRemoved?: (name: string) => void;
};

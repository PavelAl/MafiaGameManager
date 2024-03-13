import { DayRecord } from './DayRecord';

export type EliminatedRecord = Record<number, DayRecord>;

export type EliminatedState = {
  eliminatedRecords: EliminatedRecord;
  onAddEliminated: (name: string) => void;
  onRemoveEliminated: (name: string) => void;
  reset: () => void;
};

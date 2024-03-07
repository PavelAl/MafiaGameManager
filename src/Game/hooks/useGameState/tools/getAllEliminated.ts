import { DayRecord } from '../../../types';

export function getAllEliminated(records: Record<number, DayRecord>): string[] {
  const result: string[] = [];

  Object.values(records).forEach(record => {
    result.push(...(record.eliminated ?? []));
  });

  return result;
}

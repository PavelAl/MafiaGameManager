import { FC } from 'react';

import { RemovablePlayerRecord } from '../PlayerRecord';

import { ListOfNamesLabel, ListOfPlayersStack } from './components';

type Props = {
  label?: string;
  players: string[];
  onDeletePlayer?: (name: string) => void;
};

export const RemovableListOfNames: FC<Props> = props => {
  const { label, players, onDeletePlayer } = props;

  return (
    <ListOfPlayersStack>
      {label && <ListOfNamesLabel label={label} />}

      {players.map(player => (
        <RemovablePlayerRecord
          key={player}
          name={player}
          onDelete={() => onDeletePlayer?.(player)}
        />
      ))}
    </ListOfPlayersStack>
  );
};

import { FC } from 'react';

import { AddiblePlayerRecord } from '../PlayerRecord';

import { ListOfNamesLabel, ListOfPlayersStack } from './components';

type Props = {
  label?: string;
  players: string[];
  onAddPlayer?: (name: string) => void;
};

export const AddibleListOfNames: FC<Props> = props => {
  const { label, players, onAddPlayer } = props;

  return (
    <ListOfPlayersStack>
      {label && <ListOfNamesLabel label={label} />}

      {players.map(player => (
        <AddiblePlayerRecord key={player} name={player} onAddPlayer={() => onAddPlayer?.(player)} />
      ))}
    </ListOfPlayersStack>
  );
};

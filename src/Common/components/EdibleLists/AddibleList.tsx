import { FC } from 'react';

import { AddibleRecord, ListLabel, ListStack } from './components';

type AddibleListProps = {
  label?: string;
  list: string[];

  onAdd?: (name: string) => void;
};

export const AddibleList: FC<AddibleListProps> = props => {
  const { label, list, onAdd } = props;

  return (
    <ListStack>
      {label && <ListLabel label={label} />}

      {list.map(item => (
        <AddibleRecord key={item} name={item} onAdd={() => onAdd?.(item)} />
      ))}
    </ListStack>
  );
};

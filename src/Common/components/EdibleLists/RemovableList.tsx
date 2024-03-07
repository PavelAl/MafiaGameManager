import { FC } from 'react';

import { RemovableRecord, ListStack, ListLabel } from './components';

type RemovableListProps = {
  label?: string;
  list: string[];
  onDelete?: (name: string) => void;
};

export const RemovableList: FC<RemovableListProps> = props => {
  const { label, list, onDelete } = props;

  return (
    <ListStack>
      {label && <ListLabel label={label} />}

      {list.map(item => (
        <RemovableRecord key={item} name={item} onDelete={() => onDelete?.(item)} />
      ))}
    </ListStack>
  );
};

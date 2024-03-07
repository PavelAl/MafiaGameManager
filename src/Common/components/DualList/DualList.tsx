import { HStack, StackDivider } from '@chakra-ui/react';
import { FC } from 'react';

import { AddibleList, RemovableList } from '../EdibleLists';

type DualListProps = {
  leftLabel?: string;
  rightLabel?: string;

  left?: string[];
  right?: string[];

  onAdded?: (name: string) => void;
  onRemoved?: (name: string) => void;
};

export const DualList: FC<DualListProps> = props => {
  const { leftLabel, rightLabel, left = [], right = [], onAdded, onRemoved } = props;

  return (
    <HStack
      width={'100%'}
      height={'100%'}
      spacing={4}
      divider={<StackDivider />}
      alignItems={'flex-start'}
    >
      <AddibleList label={leftLabel} list={left} onAdd={onAdded} />

      <RemovableList label={rightLabel} list={right} onDelete={onRemoved} />
    </HStack>
  );
};

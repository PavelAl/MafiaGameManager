import { Remove } from '@mui/icons-material';
import { FC } from 'react';

import { EdiblePlayerRecord } from './EdiblePlayerRecord';

type Props = {
  name: string;
  onDelete?: () => void;
};

export const RemovablePlayerRecord: FC<Props> = props => {
  const { name, onDelete } = props;

  return (
    <EdiblePlayerRecord
      name={name}
      button={{
        label: 'Delete player',
        icon: <Remove />,
        onClick: onDelete
      }}
    />
  );
};

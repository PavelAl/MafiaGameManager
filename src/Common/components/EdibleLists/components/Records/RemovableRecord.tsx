import { Remove } from '@mui/icons-material';
import { FC } from 'react';

import { EdibleRecord } from './EdibleRecord';

type Props = {
  name: string;
  onDelete?: () => void;
};

export const RemovableRecord: FC<Props> = props => {
  const { name, onDelete } = props;

  return (
    <EdibleRecord
      name={name}
      button={{
        label: 'Delete',
        icon: <Remove />,
        onClick: onDelete
      }}
    />
  );
};

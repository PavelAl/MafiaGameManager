import { Add } from '@mui/icons-material';
import { FC } from 'react';

import { EdiblePlayerRecord } from './EdiblePlayerRecord';

type Props = {
  name: string;
  onAddPlayer?: () => void;
};

export const AddiblePlayerRecord: FC<Props> = props => {
  const { name, onAddPlayer } = props;

  return (
    <EdiblePlayerRecord
      name={name}
      button={{
        label: 'Add player',
        icon: <Add />,
        onClick: onAddPlayer
      }}
    />
  );
};

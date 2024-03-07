import { Add } from '@mui/icons-material';
import { FC } from 'react';

import { EdibleRecord } from './EdibleRecord';

type Props = {
  name: string;
  onAdd?: () => void;
};

export const AddibleRecord: FC<Props> = props => {
  const { name, onAdd } = props;

  return (
    <EdibleRecord
      name={name}
      button={{
        label: 'Add',
        icon: <Add />,
        onClick: onAdd
      }}
    />
  );
};

import { FC, useState } from 'react';

import { gameSettingsToRegistrationOptions } from '../../../tools';
import { RoleRegistrationOption } from '../../../types';
import { RoleRegistration } from '../RoleRegistration';

import { initialPlayersNames } from '~/Players';

const initialOptions = gameSettingsToRegistrationOptions({
  putana: true,
  players: 12,
  mafia: 3,
  sheriff: true,
  boss: true,
  maniac: true,
  doctor: false
});

export const RoleRegistrationStory: FC = () => {
  const [options, setOptions] = useState<RoleRegistrationOption[]>(initialOptions);

  const updateOption = (updatedOption: RoleRegistrationOption): void => {
    setOptions(prevState =>
      prevState.map(option => {
        return option.key === updatedOption.key ? updatedOption : option;
      })
    );
  };

  return (
    <RoleRegistration
      options={options}
      players={initialPlayersNames.slice(0, 12)}
      onOptionPlayerSelected={updateOption}
    />
  );
};

import { FC, useState } from 'react';

import { Night } from '../Night';

import { initialPlayersNames } from '~/Players';
import { gameSettingsToRegistrationOptions } from '~/RoleRegistration/tools';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

const initialOptions = gameSettingsToRegistrationOptions({
  putana: true,
  players: 12,
  mafia: 1,
  sheriff: true,
  boss: true,
  maniac: true,
  doctor: false
});

export const NightStory: FC = () => {
  const [options, setOptions] = useState<RoleRegistrationOption[]>(initialOptions);

  const updateOption = (updatedOption: RoleRegistrationOption): void => {
    setOptions(prevState =>
      prevState.map(option => {
        return option.key === updatedOption.key ? updatedOption : option;
      })
    );
  };

  return (
    <Night
      currentDay={2}
      options={options}
      players={initialPlayersNames.slice(0, 12)}
      onOptionPlayerSelected={updateOption}
    />
  );
};

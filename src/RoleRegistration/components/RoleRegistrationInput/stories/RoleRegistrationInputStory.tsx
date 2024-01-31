import { FC, useState } from 'react';

import { RoleRegistrationInput } from '../RoleRegistrationInput';

import { initialPlayersNames } from '~/Players/data';

export const RoleRegistrationInputStory: FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<string | undefined>();

  return (
    <RoleRegistrationInput
      label="Путана"
      players={initialPlayersNames}
      selectedPlayer={selectedPlayer}
      onPlayerSelected={setSelectedPlayer}
    />
  );
};

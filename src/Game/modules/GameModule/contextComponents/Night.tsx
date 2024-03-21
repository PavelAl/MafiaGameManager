import { FC, useContext } from 'react';

import { GameContext } from '../Game.context';

import { Night } from '~/Game/components';
import { getPlayersWithRoles } from '~/Game/tools';

export const ConnectedNight: FC = () => {
  const {
    currentDay,
    currentPlayers,
    rolesRegistrations,
    nightActions: nightActionsOptions,
    updateNightAction: updateNightActionOption
  } = useContext(GameContext);

  return (
    <Night
      currentDay={currentDay}
      options={nightActionsOptions}
      players={getPlayersWithRoles(currentPlayers, rolesRegistrations)}
      onOptionPlayerSelected={updateNightActionOption}
    />
  );
};

import { FC, useContext } from 'react';

import { GameContext } from '../Game.context';

import { Night } from '~/Game/components';

export const ConnectedNight: FC = () => {
  const {
    currentDay,
    currentPlayers,
    nightActions: nightActionsOptions,
    updateNightAction: updateNightActionOption
  } = useContext(GameContext);

  return (
    <Night
      currentDay={currentDay}
      options={nightActionsOptions}
      players={currentPlayers}
      onOptionPlayerSelected={updateNightActionOption}
    />
  );
};

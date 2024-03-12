import { FC, useContext } from 'react';

import { GameModuleToolbar } from '../components';
import { GameContext } from '../Game.context';

export const Toolbar: FC = () => {
  const { currentDay, mode, goNextStage, goPreviousStage } = useContext(GameContext);

  return (
    <GameModuleToolbar
      isFirstDay={mode === 'day' && currentDay === 1}
      onGoNext={goNextStage}
      onGoPrev={goPreviousStage}
    />
  );
};

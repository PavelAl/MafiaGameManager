import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { MobileNumberInput } from '~/Common';

import { RoleSwitchField } from './components';
import { GameSetupContext } from './GameSetup.context';
import { GameSetupProps } from './GameSetup.types';

export const GameSetup: FC<GameSetupProps> = props => {
  const { settings = { players: 0, mafia: 0 }, onChange } = props;

  return (
    <GameSetupContext.Provider value={props}>
      <Stack gap={6} alignItems="center">
        <Text fontSize="18" fontWeight={500}>{`Всего участников: ${settings.players}`}</Text>

        <MobileNumberInput
          label={'Mafia'}
          value={settings.mafia}
          min={0}
          onChange={value => onChange?.({ ...settings, mafia: value })}
        />

        <RoleSwitchField role={'sheriff'} />

        <RoleSwitchField role={'boss'} />

        <RoleSwitchField role={'maniac'} />

        <RoleSwitchField role={'doctor'} />

        <RoleSwitchField role={'putana'} />
      </Stack>
    </GameSetupContext.Provider>
  );
};

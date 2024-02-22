import { initialPlayersNames } from '~/Players/data';
import { usePlayersListState } from '~/Players/hooks';

import { AppContextValue } from './AppContextValue';
import { useParticipants, useRolesRegistration, useSettings } from './hooks';

const initialPlayers = initialPlayersNames;

export const useCreateAppContextValue = (): AppContextValue => {
  const [players, setPlayers] = usePlayersListState(initialPlayers);

  const { participants, setParticipants, addParticipant, removeParticipant } =
    useParticipants(players);

  const { settings, setSettings } = useSettings(participants);

  const { rolesRegistration, updateRoleRegistration } = useRolesRegistration(settings);

  return {
    players,
    participants,
    settings,
    rolesRegistration,
    setSettings,
    setPlayers,
    setParticipants,
    addParticipant,
    removeParticipant,
    updateRoleRegistration
  };
};

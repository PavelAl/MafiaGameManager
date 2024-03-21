import { cardsPool } from '~/Cards/data';
import { RoleRegistrationOption } from '~/RoleRegistration/types';

export function getPlayersWithRoles(
  players: string[],
  rolesRegistration: RoleRegistrationOption[]
) {
  return players.map(player => {
    const role = rolesRegistration.find(record => record.player === player)?.role;

    return role ? `${player} (${cardsPool[role].nameRu})` : player;
  });
}

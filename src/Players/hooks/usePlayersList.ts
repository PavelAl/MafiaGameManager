type Args = {
  players?: string[];
  onPlayersChanged?: (players: string[]) => void;
};

export const usePlayersList = (args: Args) => {
  const { players = [], onPlayersChanged } = args;

  const onAddPlayer = (name: string) => {
    if (!name || players.some(n => n === name)) return;

    const newPlayers = [...players, name];

    onPlayersChanged?.(newPlayers);
  };

  const onRemovePlayer = (name: string) => {
    const newPlayers = players.filter(n => n !== name);

    onPlayersChanged?.(newPlayers);
  };

  return { onAddPlayer, onRemovePlayer };
};

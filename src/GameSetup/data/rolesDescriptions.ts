import { Role, RoleDescription } from '~/GameSetup/types';

export const rolesDescriptions: Partial<Record<Role, RoleDescription>> = {
  citizen: {
    role: 'citizen',
    name: 'Мирный',
    team: 'Мирные',
    action: 'Ночью не просыпается',
    specials: []
  },

  mafia: {
    role: 'mafia',
    name: 'Мафия',
    team: 'Мафия',
    action: 'Просыпается ночью с командой мафии и выбирает игрока, который будет убит.',
    specials: ['Если кого-то из команды мафии посетит путана, то вся команда не сможет стрелять']
  },

  sheriff: {
    role: 'sheriff',
    name: 'Шериф',
    team: 'Мирные',
    action: 'Посыпается ночью и может проверить является ли Мафией выбранный житель.',
    specials: [
      'Если шерифа посетила путана, то он не сможет проверить игрока',
      'Если шериф проверит маньяка, то ведущий показывает что это МИРНЫЙ'
    ]
  },

  boss: {
    role: 'boss',
    name: 'Босс',
    team: 'Мафия',
    action:
      'Просыпается ночью с командой мафии и выбирает игрока, который будет убит. Имеет приоритет при голосовании. После посыпается отдельно и может проверить является ли Шерифом выбранный житель.',
    specials: [
      'Если босса посетила путана, то вся мафия не стреляет и босс не сможет проверить игрока'
    ]
  },

  maniac: {
    role: 'maniac',
    name: 'Маньяк',
    team: 'Одиночка',
    action: 'Просыпается ночью и выбирает игрока, который будет убит.',
    specials: [
      'Если маньяка посетит путана то ведущий покажет ему что он не ходит',
      'Если маньяка проверяет шериф, то ведущий показывает что это МИРНЫЙ',
      'Выигрывает оставшись 1 на 1 с любым игроком'
    ]
  },

  doctor: {
    role: 'doctor',
    name: 'Доктор',
    team: 'Мирные',
    action:
      'Просыпается ночью и выбирает игрока, которого хочет лечить. Вылеченного игрока не могут убить ни мафия ни маньяк.',
    specials: [
      'Не может ходить к одному и тому же игроку дважды',
      'Может лечить сам себя',
      'Если доктора посетила путана, то он не сможет лечить'
    ]
  },
  putana: {
    role: 'putana',
    name: 'Путана',
    team: 'Мирные',
    action:
      'Просыпается ночью и выбирает игрока, который будет заблокирован. Заблокированный игрок не может выполнять своё действие ночью.',
    specials: [
      'Не может ходить к одному и тому же игроку дважды',
      'Заблокированному игроку ведущий покажет ночью скрещеные руки',
      'Заблокированный игрок не может воспользоваться действием своей роли',
      'Если заблокирована одна из мафий, то заблокирована вся команда',
      'Игрока, которого ночью посетила путана нельзя изгнать из города на следующий день'
    ]
  }
};

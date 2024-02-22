import { Card, CardsPool } from '../types';

const citizenCard: Card = { name: 'Citizen', role: 'citizen' };
const mafiaCard: Card = { name: 'Mafia', role: 'mafia' };
const sheriffCard: Card = { name: 'Sheriff', role: 'sheriff' };
const bossCard: Card = { name: 'Boss', role: 'boss' };
const maniacCard: Card = { name: 'Maniac', role: 'maniac' };
const putanaCard: Card = { name: 'Putana', role: 'putana' };
const doctorCard: Card = { name: 'Doctor', role: 'doctor' };

export const cardsPool: CardsPool = {
  citizen: citizenCard,
  mafia: mafiaCard,
  sheriff: sheriffCard,
  boss: bossCard,
  maniac: maniacCard,
  putana: putanaCard,
  doctor: doctorCard
};

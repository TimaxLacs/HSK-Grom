import { asset } from '../utils/asset';

export type TeamMember = {
  name: string;
  callsign: string;
  image: string;
};

/** Карточка в составе с подписью специальности */
export type TeamSlot = {
  member: TeamMember;
  specialty: string;
};

export const commander: TeamMember = {
  name: 'Максим Горм',
  callsign: 'Лихо',
  image: asset('/avatars/likho.png'),
};

export const technician: TeamMember = {
  name: 'Серёжа Сергеев',
  callsign: 'Князь',
  image: asset('/avatars/knyaz.png'),
};

export const deputySquad1: TeamMember = {
  name: 'Денис Горбунов',
  callsign: 'Ганза',
  image: asset('/avatars/ganza3.png'),
};

export const deputySquad2: TeamMember = {
  name: 'Тимур Шакиров',
  callsign: 'Горизонт',
  image: asset('/avatars/gorizont3.png'),
};

export const squad1Sergeant: TeamMember = {
  name: 'Ярослав Цветков',
  callsign: 'Шершень',
  image: asset('/avatars/shershen2.png'),
};

export const squad2Sergeant: TeamMember = {
  name: 'Илья Грабовский',
  callsign: 'Афган',
  image: asset('/avatars/afgan3.png'),
};

export const polsha: TeamMember = {
  name: 'Максим Полик',
  callsign: 'Польша',
  image: asset('/avatars/polsha3.png'),
};

export const valka: TeamMember = {
  name: 'Екатерина Федорова',
  callsign: 'Валка',
  image: asset('/avatars/valka2.png'),
};

export const goblin: TeamMember = {
  name: 'Даниил Баботин',
  callsign: 'Гоблин',
  image: asset('/avatars/goblin.png'),
};

export const muravey: TeamMember = {
  name: 'Денис Боровков',
  callsign: 'Муравей',
  image: asset('/avatars/muravey.png'),
};

export const demon: TeamMember = {
  name: 'Дмитрий Бойцов',
  callsign: 'Демон',
  image: asset('/avatars/demon.png'),
};

export const radioman: TeamMember = {
  name: 'Алексей Петухов',
  callsign: 'Молчун',
  image: asset('/avatars/molchun2.png'),
};

export const mortarman: TeamMember = {
  name: 'Алексей Борис',
  callsign: 'Шуга',
  image: asset('/avatars/shuga2.png'),
};

/** Главная: командир, звенья (замы + старшины), техник — duty = должность, specialty = специальность */
export const homeSquads: {
  title: string;
  rows: { duty: string; member: TeamMember; specialty: string }[];
}[] = [
  {
    title: '1 звено',
    rows: [
      { duty: 'Заместитель командира', member: deputySquad1, specialty: 'Марксман' },
      { duty: 'Старшина', member: squad1Sergeant, specialty: 'Снайпер' },
    ],
  },
  {
    title: '2 звено',
    rows: [
      { duty: 'Заместитель командира', member: deputySquad2, specialty: 'Сапёр' },
      { duty: 'Старшина', member: squad2Sergeant, specialty: 'Штурмовик' },
    ],
  },
];

/** Специальность для карточки командира на главной (должность — «Командир» на карточке) */
export const commanderSpecialtyHome = 'Штурмовик';

/** Страница «Команда»: 2 отделения → специалисты → новобранцы */
export const teamSquad1Slots: TeamSlot[] = [
  { member: commander, specialty: 'Командир' },
  { member: deputySquad1, specialty: 'Марксман' },
  { member: squad1Sergeant, specialty: 'Снайпер' },
  { member: polsha, specialty: 'Медик' },
  { member: goblin, specialty: 'Пулемётчик' },
];

export const teamSquad2Slots: TeamSlot[] = [
  { member: deputySquad2, specialty: 'Сапёр' },
  { member: squad2Sergeant, specialty: 'Штурмовик' },
  { member: muravey, specialty: 'Гранатомётчик' },
  { member: valka, specialty: 'Медик' },
  { member: demon, specialty: 'Штурмовик' },
];

const recruitMembers: TeamMember[] = [
  { name: 'Андрей Жданов', callsign: 'Штиль', image: asset('/avatars/shtil.png') },
  { name: 'Максим Василенко', callsign: 'Овод', image: asset('/avatars/injir.png') },
  { name: 'Екатерина Крамскова', callsign: 'Кэт', image: asset('/avatars/ket.png') },
  { name: 'Владимир Степанов', callsign: 'Радар', image: asset('/avatars/radar.png') },
  { name: 'Юрий Игнатев', callsign: 'Матрос', image: asset('/avatars/matros.png') },
];

export const teamRecruitSlots: TeamSlot[] = recruitMembers.map((member) => ({
  member,
  specialty: 'Новобранец',
}));

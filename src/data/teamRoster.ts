import { asset } from '../utils/asset';

export type TeamMember = {
  name: string;
  callsign: string;
  image: string;
};

/** Страница «Команда»: подзаголовок = specialty, на карточке опционально duty (должность) */
export type TeamSlot = {
  member: TeamMember;
  specialty: string;
  duty?: string;
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

export const radar: TeamMember = {
  name: 'Владимир Степанов',
  callsign: 'Радар',
  image: asset('/avatars/radar.png'),
};

export const deputySquad1 = radar;

export const deputySquad2: TeamMember = {
  name: 'Тимур Шакиров',
  callsign: 'Горизонт',
  image: asset('/avatars/gorizont3.png'),
};

export const archie: TeamMember = {
  name: 'Денис Горбунов',
  callsign: 'Арчи',
  image: asset('/avatars/ganza3.png'),
};

export const squad1Sergeant = archie;

export const shershen: TeamMember = {
  name: 'Ярослав Цветков',
  callsign: 'Шершень',
  image: asset('/avatars/shershen2.png'),
};

export const squad2Sergeant: TeamMember = {
  name: 'Александр Бровкин',
  callsign: 'Ёжик',
  image: asset('/avatars/yozhik.png'),
};

export const narkoz: TeamMember = {
  name: 'Максим Полик',
  callsign: 'Наркоз',
  image: asset('/avatars/polsha3.png'),
};

export const polsha = narkoz;

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

export const matros: TeamMember = {
  name: 'Юрий Игнатев',
  callsign: 'Матрос',
  image: asset('/avatars/matros.png'),
};

export const molchun: TeamMember = {
  name: 'Алексей Петухов',
  callsign: 'Молчун',
  image: asset('/avatars/molchun2.png'),
};

export const radioman = molchun;

export const mortarman: TeamMember = {
  name: 'Алексей Борис',
  callsign: 'Шуга',
  image: asset('/avatars/shuga2.png'),
};

export const uavOperator: TeamMember = {
  name: 'Виктория Сергеева',
  callsign: 'Скинуха',
  image: asset('/avatars/skinuha.png'),
};

export const ovod: TeamMember = {
  name: 'Максим Василенко',
  callsign: 'Овод',
  image: asset('/avatars/injir.png'),
};

export const yozhik = squad2Sergeant;

export const ket: TeamMember = {
  name: 'Екатерина Крамскова',
  callsign: 'Кэт',
  image: asset('/avatars/ket.png'),
};

export const veles: TeamMember = {
  name: 'Влад Назаров',
  callsign: 'Велес',
  image: asset('/avatars/veles.png'),
};

/** Главная: командир, звенья (замы + старшины), техник */
export const homeSquads: {
  title: string;
  rows: { duty: string; member: TeamMember; specialty: string }[];
}[] = [
  {
    title: '1 звено',
    rows: [
      { duty: 'Заместитель командира', member: radar, specialty: 'Связист' },
      { duty: 'Старшина', member: archie, specialty: 'Марксман' },
    ],
  },
  {
    title: '2 звено',
    rows: [
      { duty: 'Заместитель командира', member: deputySquad2, specialty: 'Сапёр' },
      { duty: 'Старшина', member: squad2Sergeant, specialty: 'Пулемётчик' },
    ],
  },
];

export const commanderSpecialtyHome = 'Штурмовик';

export const teamSquad1Slots: TeamSlot[] = [
  { member: commander, specialty: 'Штурмовик', duty: 'Командир' },
  { member: matros, specialty: 'Штурмовик' },
  { member: archie, specialty: 'Марксман', duty: 'Старшина' },
  { member: shershen, specialty: 'Снайпер' },
  { member: narkoz, specialty: 'Медик' },
  { member: goblin, specialty: 'Пулемётчик' },
  { member: veles, specialty: 'Гранатомётчик', duty: 'Новобранец-гранатомётчик' },
  { member: ovod, specialty: 'Сапёр' },
  { member: radar, specialty: 'Связист', duty: 'Замком' },
];

export const teamSquad2Slots: TeamSlot[] = [
  { member: deputySquad2, specialty: 'Сапёр', duty: 'Замком' },
  { member: demon, specialty: 'Гранатомётчик' },
  { member: squad2Sergeant, specialty: 'Пулемётчик', duty: 'Старшина' },
  { member: ket, specialty: 'Медик', duty: 'Новобранец-медик' },
];

export const teamZvenoRowSpecialtyOrder: string[] = [
  'Штурмовик',
  'Пулемётчик',
  'Гранатомётчик',
  'Марксман',
  'Снайпер',
  'Сапёр',
  'Связист',
  'Медик',
];

export const teamReserveSlots: TeamSlot[] = [
  { member: valka, specialty: 'Штурмовик' },
  { member: muravey, specialty: 'Гранатомётчик' },
  { member: molchun, specialty: 'Связист' },
];

const recruitMaloy: TeamMember = {
  name: 'Сергей Бровкин',
  callsign: 'Малой',
  image: asset('/avatars/maloy.png'),
};
const recruitGekkon: TeamMember = {
  name: 'Юра Гейко',
  callsign: 'Геккон',
  image: asset('/avatars/gekkon.png'),
};
const recruitRyzhiy: TeamMember = {
  name: 'Степан Ласточкин',
  callsign: 'Рыжий',
  image: asset('/avatars/ryzhiy.png'),
};
const recruitNota: TeamMember = {
  name: 'Иван Ковалда',
  callsign: 'Нота',
  image: '',
};
const recruitEfimov: TeamMember = {
  name: 'Даня Ефимов',
  callsign: '',
  image: '',
};

export const teamRecruitSlots: { member: TeamMember; duty: string }[] = [
  { member: recruitMaloy, duty: 'Новобранец-штурмовик' },
  { member: recruitGekkon, duty: 'Новобранец-штурмовик' },
  { member: recruitRyzhiy, duty: 'Новобранец-штурмовик' },
  { member: recruitNota, duty: 'Новобранец' },
  { member: recruitEfimov, duty: 'Новобранец' },
];

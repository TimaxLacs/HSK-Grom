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
  name: 'Александр Бровкин',
  callsign: 'Ёжик',
  image: asset('/avatars/yozhik.png'),
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

export const radar: TeamMember = {
  name: 'Владимир Степанов',
  callsign: 'Радар',
  image: asset('/avatars/radar.png'),
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

export const susanin: TeamMember = {
  name: 'Сусанин',
  callsign: 'Сусанин',
  image: '',
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
      { duty: 'Старшина', member: squad2Sergeant, specialty: 'Пулемётчик' },
    ],
  },
];

/** Специальность для карточки командира на главной (должность — «Командир» на карточке) */
export const commanderSpecialtyHome = 'Штурмовик';

/** Страница «Команда»: звенья по специальностям в строках */
export const teamSquad1Slots: TeamSlot[] = [
  { member: commander, specialty: 'Штурмовик', duty: 'Командир' },
  { member: matros, specialty: 'Штурмовик' },
  { member: deputySquad1, specialty: 'Марксман', duty: 'Замком' },
  { member: squad1Sergeant, specialty: 'Снайпер', duty: 'Старшина' },
  { member: polsha, specialty: 'Медик' },
  { member: goblin, specialty: 'Пулемётчик' },
  { member: ovod, specialty: 'Сапёр' },
  { member: radar, specialty: 'Связист' },
];

export const teamSquad2Slots: TeamSlot[] = [
  { member: deputySquad2, specialty: 'Сапёр', duty: 'Замком' },
  { member: demon, specialty: 'Штурмовик' },
  { member: squad2Sergeant, specialty: 'Пулемётчик', duty: 'Старшина' },
  { member: ket, specialty: 'Медик', duty: 'Новобранец-медик' },
];

/** Порядок строк на странице «Команда»: в каждой строке колонки 1 звено | 2 звено */
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

/** Резерв — вне основного состава звеньев */
export const teamReserveSlots: TeamSlot[] = [
  { member: susanin, specialty: '' },
  { member: valka, specialty: 'Штурмовик' },
  { member: muravey, specialty: 'Гранатомётчик' },
  { member: molchun, specialty: 'Связист' },
];

const recruitMaloy: TeamMember = {
  name: 'Сергей Бровкин',
  callsign: 'Малой',
  image: asset('/avatars/maloy.png'),
};
const recruitSkinuha: TeamMember = {
  name: 'Виктория Сергеева',
  callsign: 'Скинуха',
  image: asset('/avatars/skinuha.png'),
};
const recruitGekon: TeamMember = {
  name: 'Юра Гейко',
  callsign: 'Гекон',
  image: '',
};
const recruitRyzhiy: TeamMember = {
  name: 'Степан Ласточкин',
  callsign: 'Рыжий',
  image: asset('/avatars/ryzhiy.png'),
};

/** duty — составная подпись на карточке новобранца */
export const teamRecruitSlots: { member: TeamMember; duty: string }[] = [
  { member: recruitMaloy, duty: 'Новобранец-штурмовик' },
  { member: recruitSkinuha, duty: 'Новобранец-оператор БПЛА' },
  { member: recruitGekon, duty: 'Новобранец-штурмовик' },
  { member: recruitRyzhiy, duty: 'Новобранец-штурмовик' },
];

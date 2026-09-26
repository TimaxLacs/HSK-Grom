import { asset } from './asset';

export type Season = 'winter' | 'demi';

/** Зима: с 1 декабря включительно до 1 марта не включая. */
export function isWinterSeason(date: Date = new Date()): boolean {
  const month = date.getMonth();
  return month === 11 || month === 0 || month === 1;
}

/** Временный показ зимы до конца 29 сентября 2026. С 30 сентября снова календарь. */
const WINTER_PREVIEW_UNTIL = new Date(2026, 8, 30);

export function resolveSeason(date: Date = new Date(), search: string = ''): Season {
  const override = new URLSearchParams(search).get('season');
  if (override === 'winter' || override === 'demi') return override;
  if (date < WINTER_PREVIEW_UNTIL) return 'winter';
  return isWinterSeason(date) ? 'winter' : 'demi';
}

export function seasonAssets(season: Season) {
  const folder = season === 'winter' ? 'winter' : 'demi';
  const bg = season === 'winter' ? 'bg.png' : 'bg.jpg';
  return {
    background: asset(`/themes/${folder}/${bg}`),
    emblem: asset(`/themes/${folder}/emblem.jpg`),
    banner: asset(`/themes/${folder}/banner.jpg`),
  };
}

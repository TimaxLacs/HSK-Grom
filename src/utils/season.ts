import { asset } from './asset';

export type Season = 'winter' | 'demi';

/**
 * Принудительная тема.
 * null — по календарю: зима с 1 декабря по 1 марта, иначе демисезон.
 * 'winter' или 'demi' — всегда эта тема, пока значение не вернуть на null.
 */
export const SEASON_OVERRIDE: Season | null = null;

/** Зима: с 1 декабря включительно до 1 марта не включая. */
export function isWinterSeason(date: Date = new Date()): boolean {
  const month = date.getMonth();
  return month === 11 || month === 0 || month === 1;
}

export function resolveSeason(date: Date = new Date(), search: string = ''): Season {
  const fromUrl = new URLSearchParams(search).get('season');
  if (fromUrl === 'winter' || fromUrl === 'demi') return fromUrl;
  if (SEASON_OVERRIDE === 'winter' || SEASON_OVERRIDE === 'demi') return SEASON_OVERRIDE;
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

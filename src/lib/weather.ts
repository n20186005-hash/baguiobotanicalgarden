/**
 * Shared weather logic for the garden weather module.
 *
 * The same code runs on the server (rendered into the static HTML) and in the
 * browser (bundled <script> refresh), so advice is always consistent.
 *
 * The visitor-facing copy is written in plain language: no API names, no
 * technical jargon, no raw parameter names — only "do this / bring that".
 */

export type WeatherLang = 'tl' | 'en';

/* ------------------------------------------------------------------ */
/* Weather code -> human description                                    */
/* ------------------------------------------------------------------ */

export type WeatherGroup =
  | 'clear'
  | 'cloudy'
  | 'overcast'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'heavy'
  | 'snow'
  | 'storm';

export interface WmoInfo {
  en: string;
  tl: string;
  icon: string;
  group: WeatherGroup;
}

export const WMO: Record<number, WmoInfo> = {
  0: { en: 'Clear sky', tl: 'Malinaw ang langit', icon: '☀️', group: 'clear' },
  1: { en: 'Mainly clear', tl: 'Malinaw na may kaunting ulap', icon: '🌤️', group: 'clear' },
  2: { en: 'Partly cloudy', tl: 'Bahagyang maulap', icon: '⛅', group: 'cloudy' },
  3: { en: 'Overcast', tl: 'Makapal na ulap', icon: '☁️', group: 'overcast' },
  45: { en: 'Fog', tl: 'Makapal na hamog', icon: '🌫️', group: 'fog' },
  48: { en: 'Freezing fog', tl: 'Malamig na hamog', icon: '🌫️', group: 'fog' },
  51: { en: 'Light drizzle', tl: 'Mahinang ambon', icon: '🌦️', group: 'drizzle' },
  53: { en: 'Drizzle', tl: 'Ambon', icon: '🌦️', group: 'drizzle' },
  55: { en: 'Heavy drizzle', tl: 'Matinding ambon', icon: '🌧️', group: 'rain' },
  56: { en: 'Freezing drizzle', tl: 'Malamig na ambon', icon: '🌧️', group: 'drizzle' },
  57: { en: 'Freezing drizzle', tl: 'Malamig na ambon', icon: '🌧️', group: 'rain' },
  61: { en: 'Light rain', tl: 'Mahinang ulan', icon: '🌧️', group: 'drizzle' },
  63: { en: 'Rain', tl: 'Ulan', icon: '🌧️', group: 'rain' },
  65: { en: 'Heavy rain', tl: 'Matinding ulan', icon: '🌧️', group: 'heavy' },
  66: { en: 'Freezing rain', tl: 'Malamig na ulan', icon: '🌧️', group: 'rain' },
  67: { en: 'Freezing rain', tl: 'Malamig na ulan', icon: '🌧️', group: 'heavy' },
  71: { en: 'Light snow', tl: 'Mahinang niyebe', icon: '❄️', group: 'snow' },
  73: { en: 'Snow', tl: 'Niyebe', icon: '❄️', group: 'snow' },
  75: { en: 'Heavy snow', tl: 'Matinding niyebe', icon: '❄️', group: 'snow' },
  77: { en: 'Snow grains', tl: 'Butil ng niyebe', icon: '❄️', group: 'snow' },
  80: { en: 'Light showers', tl: 'Mahinang pag-ulan', icon: '🌦️', group: 'drizzle' },
  81: { en: 'Showers', tl: 'Pag-ulan', icon: '🌧️', group: 'rain' },
  82: { en: 'Heavy showers', tl: 'Matinding pag-ulan', icon: '⛈️', group: 'heavy' },
  85: { en: 'Snow showers', tl: 'Pag-ulan ng niyebe', icon: '❄️', group: 'snow' },
  86: { en: 'Snow showers', tl: 'Pag-ulan ng niyebe', icon: '❄️', group: 'snow' },
  95: { en: 'Thunderstorm', tl: 'Kulog at kidlat', icon: '⛈️', group: 'storm' },
  96: { en: 'Storm with hail', tl: 'Bagyo na may yelo', icon: '⛈️', group: 'storm' },
  99: { en: 'Storm with hail', tl: 'Bagyo na may yelo', icon: '⛈️', group: 'storm' },
};

export function wmoInfo(code: number | null | undefined): WmoInfo {
  if (code == null) return WMO[3];
  return WMO[code] ?? WMO[3];
}

/** Beaufort level from km/h. 5–6 = breezy/strong, ≥7 = gale force. */
export function beaufort(kmh: number): number {
  const limits = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  for (let i = 0; i < limits.length; i += 1) {
    if (kmh < limits[i]) return i;
  }
  return 12;
}

/* ------------------------------------------------------------------ */
/* Endpoint                                                            */
/* ------------------------------------------------------------------ */

export function weatherEndpoint(latitude: number, longitude: number): string {
  return (
    'https://api.open-meteo.com/v1/forecast' +
    `?latitude=${latitude}&longitude=${longitude}` +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_gusts_10m,uv_index' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,uv_index_max,wind_speed_10m_max,wind_gusts_10m_max' +
    '&timezone=Asia%2FManila&forecast_days=7'
  );
}

export interface WeatherPayload {
  current?: Record<string, number | string>;
  daily?: Record<string, (number | string)[]>;
}

/* ------------------------------------------------------------------ */
/* Advice engine                                                       */
/* ------------------------------------------------------------------ */

export interface AdviceItem {
  icon: string;
  text: string;
}

export interface WeatherAdvice {
  /** Red, pinned to the top. Empty = nothing to warn about. */
  risk: AdviceItem[];
  outfit: AdviceItem[];
  plan: AdviceItem[];
  items: AdviceItem[];
}

const copy = {
  en: {
    /* --- risks --- */
    riskStorm:
      'Thunderstorms are expected. Stay off exposed ridges and open lawns, never shelter under the tall pines, and wait out the storm in a building or covered area.',
    riskHeavy:
      'Heavy rain is expected. Keep away from valley floors, drainage channels and cut slopes — mountain terrain can produce flash floods and landslides.',
    riskWind:
      'Strong winds are expected. Stay clear of signboards, temporary structures, scaffolding and large trees on exposed slopes.',
    riskFog:
      'Visibility will be poor. Mountain roads and the viewpoint may offer no view at all — drive slowly and allow extra travel time.',
    riskCold:
      'Near-freezing highland temperatures are forecast. Keep the visit short, stay dry, and watch for icy patches on shaded steps.',
    /* --- outfit --- */
    outfitFreezing:
      'Very cold for the highlands (down to {min}°C) — thermal layer, warm coat, scarf and closed shoes.',
    outfitCold:
      'Cold highland day ({min}–{max}°C) — warm jacket with a layer underneath; evenings cool down fast.',
    outfitSwing:
      '{range}°C swing between day and night — dress in layers and carry a jacket you can take off.',
    outfitWarm:
      'Warm for the highlands (up to {max}°C) — light, breathable clothes are enough.',
    outfitMild:
      'Mild highland weather ({min}–{max}°C) — comfortable walking clothes are fine.',
    outfitRain:
      'Rain is expected — a waterproof jacket or raincoat works better than an umbrella on the windy, stepped paths.',
    outfitWind:
      'Windy conditions — wear a wind-resistant outer layer and a hat that will not blow off.',
    outfitSun:
      'The sun is strong at 1,540 m — light long sleeves and a hat help even when the air feels cool.',
    /* --- plan --- */
    planClear:
      'Clear skies — a good day for the full trail loop and the viewpoint; morning and late afternoon give the best light.',
    planOvercast:
      'Soft, even light — excellent for flower and plant photography, and comfortable for a long walk without harsh sun.',
    planDrizzle:
      'Light rain — paths and stone steps turn slippery; slow down and move between the covered sections.',
    planRain:
      'Steady rain — keep the outdoor route short; wet trails and poor visibility make the long loop a poor choice.',
    planStorm:
      'Thunderstorms — skip the exposed ridge and the open lawns, and do not stand under tall trees.',
    planWind:
      'Strong wind on exposed sections — postpone the ridge viewpoint and enjoy the sheltered lower gardens.',
    planFog:
      'Fog — the viewpoint may offer no view; the forested lower paths and sheltered gardens are the better plan.',
    planHeat:
      'Warm midday — walk the garden before 11:00 or after 15:00 and rest in the shade in between.',
    planUv:
      'Strong UV around midday — use the pine shade and the covered areas between 11:00 and 15:00.',
    planAlwaysRain:
      'The garden has many stepped and sloped paths — they stay slick for hours after rain.',
    planAlwaysCalm:
      'Dry conditions — the full loop with the viewpoint is comfortable at any time of day.',
    /* --- items --- */
    itemUmbrella: 'Folding umbrella',
    itemRaincoat: 'Raincoat (skip long umbrellas in wind)',
    itemShoes: 'Non-slip walking shoes',
    itemSunscreen: 'Sunscreen',
    itemSunglasses: 'Sunglasses',
    itemHat: 'Hat or cap',
    itemWater: 'Water bottle',
    itemLayer: 'Light jacket / extra layer',
    itemWarm: 'Warm coat & scarf',
    itemWindbreaker: 'Wind-resistant jacket',
    itemRepellent: 'Insect repellent',
    itemDryBag: 'Waterproof cover for camera / phone',
    itemDefault: 'Comfortable walking shoes',
    /* --- group labels --- */
    groupRisk: 'Weather alerts',
    groupOutfit: 'What to wear',
    groupPlan: 'How to plan the visit',
    groupItems: 'What to bring',
  },
  tl: {
    /* --- risks --- */
    riskStorm:
      'May inaasahang kulog at kidlat. Iwasan ang mga bukas na ridge at lawn, huwag sumilong sa ilalim ng matataas na pine, at maghintay sa loob ng gusali o may bubong na lugar.',
    riskHeavy:
      'May inaasahang matinding ulan. Lumayo sa mabababang bahagi, daluyan ng tubig at matarik na dalisdis — sa bundok posible ang biglaang baha at pagguho ng lupa.',
    riskWind:
      'May inaasahang malakas na hangin. Lumayo sa mga karatula, pansamantalang istruktura, scaffolding at malalaking puno sa bukas na dalisdis.',
    riskFog:
      'Mababa ang visibility. Maaaring walang tanawin sa kalsada paakyat at sa viewpoint — magmaneho nang mabagal at maglaan ng dagdag na oras.',
    riskCold:
      'Inaasahan ang napakalamig na temperatura sa bundok. Paikliin ang paglibot, manatiling tuyo, at mag-ingat sa madudulas na bahagi ng hagdanan.',
    /* --- outfit --- */
    outfitFreezing:
      'Napakalamig para sa bundok (hanggang {min}°C) — thermal layer, makapal na coat, scarf at sapatos na nakasara.',
    outfitCold:
      'Malamig na araw sa bundok ({min}–{max}°C) — mainit na jacket na may karagdagang layer; mabilis lumalamig sa gabi.',
    outfitSwing:
      '{range}°C ang agwat ng init sa araw at gabi — mag-layer ng damit at magdala ng jacket na maaaring tanggalin.',
    outfitWarm:
      'Mainit para sa bundok (hanggang {max}°C) — sapat na ang magaan at preskong damit.',
    outfitMild:
      'Katamtamang panahon sa bundok ({min}–{max}°C) — komportableng panglakad na damit ay sapat na.',
    outfitRain:
      'May inaasahang ulan — mas epektibo ang waterproof jacket o raincoat kaysa payong sa mahangin at may hagdanang daan.',
    outfitWind:
      'Mahangin — magsuot ng jacket na hindi tinatangay ng hangin at sumbrerong hindi madaling matanggal.',
    outfitSun:
      'Malakas ang araw sa 1,540 m — nakakatulong ang magaan na mahabang manggas at sumbrero kahit malamig ang hangin.',
    /* --- plan --- */
    planClear:
      'Malinaw ang langit — magandang araw para sa buong trail loop at viewpoint; pinakamaganda ang ilaw sa umaga at hapon.',
    planOvercast:
      'Malambot at pantay ang ilaw — mainam para sa pagkuha ng larawan ng mga bulaklak at halaman, at komportable ang mahabang lakad nang walang matinding init.',
    planDrizzle:
      'Mahinang ulan — madulas ang daan at mga batong hagdanan; bagalan ang lakad at dumaan sa mga may bubong na bahagi.',
    planRain:
      'Tuluy-tuloy na ulan — paikliin ang outdoor route; delikado ang mahabang loop dahil sa madulas na daan at mababang visibility.',
    planStorm:
      'May bagyo — iwasan ang bukas na ridge at mga lawn, at huwag tumayo sa ilalim ng matataas na puno.',
    planWind:
      'Malakas na hangin sa mga bukas na bahagi — ipagpaliban muna ang viewpoint at libutin ang mga nakatatakbong lower garden.',
    planFog:
      'Makapal na hamog — maaaring walang tanawin sa viewpoint; mas mainam ang mga mababang daan sa gubat at mga nakatakbong garden.',
    planHeat:
      'Mainit sa tanghali — maglibot bago mag-11:00 o pagkatapos ng 15:00, at magpahinga sa lilim.',
    planUv:
      'Malakas na UV sa tanghali — gamitin ang lilim ng mga pine at mga may bubong na lugar mula 11:00 hanggang 15:00.',
    planAlwaysRain:
      'Maraming hagdanan at dalisdis sa loob ng hardin — nananatiling madulas ang mga ito ilang oras pagkatapos ng ulan.',
    planAlwaysCalm:
      'Tuyo ang panahon — komportable ang buong loop kasama ang viewpoint anumang oras ng araw.',
    /* --- items --- */
    itemUmbrella: 'Natitiklop na payong',
    itemRaincoat: 'Raincoat (iwasan ang mahabang payong kapag mahangin)',
    itemShoes: 'Sapatos na hindi madulas',
    itemSunscreen: 'Sunscreen',
    itemSunglasses: 'Sunglasses',
    itemHat: 'Sumbrero o cap',
    itemWater: 'Bote ng tubig',
    itemLayer: 'Magaan na jacket / dagdag na layer',
    itemWarm: 'Makapal na coat at scarf',
    itemWindbreaker: 'Jacket na hindi tinatangay ng hangin',
    itemRepellent: 'Pang-iwas sa lamok',
    itemDryBag: 'Waterproof na takip para sa camera / phone',
    itemDefault: 'Komportableng sapatos panglakad',
    /* --- group labels --- */
    groupRisk: 'Babala sa panahon',
    groupOutfit: 'Damit na dapat isuot',
    groupPlan: 'Paano planuhin ang pagbisita',
    groupItems: 'Anong dadalhin',
  },
} as const;

type CopyKey = keyof typeof copy.en;

const fill = (template: string, values: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (_match, key: string) => String(values[key] ?? ''));

const num = (value: unknown, digits = 0): number | null => {
  const parsed = typeof value === 'string' ? Number.parseFloat(value) : value;
  return typeof parsed === 'number' && Number.isFinite(parsed) ? Number(parsed.toFixed(digits)) : null;
};

/**
 * Turn raw forecast values into plain-language, actionable advice.
 * Nothing is returned for conditions that do not apply.
 */
export function buildWeatherAdvice(payload: WeatherPayload | null, lang: WeatherLang): WeatherAdvice {
  const c = copy[lang];
  const advice: WeatherAdvice = { risk: [], outfit: [], plan: [], items: [] };

  if (!payload || !payload.daily || !Array.isArray(payload.daily.time) || !payload.daily.time.length) {
    return advice;
  }

  const daily = payload.daily;
  const current = payload.current ?? {};

  const dayCode = num(daily.weather_code?.[0]) ?? 3;
  const nowCode = num(current.weather_code) ?? dayCode;
  const nowInfo = wmoInfo(nowCode);
  const dayInfo = wmoInfo(dayCode);

  const maxT = num(daily.temperature_2m_max?.[0]);
  const minT = num(daily.temperature_2m_min?.[0]);
  const pop = num(daily.precipitation_probability_max?.[0]) ?? 0;
  const precipSum = num(daily.precipitation_sum?.[0], 1) ?? 0;
  const uv = Math.max(num(current.uv_index) ?? 0, num(daily.uv_index_max?.[0]) ?? 0);
  const wind = Math.max(num(current.wind_speed_10m) ?? 0, num(daily.wind_speed_10m_max?.[0]) ?? 0);
  const gust = Math.max(num(current.wind_gusts_10m) ?? 0, num(daily.wind_gusts_10m_max?.[0]) ?? 0, wind);
  const humidity = num(current.relative_humidity_2m);
  const range = maxT != null && minT != null ? Number((maxT - minT).toFixed(0)) : null;
  const bf = beaufort(wind);

  const groups = new Set<WeatherGroup>([nowInfo.group, dayInfo.group]);
  const isStorm = groups.has('storm') || nowCode === 96 || nowCode === 99;
  const isHeavy = groups.has('heavy') || (groups.has('rain') && precipSum >= 12) || precipSum >= 20;
  const isRain = groups.has('rain') || groups.has('drizzle') || isHeavy;
  const isDrizzle = groups.has('drizzle') && !isHeavy;
  const isFog = groups.has('fog');
  const isClear = groups.has('clear') && !isRain;
  const isOvercast = groups.has('overcast') || groups.has('cloudy');
  const likelyRain = pop >= 60 || isRain;

  const tpl = (key: CopyKey) => fill(c[key], { min: minT ?? 0, max: maxT ?? 0, range: range ?? 0 });

  /* ---------- 1) Risks (highest priority, shown pinned in red) ---------- */
  if (isStorm) advice.risk.push({ icon: '⛈️', text: c.riskStorm });
  if (isHeavy) advice.risk.push({ icon: '🌧️', text: c.riskHeavy });
  if (bf >= 7 || gust >= 55) advice.risk.push({ icon: '💨', text: c.riskWind });
  if (isFog) advice.risk.push({ icon: '🌫️', text: c.riskFog });
  if (minT != null && minT <= 4) advice.risk.push({ icon: '❄️', text: c.riskCold });

  /* ---------- 2) What to wear ---------- */
  if (maxT != null && maxT <= 10) {
    advice.outfit.push({ icon: '🧥', text: tpl('outfitFreezing') });
  } else if (maxT != null && maxT <= 18) {
    advice.outfit.push({ icon: '🧥', text: tpl('outfitCold') });
  } else if (range != null && range > 8) {
    advice.outfit.push({ icon: '🧥', text: tpl('outfitSwing') });
  } else if (maxT != null && maxT >= 32) {
    advice.outfit.push({ icon: '👕', text: tpl('outfitWarm') });
  } else {
    advice.outfit.push({ icon: '👕', text: tpl('outfitMild') });
  }
  if (likelyRain) advice.outfit.push({ icon: '🧥', text: c.outfitRain });
  if (bf >= 5) advice.outfit.push({ icon: '💨', text: c.outfitWind });
  if (uv >= 5) advice.outfit.push({ icon: '🧢', text: c.outfitSun });

  /* ---------- 3) How to plan the visit ---------- */
  if (isStorm) {
    advice.plan.push({ icon: '⛈️', text: c.planStorm });
  } else if (isHeavy) {
    advice.plan.push({ icon: '🌧️', text: c.planRain });
  } else if (isFog) {
    advice.plan.push({ icon: '🌫️', text: c.planFog });
  } else if (isDrizzle || (pop >= 60 && isRain)) {
    advice.plan.push({ icon: '🌦️', text: c.planDrizzle });
  } else if (isClear) {
    advice.plan.push({ icon: '☀️', text: c.planClear });
  } else if (isOvercast) {
    advice.plan.push({ icon: '☁️', text: c.planOvercast });
  } else {
    advice.plan.push({ icon: '🌿', text: c.planAlwaysCalm });
  }

  if (bf >= 5 && !isStorm) advice.plan.push({ icon: '💨', text: c.planWind });
  if (maxT != null && maxT >= 30) advice.plan.push({ icon: '🌡️', text: c.planHeat });
  if (uv >= 5) advice.plan.push({ icon: '🕶️', text: c.planUv });
  if (likelyRain || precipSum > 0.5) advice.plan.push({ icon: '⚠️', text: c.planAlwaysRain });

  /* ---------- 4) What to bring (only what is actually needed) ---------- */
  if (isStorm || isHeavy || (isRain && bf >= 5)) {
    advice.items.push({ icon: '🧥', text: c.itemRaincoat });
  } else if (likelyRain) {
    advice.items.push({ icon: '☂️', text: c.itemUmbrella });
  }
  if (likelyRain || precipSum > 0.5) advice.items.push({ icon: '👟', text: c.itemShoes });
  if (isHeavy) advice.items.push({ icon: '🎒', text: c.itemDryBag });
  if (uv >= 5) {
    advice.items.push({ icon: '🧴', text: c.itemSunscreen });
    advice.items.push({ icon: '🕶️', text: c.itemSunglasses });
    advice.items.push({ icon: '🧢', text: c.itemHat });
  }
  if (maxT != null && (maxT >= 28 || uv >= 6)) advice.items.push({ icon: '💧', text: c.itemWater });
  if (maxT != null && maxT <= 10) {
    advice.items.push({ icon: '🧣', text: c.itemWarm });
  } else if (minT != null && minT <= 16) {
    advice.items.push({ icon: '🧥', text: c.itemLayer });
  } else if (range != null && range > 8) {
    advice.items.push({ icon: '🧥', text: c.itemLayer });
  }
  if (bf >= 5) advice.items.push({ icon: '💨', text: c.itemWindbreaker });
  if (humidity != null && humidity >= 80 && maxT != null && maxT >= 20) {
    advice.items.push({ icon: '🦟', text: c.itemRepellent });
  }
  if (!advice.items.length) advice.items.push({ icon: '👟', text: c.itemDefault });

  return advice;
}

/* ------------------------------------------------------------------ */
/* Rendering helpers (shared by the server render and the browser)     */
/* ------------------------------------------------------------------ */

const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      default:
        return '&#39;';
    }
  });

const listItems = (items: AdviceItem[]): string =>
  items
    .map((item) => `<li class="flex gap-2"><span aria-hidden="true">${item.icon}</span><span>${escapeHtml(item.text)}</span></li>`)
    .join('');

const chipItems = (items: AdviceItem[]): string =>
  items
    .map(
      (item) =>
        `<li class="inline-flex items-center gap-1.5 rounded-full bg-white border border-cold-200 px-3 py-1 text-xs font-medium text-cold-700"><span aria-hidden="true">${item.icon}</span>${escapeHtml(item.text)}</li>`,
    )
    .join('');

/** Three advice groups: what to wear / how to plan / what to bring. */
export function renderAdviceHtml(advice: WeatherAdvice, lang: WeatherLang): string {
  if (!advice.outfit.length && !advice.plan.length && !advice.items.length) return '';
  const c = copy[lang];

  const block = (icon: string, title: string, inner: string, extra = '') => `
    <div class="rounded-xl border border-cold-100 bg-cold-50 p-4">
      <p class="text-xs font-bold uppercase tracking-wide text-pine-700">${icon} ${escapeHtml(title)}</p>
      ${extra}${inner}
    </div>`;

  const outfit = advice.outfit.length
    ? block('👕', c.groupOutfit, `<ul class="mt-2 space-y-1.5 text-sm text-cold-700">${listItems(advice.outfit)}</ul>`)
    : '';
  const plan = advice.plan.length
    ? block('🗺️', c.groupPlan, `<ul class="mt-2 space-y-1.5 text-sm text-cold-700">${listItems(advice.plan)}</ul>`)
    : '';
  const items = advice.items.length
    ? block(
        '🎒',
        c.groupItems,
        `<ul class="mt-3 flex flex-wrap gap-2">${chipItems(advice.items)}</ul>`,
        '',
      )
    : '';

  return `<div class="grid gap-4 md:grid-cols-3">${outfit}${plan}${items}</div>`;
}

/** Red alert banner — returns an empty string when there is nothing to warn about. */
export function renderRiskHtml(advice: WeatherAdvice, lang: WeatherLang): string {
  if (!advice.risk.length) return '';
  const c = copy[lang];
  return `
    <div class="rounded-xl border border-red-200 bg-red-50 p-4">
      <p class="text-xs font-bold uppercase tracking-wide text-red-700">⚠️ ${escapeHtml(c.groupRisk)}</p>
      <ul class="mt-2 space-y-1.5 text-sm text-red-800">${listItems(advice.risk)}</ul>
    </div>`;
}

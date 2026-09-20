// ============================================================
// Baguio Botanical Garden — Shared constants & data
// ============================================================

export const SITE = {
  name: 'Baguio Botanical Garden',
  titleFil: 'Baguio Botanical Garden: Oras ng Pagbukas, Entrance Fee at Gabay',
  titleEn: 'Baguio Botanical Garden: Opening Hours, Entrance Fee & Guide',
  descriptionFil:
    'Planuhin ang pagbisita sa Baguio Botanical Garden sa 37 Leonard Wood Rd: bukas 6:00 AM–6:00 PM araw-araw, ₱100 entrance fee, directory ng mga themed garden, mapa at tips sa transportasyon.',
  descriptionEn:
    'Plan your visit to Baguio Botanical Garden at 37 Leonard Wood Rd: open 6:00 AM–6:00 PM daily, ₱100 entrance fee, themed garden directory, map and transport tips.',
  ogTitleFil: 'Baguio Botanical Garden — Oras, Entrance Fee at Gabay sa Pagbisita',
  ogTitleEn: 'Baguio Botanical Garden — Opening Hours, Entrance Fee & Travel Guide',
  ogDescriptionFil:
    'Gabay sa pagbisita sa Baguio Botanical Garden, Baguio, Benguet, Pilipinas — oras ng pagbukas, bayad, lokasyon at mga atraksyon.',
  ogDescriptionEn:
    'Visitor guide to Baguio Botanical Garden in Baguio, Benguet, Philippines — opening hours, entrance fee, location and attractions.',
  siteUrl: 'https://baguiobotanicalgarden.com',
  author: 'Baguio Botanical Garden Editorial',
  addressFil: '37 Leonard Wood Road, Baguio, 2600 Benguet, Pilipinas',
  addressEn: '37 Leonard Wood Road, Baguio, 2600 Benguet, Philippines',
  coordinates: { lat: 16.415016930084526, lng: 120.6103314769752 },
  plusCode: 'CJ87+25 Baguio, Benguet, Pilipinas',
  mapsUrl: 'https://maps.app.goo.gl/G1bwYQadpkxRr82m9',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.193091575433!2d120.6103314769752!3d16.415016930084526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1541c0c7227%3A0x673a805fba2868d2!2sBaguio%20Botanical%20Garden!5e0!3m2!1szh-CN!2sus!4v1786335104395!5m2!1szh-CN!2sus',
  phone: '+63746610136',
  rating: 4.5,
  reviewCount: 8354,
  /** Hero / JSON-LD primary image (real asset served from /public) */
  heroImage: '/gallery/baguio-botanical-garden-1.jpg',
} as const;

export const GA4 = 'G-YJTNXGWZNY';

// --------------- Single-attraction entity binding ---------------
// Filled from the SEO entity variable table (see README / project brief).

export const ENTITY = {
  domainName: 'baguiobotanicalgarden.com',
  siteUrl: 'https://baguiobotanicalgarden.com',
  /** Official full name */
  fullName: 'Baguio Botanical Garden',
  /** Common short name / domain meaning */
  shortName: 'Botanical Garden',
  city: 'Baguio',
  cityLong: 'Baguio City',
  province: 'Benguet',
  country: 'Philippines',
  countryFil: 'Pilipinas',
  countryCode: 'PH',
  postalCode: '2600',
  streetAddress: '37 Leonard Wood Road',
  latitude: 16.415016930084526,
  longitude: 120.6103314769752,
  mapsShareUrl: 'https://maps.app.goo.gl/G1bwYQadpkxRr82m9',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.193091575433!2d120.6103314769752!3d16.415016930084526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1541c0c7227%3A0x673a805fba2868d2!2sBaguio%20Botanical%20Garden!5e0!3m2!1szh-CN!2sus!4v1786335104395!5m2!1szh-CN!2sus',
  nearbyLandmark1: 'Wright Park',
  nearbyLandmark2: 'The Mansion',
  govtTourismUrl: 'https://baguio.gov.ph',
  govtTourismNameEn: 'Baguio City Official Website & City Tourism Office',
  govtTourismNameFil: 'Opisyal na Website ng Lungsod ng Baguio at City Tourism Office',
  dotUrl: 'https://www.tourism.gov.ph',
  dotNameEn: 'Philippine Department of Tourism (DOT)',
  dotNameFil: 'Department of Tourism (DOT) ng Pilipinas',
} as const;

// --------------- Google Maps rating & reviews ---------------

export const REVIEW_META = {
  rating: 4.5,
  reviewCount: 8354,
  reviewCountLabel: '8,354',
  syncMonthEn: 'September 2026',
  syncMonthFil: 'Setyembre 2026',
  syncMonthCn: '2026 年 9 月',
  mapsUrl: 'https://maps.app.goo.gl/G1bwYQadpkxRr82m9',
} as const;

export type Review = {
  authorFil: string;
  authorEn: string;
  rating: number;
  dateFil: string;
  dateEn: string;
  textFil: string;
  textEn: string;
};

/** Displayed on-page only — deliberately NOT emitted as JSON-LD review markup. */
export const REVIEWS: Review[] = [
  {
    authorFil: 'Maria Clara Reyes',
    authorEn: 'Maria Clara Reyes',
    rating: 5,
    dateFil: 'Agosto 2026',
    dateEn: 'August 2026',
    textFil:
      'Napakaganda ng mga themed garden — lalo na ang Chinese Garden at Japanese Garden. Dumating kami bago mag-8 AM kaya tahimik at malamig ang hangin. Sulit ang ₱100 na entrance fee para sa buong maghapong paglilibot.',
    textEn:
      'The themed gardens are beautiful — especially the Chinese Garden and Japanese Garden. We arrived before 8 AM so it was quiet and the air was cool. The ₱100 entrance fee is worth it for a whole day of exploring.',
  },
  {
    authorFil: 'Daniel Ocampo',
    authorEn: 'Daniel Ocampo',
    rating: 5,
    dateFil: 'Hulyo 2026',
    dateEn: 'July 2026',
    textFil:
      'Ang Cordillera Village ang paborito kong bahagi — authentic ang mga Igorot hut at nakasuot pa kami ng tradisyonal na kasuotan para sa larawan. Maganda ring lugar para mag-pamilya dahil malinis at maayos ang mga daanan.',
    textEn:
      'The Cordillera Village is my favourite part — the Igorot huts feel authentic and we even wore traditional attire for photos. It is also great for families because the paths are clean and well maintained.',
  },
  {
    authorFil: 'Jasmine Lim',
    authorEn: 'Jasmine Lim',
    rating: 4,
    dateFil: 'Hunyo 2026',
    dateEn: 'June 2026',
    textFil:
      'Magandang lugar para sa photography — maraming spot mula sa moon gate hanggang sa sculpture garden. Medyo maraming tao tuwing tanghali, kaya mas mainam na pumunta nang maaga o hapon na.',
    textEn:
      'A great place for photography — plenty of spots from the moon gate to the sculpture garden. It gets crowded around midday, so it is better to come early or later in the afternoon.',
  },
  {
    authorFil: 'Ramon Villanueva',
    authorEn: 'Ramon Villanueva',
    rating: 5,
    dateFil: 'Mayo 2026',
    dateEn: 'May 2026',
    textFil:
      'Malapit lang sa Wright Park at The Mansion kaya madaling isama sa isang araw na walking tour. Madaling hanapin dahil nasa mismong Leonard Wood Road at malaki ang karatula sa entrance.',
    textEn:
      'It is very close to Wright Park and The Mansion, so it is easy to include in a one-day walking tour. Easy to find because it sits right on Leonard Wood Road with a large sign at the entrance.',
  },
  {
    authorFil: 'Andrea Santos',
    authorEn: 'Andrea Santos',
    rating: 4,
    dateFil: 'Abril 2026',
    dateEn: 'April 2026',
    textFil:
      'Kaaya-aya ang mga halaman at malinis ang palikuran. May bayad na ₱50 para sa estudyante kaya abot-kaya para sa mga grupo. Magdala ng jacket dahil malamig talaga sa umaga.',
    textEn:
      'The plants are lovely and the restrooms are clean. Students pay only ₱50, so it is affordable for groups. Bring a jacket because it really is cold in the morning.',
  },
  {
    authorFil: 'Michael Tan',
    authorEn: 'Michael Tan',
    rating: 5,
    dateFil: 'Marso 2026',
    dateEn: 'March 2026',
    textFil:
      'Isang tahimik na pahingahan sa gitna ng siyudad. Maganda ang pine trees sa paligid at sariwa ang hangin. Inabot kami ng halos tatlong oras sa paglibot sa walong themed garden.',
    textEn:
      'A peaceful retreat in the middle of the city. The surrounding pine trees are beautiful and the air is fresh. We spent almost three hours walking through the eight themed gardens.',
  },
];

// --------------- Sources & references (E-E-A-T) ---------------

export type SourceItem = {
  tagFil: string;
  tagEn: string;
  titleFil: string;
  titleEn: string;
  noteFil: string;
  noteEn: string;
  url: string;
  linkLabelFil: string;
  linkLabelEn: string;
};

export const SOURCES: SourceItem[] = [
  {
    tagFil: 'Mga Review',
    tagEn: 'Reviews',
    titleFil: 'Google Maps — mga review ng mga gumagamit',
    titleEn: 'Google Maps — user reviews',
    noteFil:
      'Rating at bilang ng review · na-sync noong Setyembre 2026. Sipi mula sa mga review ng gumagamit ng Google Maps, petsa ng pag-sync: Setyembre 2026; ang karapatang-ari ay nananatili sa orihinal na may-akda at sa Google Maps.',
    noteEn:
      'Rating and review count · synced September 2026. Quoted from Google Maps user reviews, synced September 2026; copyright remains with the original authors and Google Maps.',
    url: 'https://maps.app.goo.gl/G1bwYQadpkxRr82m9',
    linkLabelFil: 'Tingnan ang lahat ng review sa Google Maps',
    linkLabelEn: 'View all reviews on Google Maps',
  },
  {
    tagFil: 'Lokasyon',
    tagEn: 'Location',
    titleFil: 'Google Maps — lokasyon, coordinates at Plus Code',
    titleEn: 'Google Maps — location, coordinates and Plus Code',
    noteFil:
      '37 Leonard Wood Road, Baguio, 2600 Benguet · 16.415017, 120.610331 · Plus Code CJ87+25 Baguio.',
    noteEn:
      '37 Leonard Wood Road, Baguio, 2600 Benguet · 16.415017, 120.610331 · Plus Code CJ87+25 Baguio.',
    url: 'https://maps.app.goo.gl/G1bwYQadpkxRr82m9',
    linkLabelFil: 'Buksan sa Google Maps',
    linkLabelEn: 'Open in Google Maps',
  },
  {
    tagFil: 'Opisyal',
    tagEn: 'Official',
    titleFil: 'Opisyal na Website ng Lungsod ng Baguio at City Tourism Office',
    titleEn: 'Baguio City Official Website & City Tourism Office',
    noteFil:
      'Sanggunian para sa mga anunsyo ng siyudad, patakaran sa mga parke, at opisyal na impormasyong panturismo.',
    noteEn:
      'Reference for city announcements, park policies, and official tourism information.',
    url: 'https://baguio.gov.ph',
    linkLabelFil: 'Bisitahin ang baguio.gov.ph',
    linkLabelEn: 'Visit baguio.gov.ph',
  },
  {
    tagFil: 'Opisyal',
    tagEn: 'Official',
    titleFil: 'Department of Tourism (DOT) ng Pilipinas',
    titleEn: 'Philippine Department of Tourism (DOT)',
    noteFil:
      'Sanggunian para sa mga regional na alituntunin sa turismo at impormasyon para sa mga bisita sa Cordillera Administrative Region.',
    noteEn:
      'Reference for regional tourism guidelines and visitor information in the Cordillera Administrative Region.',
    url: 'https://www.tourism.gov.ph',
    linkLabelFil: 'Bisitahin ang tourism.gov.ph',
    linkLabelEn: 'Visit tourism.gov.ph',
  },
];

// --------------- Navigation ---------------

export type NavSection = {
  id: string;
  labelFil: string;
  labelEn: string;
};

export const NAV: NavSection[] = [
  { id: 'key-info', labelFil: 'Mabilis na Impormasyon', labelEn: 'Quick Info' },
  { id: 'about', labelFil: 'Tungkol', labelEn: 'About' },
  { id: 'weather', labelFil: 'Panahon', labelEn: 'Weather' },
  { id: 'history', labelFil: 'Kasaysayan at Alamat', labelEn: 'History & Legends' },
  { id: 'attractions', labelFil: 'Mga Atraksyon', labelEn: 'Attractions' },
  { id: 'season', labelFil: 'Strategy ayon sa Season', labelEn: 'Season Strategy' },
  { id: 'routes', labelFil: 'Ruta ayon sa Bisita', labelEn: 'Routes by Visitor' },
  { id: 'itineraries', labelFil: 'Mga Itinerary', labelEn: 'Itineraries' },
  { id: 'reviews', labelFil: 'Mga Review', labelEn: 'Reviews' },
  { id: 'practical', labelFil: 'Praktikal na Gabay', labelEn: 'Practical Info' },
  { id: 'services', labelFil: 'Mga Pasilidad', labelEn: 'Visitor Services' },
  { id: 'transport', labelFil: 'Transportasyon', labelEn: 'Transportation' },
  { id: 'gallery', labelFil: 'Galeriya', labelEn: 'Gallery' },
  { id: 'tips', labelFil: 'Mga Tip', labelEn: 'Tips' },
  { id: 'science', labelFil: 'Agham at Responsibilidad', labelEn: 'Science & Responsibility' },
  { id: 'faq', labelFil: 'FAQ', labelEn: 'FAQ' },
  { id: 'sources', labelFil: 'Mga Sanggunian', labelEn: 'Sources' },
  { id: 'disclaimer', labelFil: 'Patalastas', labelEn: 'Disclaimer' },
];

// --------------- Key Info Cards ---------------

export type KeyInfoItem = {
  icon: string;
  labelFil: string;
  labelEn: string;
  valueFil: string;
  valueEn: string;
  subFil: string;
  subEn: string;
};

export const KEY_INFO: KeyInfoItem[] = [
  {
    icon: 'ticket',
    labelFil: 'Bayad sa Pagpasok',
    labelEn: 'Entrance Fee',
    valueFil: '₱100 / ₱50',
    valueEn: '₱100 / ₱50',
    subFil: 'Matanda / Bata, Estudyante, at Senior Citizen',
    subEn: 'Adult / Child, Student & Senior Citizen',
  },
  {
    icon: 'clock',
    labelFil: 'Oras ng Bukas',
    labelEn: 'Opening Hours',
    valueFil: '6:00 AM – 6:00 PM',
    valueEn: '6:00 AM – 6:00 PM',
    subFil: 'Bukas araw-araw, kasama ang mga holiday',
    subEn: 'Open daily, including holidays',
  },
  {
    icon: 'stopwatch',
    labelFil: 'Inirerekomendang Oras',
    labelEn: 'Recommended Time',
    valueFil: '2–3 oras',
    valueEn: '2–3 hours',
    subFil: 'Para sa kumpletong paglilibot at pagkuha ng larawan',
    subEn: 'For a complete tour and photo opportunities',
  },
  {
    icon: 'heart',
    labelFil: 'Pinakamagandang Oras',
    labelEn: 'Best Time to Visit',
    valueFil: '7–10 AM',
    valueEn: '7–10 AM',
    subFil: 'Malamig, sariwa ang hangin, at kakaunti ang tao',
    subEn: 'Cool weather, fresh air, and fewer crowds',
  },
];

// --------------- Themed Gardens & Attractions ---------------

export type Attraction = {
  id: string;
  titleFil: string;
  titleEn: string;
  tagFil: string;
  tagEn: string;
  descriptionFil: string;
  descriptionEn: string;
  highlightsFil: string[];
  highlightsEn: string[];
  icon: string;
};

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'chinese-garden',
    titleFil: 'Chinese Garden',
    titleEn: 'Chinese Garden',
    tagFil: 'Tsina',
    tagEn: 'Chinese',
    descriptionFil:
      'Isang tahimik na hardin na may tradisyonal na arkitekturang Tsino — arched bridge, moon gate, pavilion, at pond na may koi fish. Regalo mula sa Chinese community ng Baguio bilang simbolo ng pagkakaibigan.',
    descriptionEn:
      'A serene garden featuring traditional Chinese architecture — arched bridge, moon gate, pavilion, and koi pond. A gift from the Chinese community of Baguio as a symbol of friendship.',
    highlightsFil: [
      'Moon gate para sa perpektong larawan',
      'Tulay na bato sa ibabaw ng koi pond',
      'Tradisyonal na Chinese pavilion',
      'Mga puno ng bamboo at cherry blossom',
    ],
    highlightsEn: [
      'Moon gate for the perfect photo',
      'Stone bridge over koi pond',
      'Traditional Chinese pavilion',
      'Bamboo groves and cherry blossom trees',
    ],
    icon: '🏯',
  },
  {
    id: 'japanese-garden',
    titleFil: 'Japanese Garden',
    titleEn: 'Japanese Garden',
    tagFil: 'Hapon',
    tagEn: 'Japanese',
    descriptionFil:
      'Isang Zen-inspired na hardin na may torii gate, stone lantern, bonsai collection, at maayos na raked gravel. Ang minimalist na disenyo ay nag-aanyaya ng pagninilay at katahimikan.',
    descriptionEn:
      'A Zen-inspired garden with a torii gate, stone lanterns, bonsai collection, and meticulously raked gravel. The minimalist design invites contemplation and tranquility.',
    highlightsFil: [
      'Torii gate — simbolo ng pasukan sa sagradong lugar',
      'Japanese stone lantern (tōrō)',
      'Bonsai collection ng mga lokal na pine',
      'Zen rock garden na may raked gravel',
    ],
    highlightsEn: [
      'Torii gate — symbol of entering sacred space',
      'Japanese stone lantern (tōrō)',
      'Bonsai collection of local pines',
      'Zen rock garden with raked gravel',
    ],
    icon: '⛩️',
  },
  {
    id: 'korean-garden',
    titleFil: 'Korean Garden',
    titleEn: 'Korean Garden',
    tagFil: 'Korea',
    tagEn: 'Korean',
    descriptionFil:
      'Isang makulay na hardin na may tradisyonal na Korean pagoda, hanok-inspired na istraktura, at mga halaman tulad ng royal azalea at Korean pine. Sumasalamin sa tradisyonal na Korean landscape design.',
    descriptionEn:
      'A vibrant garden with a traditional Korean pagoda, hanok-inspired structure, and plants like royal azalea and Korean pine. Reflects traditional Korean landscape design.',
    highlightsFil: [
      'Tradisyonal na Korean pagoda',
      'Mga royal azalea na namumukadkad tuwing Pebrero–Abril',
      'Hanok-inspired na pavilion',
      'Mga Korean stone statue',
    ],
    highlightsEn: [
      'Traditional Korean pagoda',
      'Royal azaleas blooming February–April',
      'Hanok-inspired pavilion',
      'Korean stone statues',
    ],
    icon: '🏛️',
  },
  {
    id: 'philippine-native',
    titleFil: 'Philippine Native Plant Garden',
    titleEn: 'Philippine Native Plant Garden',
    tagFil: 'Katutubong Halaman',
    tagEn: 'Native Plants',
    descriptionFil:
      'Isang koleksyon ng mga katutubong halaman ng Cordillera at Pilipinas — mula sa rafflesia at waling-waling hanggang sa mga pine tree at higanteng pako. Isang showcase ng mayamang biodiversity ng bansa.',
    descriptionEn:
      'A collection of native plants from the Cordillera region and across the Philippines — from rafflesia and waling-waling to pine trees and giant ferns. A showcase of the country\'s rich biodiversity.',
    highlightsFil: [
      'Waling-waling (Vanda sanderiana) — "Reyna ng mga Orkidya"',
      'Mga higanteng pako (Cyathea) mula sa Cordillera',
      'Pitcher plants (Nepenthes) — mga carnivorous na halaman',
      'Benguet pine (Pinus kesiya) grove',
    ],
    highlightsEn: [
      'Waling-waling (Vanda sanderiana) — "Queen of Philippine Orchids"',
      'Giant tree ferns (Cyathea) from the Cordillera',
      'Pitcher plants (Nepenthes) — carnivorous plants',
      'Benguet pine (Pinus kesiya) grove',
    ],
    icon: '🌿',
  },
  {
    id: 'igorot-village',
    titleFil: 'Cordillera Village',
    titleEn: 'Cordillera Village',
    tagFil: 'Kultura ng Igorot',
    tagEn: 'Igorot Culture',
    descriptionFil:
      'Isang replica ng tradisyonal na Igorot village na nagtatampok ng mga katutubong bahay (bale), rice terraces miniature, at mga bronze sculpture ni Ben Hur Villanueva. Dito maaaring magsuot ng tradisyonal na Igorot attire para sa larawan.',
    descriptionEn:
      'A replica of a traditional Igorot village featuring native houses (bale), miniature rice terraces, and bronze sculptures by Ben Hur Villanueva. Visitors can wear traditional Igorot attire for photos.',
    highlightsFil: [
      'Tradisyonal na Igorot hut (bale) — gawa sa kahoy at cogon grass',
      'Miniature Banaue Rice Terraces',
      'Bronze sculptures ni Ben Hur Villanueva',
      'Photo opportunity: magsuot ng bahag, tapis, at tradisyonal na kasuotan',
    ],
    highlightsEn: [
      'Traditional Igorot hut (bale) — made of wood and cogon grass',
      'Miniature Banaue Rice Terraces',
      'Bronze sculptures by Ben Hur Villanueva',
      'Photo op: wear bahag, tapis, and traditional attire',
    ],
    icon: '🛖',
  },
  {
    id: 'tropical-garden',
    titleFil: 'Tropical Rain Garden',
    titleEn: 'Tropical Rain Garden',
    tagFil: 'Tropikal',
    tagEn: 'Tropical',
    descriptionFil:
      'Isang mayabong at mahalumigmig na hardin na puno ng heliconia, gingers, bromeliads, at mga halaman mula sa tropikal na rainforest. Ang mga makukulay na bulaklak ay namumukadkad sa buong taon.',
    descriptionEn:
      'A lush, humid garden filled with heliconias, gingers, bromeliads, and plants from the tropical rainforest. Colorful flowers bloom year-round in Baguio\'s cool climate.',
    highlightsFil: [
      'Makukulay na heliconia at bird of paradise',
      'Mga bromeliads na tumutubo sa mga puno (epiphytes)',
      'Orchid wall na may iba\'t ibang uri ng orkidyas',
      'Shaded walkway na napapaligiran ng mga higanteng dahon',
    ],
    highlightsEn: [
      'Vibrant heliconias and bird of paradise',
      'Bromeliads growing on trees (epiphytes)',
      'Orchid wall with various orchid species',
      'Shaded walkway surrounded by giant leaves',
    ],
    icon: '🌺',
  },
  {
    id: 'friendship-garden',
    titleFil: 'International Friendship Garden',
    titleEn: 'International Friendship Garden',
    tagFil: 'Internasyonal',
    tagEn: 'International',
    descriptionFil:
      'Isang hardin na nagdiriwang ng pagkakaibigan ng Baguio sa iba\'t ibang bansa. Bawat bansa ay may sariling seksyon na may katangiang halaman at disenyo mula sa kani-kanilang kultura.',
    descriptionEn:
      'A garden celebrating Baguio\'s friendship with various nations. Each country has its own section featuring characteristic plants and design elements from their respective cultures.',
    highlightsFil: [
      'Thai pavilion at lotus pond',
      'Taiwanese rock garden',
      'Indonesian tropical corner',
      'Mga plake ng pagkakaibigan mula sa iba\'t ibang lungsod',
    ],
    highlightsEn: [
      'Thai pavilion and lotus pond',
      'Taiwanese rock garden',
      'Indonesian tropical corner',
      'Friendship plaques from various sister cities',
    ],
    icon: '🌏',
  },
  {
    id: 'sculpture-garden',
    titleFil: 'Sculpture Garden',
    titleEn: 'Sculpture Garden',
    tagFil: 'Sining',
    tagEn: 'Art',
    descriptionFil:
      'Isang open-air sculpture garden na may mga likhang sining mula sa mga lokal na artist ng Cordillera. Kabilang dito ang mga bronze sculpture, wood carvings, at stone installations na nagkukuwento ng kultura ng kabundukan.',
    descriptionEn:
      'An open-air sculpture garden featuring artworks by local Cordillera artists. Includes bronze sculptures, wood carvings, and stone installations that tell stories of highland culture.',
    highlightsFil: [
      'Bronze sculptures ni Ben Hur Villanueva',
      'Wood carvings mula sa mga artist ng Ifugao',
      'Stone installations na may Cordillera motifs',
      'Rotating exhibition ng mga lokal na artist',
    ],
    highlightsEn: [
      'Bronze sculptures by Ben Hur Villanueva',
      'Wood carvings by Ifugao artists',
      'Stone installations with Cordillera motifs',
      'Rotating exhibition of local artists',
    ],
    icon: '🎨',
  },
];

// --------------- Practical Info ---------------

export type PracticalInfo = {
  titleFil: string;
  titleEn: string;
  descriptionFil: string;
  descriptionEn: string;
  icon: string;
  tipsFil: string[];
  tipsEn: string[];
};

export const PRACTICAL_INFO: PracticalInfo[] = [
  {
    titleFil: 'Palikuran (CR / WC)',
    titleEn: 'Restrooms (WC)',
    descriptionFil:
      'May malinis na palikuran sa loob ng hardin — matatagpuan malapit sa entrance, malapit sa Chinese Garden, at sa tabi ng Cordillera Village. Lahat ay may running water, sabon, at toilet paper.',
    descriptionEn:
      'Clean restrooms are available inside the garden — located near the entrance, near the Chinese Garden, and beside the Cordillera Village. All have running water, soap, and toilet paper.',
    icon: '🚻',
    tipsFil: [
      'May ₱5–10 na maintenance fee sa ilang palikuran',
      'May hiwalay na palikuran para sa kalalakihan at kababaihan',
      'May accessible toilet para sa PWD malapit sa entrance',
      'Magdala ng sariling wet wipes bilang dagdag na panlinis',
    ],
    tipsEn: [
      'Some restrooms have a ₱5–10 maintenance fee',
      'Separate facilities for men and women',
      'Accessible toilet for PWDs near the entrance',
      'Bring your own wet wipes for extra cleanliness',
    ],
  },
  {
    titleFil: 'Paradahan (Parking)',
    titleEn: 'Parking',
    descriptionFil:
      'May sapat na paradahan sa harap ng Botanical Garden. May bayad na ₱50–80 para sa buong araw. Sa peak season (Panagbenga at holidays), maaaring puno ito — mag-early bird parking o gumamit ng alternatibong paradahan.',
    descriptionEn:
      'Adequate parking is available in front of the Botanical Garden. Fee ranges from ₱50–80 for the whole day. During peak season (Panagbenga and holidays), it may fill up — arrive early or use alternative parking.',
    icon: '🅿️',
    tipsFil: [
      '₱50 na parking fee para sa motorsiklo, ₱80 para sa kotse',
      'Alternatibong paradahan: tabi ng Wright Park (5 minutong lakad)',
      'Alternatibong paradahan: sa may Teacher\'s Camp (10 minutong lakad)',
      'Iwasan ang pagparada sa gilid ng Leonard Wood Road — mahigpit na ipinagbabawal',
      'Kung puno ang paradahan, maaaring mag-drop off muna at gamitin ang paradahan ng malaking shopping mall (humigit-kumulang ₱40/araw, 10 minutong biyahe)',
    ],
    tipsEn: [
      '₱50 parking fee for motorcycles, ₱80 for cars',
      'Alternative parking: beside Wright Park (5-minute walk)',
      'Alternative parking: near Teacher\'s Camp (10-minute walk)',
      'Avoid parking along Leonard Wood Road — strictly prohibited',
      'If the lot is full, drop off first and use a large shopping mall car park about 10 minutes away (around ₱40/day)',
    ],
  },
  {
    titleFil: 'Kainan (Dining)',
    titleEn: 'Dining',
    descriptionFil:
      'Walang restawran sa loob mismo ng Botanical Garden, ngunit maraming kainan sa paligid sa loob ng 5–15 minutong lakad. Mula sa mga karinderya hanggang sa mga cafe at restaurant — lahat ay abot-kaya at naghahain ng lutong Cordillera.',
    descriptionEn:
      'There are no restaurants inside the Botanical Garden itself, but plenty of dining options are within a 5–15 minute walk. From local eateries (karinderya) to cafes and restaurants — all affordable and serving Cordillera cuisine.',
    icon: '🍽️',
    tipsFil: [
      'Mga karinderya sa tapat ng Wright Park (5 minutong lakad) — lutong bahay mula ₱80',
      'Mga cafe sa Leonard Wood Road (10 minutong lakad) — kape at pastry',
      'Restaurant district sa Session Road (15 minuto) — international cuisine',
      'Subukan ang strawberry taho na ibinebenta sa labas ng entrance',
      'Pinakamalapit na kainan: sa paligid ng pampublikong ospital (10 minutong lakad)',
    ],
    tipsEn: [
      'Local eateries (karinderya) across Wright Park (5-min walk) — home-cooked meals from ₱80',
      'Cafes along Leonard Wood Road (10-min walk) — coffee and pastries',
      'Restaurant district at Session Road (15 min) — international cuisine',
      'Try the strawberry taho sold outside the entrance',
      'Nearest dining cluster: around the public hospital area (10-min walk)',
    ],
  },
  {
    titleFil: 'Matutuluyan (Accommodation)',
    titleEn: 'Accommodation',
    descriptionFil:
      'Maraming opsyon sa matutuluyan malapit sa Botanical Garden — mula sa budget inns at transient houses hanggang sa mid-range hotels at boutique lodges. Ang lugar sa palibot ng Leonard Wood Road at Gibraltar ay may maraming pagpipilian.',
    descriptionEn:
      'Many accommodation options near the Botanical Garden — from budget inns and transient houses to mid-range hotels and boutique lodges. The surrounding Leonard Wood Road and Gibraltar area offers plenty of choices.',
    icon: '🏨',
    tipsFil: [
      'Budget transient houses (₱500–1,000/gabi) — 10–15 minutong lakad',
      'Mid-range inns at hotels (₱1,500–3,000/gabi) — 5–10 minuto',
      'Boutique lodges at bed & breakfast (₱3,000–5,000/gabi) — 5 minuto',
      'Sa peak season (Disyembre–Pebrero), mag-book nang 2–4 na linggo nang maaga',
      'Maraming transient houses ang nag-aalok ng lutuan — pwedeng magluto ng sariling pagkain',
    ],
    tipsEn: [
      'Budget transient houses (₱500–1,000/night) — 10–15 min walk',
      'Mid-range inns and hotels (₱1,500–3,000/night) — 5–10 min walk',
      'Boutique lodges and B&Bs (₱3,000–5,000/night) — 5 min walk',
      'During peak season (December–February), book 2–4 weeks in advance',
      'Many transient houses offer kitchen facilities — cook your own meals',
    ],
  },
  {
    titleFil: 'Pamimili (Shopping & Groceries)',
    titleEn: 'Shopping & Groceries',
    descriptionFil:
      'Walang mall sa loob mismo ng Botanical Garden, ngunit may ilang souvenir shop sa entrance na nagbebenta ng local crafts, wood carvings, at strawberry products. Para sa groceries at essentials, may mga convenience store at supermarket sa malapit.',
    descriptionEn:
      'No mall within the Botanical Garden itself, but there are souvenir shops at the entrance selling local crafts, wood carvings, and strawberry products. For groceries and essentials, convenience stores and supermarkets are nearby.',
    icon: '🛍️',
    tipsFil: [
      'Souvenir stalls sa entrance — wood carvings, keychains, strawberry jam (₱50–300)',
      'Malaking shopping mall (10 minutong biyahe sa taxi) — department store, supermarket, pharmacy',
      'Convenience stores sa Leonard Wood Road (5 minutong lakad) — meryenda at inumin',
      'Baguio Public Market (15 minuto) — sariwang gulay, strawberry, pasalubong',
      'ATM: May mga ATM ng bangko sa paligid ng pampublikong ospital (10 minutong lakad)',
    ],
    tipsEn: [
      'Souvenir stalls at entrance — wood carvings, keychains, strawberry jam (₱50–300)',
      'Large shopping mall (10-min taxi ride) — department store, supermarket, pharmacy',
      'Convenience stores on Leonard Wood Road (5-min walk) — snacks and drinks',
      'Baguio Public Market (15 min) — fresh vegetables, strawberries, pasalubong',
      'ATMs: bank ATMs around the public hospital area (10-min walk)',
    ],
  },
  {
    titleFil: 'Gasolina at Pag-charge',
    titleEn: 'Fuel & Charging',
    descriptionFil:
      'May mga gasolinahan sa paligid ng Baguio. Walang dedicated EV charging station sa mismong Botanical Garden, ngunit may malalapit na gas station at ilang EV-ready na lokasyon sa siyudad.',
    descriptionEn:
      'Gas stations are available around Baguio. No dedicated EV charging station at the Botanical Garden itself, but nearby gas stations and some EV-ready locations exist in the city.',
    icon: '⛽',
    tipsFil: [
      'Gas station sa Magsaysay Avenue (5 minutong biyahe) — bukas 24 oras',
      'Gas station sa Leonard Wood Road corner (3 minutong biyahe)',
      'EV charging: May charging point sa ilang malaking shopping mall (mga 10 minutong biyahe)',
      'Magpa-full tank bago umakyat sa Baguio — ang mga gas station sa expressway ay mas mura',
      'Maraming gas station sa Baguio ang tumatanggap ng credit card at GCash',
    ],
    tipsEn: [
      'Gas station on Magsaysay Avenue (5-min drive) — open 24 hours',
      'Gas station at Leonard Wood Road corner (3-min drive)',
      'EV charging: available at some large shopping mall car parks (about 10-min drive)',
      'Fill up before driving up to Baguio — expressway gas stations are cheaper',
      'Most Baguio gas stations accept credit cards and GCash',
    ],
  },
  {
    titleFil: 'Klinika at Botika',
    titleEn: 'Clinic & Pharmacy',
    descriptionFil:
      'Ang Baguio General Hospital and Medical Center ay nasa 10 minutong lakad lamang mula sa Botanical Garden. May mga botika rin sa Leonard Wood Road para sa mga emergency at first-aid na pangangailangan.',
    descriptionEn:
      'Baguio General Hospital and Medical Center is just a 10-minute walk from the Botanical Garden. Pharmacies are also available along Leonard Wood Road for emergencies and first-aid needs.',
    icon: '🏥',
    tipsFil: [
      'Pampublikong general hospital — may emergency room, 10 minutong lakad',
      'Mga botika sa Leonard Wood Road — over-the-counter na gamot',
      'Magdala ng sariling first-aid kit para sa minor na sugat at gasgas',
      'Ang mataas na altitude (1,540m) ay maaaring magdulot ng pagkahilo — magpahinga kung kinakailangan',
    ],
    tipsEn: [
      'Public general hospital — emergency room available, 10-min walk',
      'Pharmacies on Leonard Wood Road — over-the-counter medicine',
      'Bring your own first-aid kit for minor cuts and scrapes',
      'High altitude (1,540m) may cause dizziness — rest if needed',
    ],
  },
];

// --------------- Transportation ---------------

export type TransportMethod = {
  titleFil: string;
  titleEn: string;
  descriptionFil: string;
  descriptionEn: string;
  icon: string;
  stepsFil: string[];
  stepsEn: string[];
};

export const TRANSPORT_METHODS: TransportMethod[] = [
  {
    titleFil: 'Mula sa Loakan Airport (BAG)',
    titleEn: 'From Loakan Airport (BAG)',
    descriptionFil:
      'Ang Loakan Airport ay ang pinakamalapit na airport sa Baguio, humigit-kumulang 7 km mula sa Botanical Garden. Bagama\'t limitado ang commercial flights, maaaring gumamit ng taxi o ride-hailing service mula rito.',
    descriptionEn:
      'Loakan Airport is the closest airport to Baguio, approximately 7 km from the Botanical Garden. Although commercial flights are limited, taxis and ride-hailing services can be used from here.',
    icon: '✈️',
    stepsFil: [
      '1. Paglabas ng terminal, pumunta sa designated taxi stand',
      '2. Sumakay ng taxi o mag-book ng ride-hailing service papuntang "Botanical Garden, Leonard Wood Road"',
      '3. Ang biyahe ay 15–20 minuto, depende sa trapiko',
      '4. Sabihin sa driver: "Sa Botanical Garden po, sa tapat ng Teacher\'s Camp"',
      '5. Pamasahe: humigit-kumulang ₱120–180 (taxi meter)',
      '6. Ipa-drop off sa main entrance sa Leonard Wood Road',
    ],
    stepsEn: [
      '1. Upon exiting the terminal, proceed to the designated taxi stand',
      '2. Take a taxi or book a ride-hailing car to "Botanical Garden, Leonard Wood Road"',
      '3. The ride takes 15–20 minutes, depending on traffic',
      '4. Tell the driver: "Botanical Garden, across from Teacher\'s Camp"',
      '5. Fare: approximately ₱120–180 (taxi meter)',
      '6. Drop off at the main entrance on Leonard Wood Road',
    ],
  },
  {
    titleFil: 'Mula sa Ninoy Aquino International Airport (MNL)',
    titleEn: 'From Ninoy Aquino International Airport (MNL)',
    descriptionFil:
      'Karamihan ng mga bisita ay dumarating sa NAIA sa Maynila. Mula rito, may dalawang pangunahing paraan papuntang Baguio — sa pamamagitan ng bus (pinakamurang opsyon) o pribadong sasakyan.',
    descriptionEn:
      'Most visitors arrive at NAIA in Manila. From here, there are two main ways to get to Baguio — by bus (cheapest option) or by private vehicle.',
    icon: '🛬',
    stepsFil: [
      'OPSYON A: DELUXE BUS (Pinakamadali, ~₱800–1,200, 4–5 oras)',
      '1. Mula NAIA Terminal 2 o 3, sumakay ng P2P bus papuntang PITX (₱150)',
      '2. Sa PITX, sumakay ng deluxe na intercity bus papuntang Baguio (₱650–1,000)',
      '3. Bumaba sa Baguio terminal; sumakay ng taxi papuntang Botanical Garden (₱100–150, 10 min)',
      'OPSYON B: REGULAR BUS (Pinakamura, ~₱500–700, 5–6 oras)',
      '1. Mula NAIA, sumakay ng taxi o ride-hailing service papuntang Cubao Bus Terminal (₱300–400)',
      '2. Sumakay ng regular na intercity bus papuntang Baguio (₱450–550)',
      '3. Bumaba sa Baguio terminal; sumakay ng jeep o taxi papuntang Botanical Garden',
      'OPSYON C: SARILING SASAKYAN (Pinakamabilis, 3.5–4.5 oras)',
      '1. Dumaan sa NLEX → SCTEX → TPLEX (toll: ~₱500)',
      '2. Labasan sa Pozorrubio o Rosario → Kennon Road o Marcos Highway',
      '3. Pumasok sa Baguio → sundin ang Leonard Wood Road papuntang Botanical Garden',
    ],
    stepsEn: [
      'OPTION A: DELUXE BUS (Easiest, ~₱800–1,200, 4–5 hours)',
      '1. From NAIA Terminal 2 or 3, take P2P bus to PITX (₱150)',
      '2. At PITX, take a deluxe intercity coach to Baguio (₱650–1,000)',
      '3. Disembark at Baguio terminal; take taxi to Botanical Garden (₱100–150, 10 min)',
      'OPTION B: REGULAR BUS (Cheapest, ~₱500–700, 5–6 hours)',
      '1. From NAIA, take a taxi or ride-hailing car to Cubao Bus Terminal (₱300–400)',
      '2. Board a regular intercity coach to Baguio (₱450–550)',
      '3. Disembark at Baguio terminal; take jeepney or taxi to Botanical Garden',
      'OPTION C: PRIVATE CAR (Fastest, 3.5–4.5 hours)',
      '1. Take NLEX → SCTEX → TPLEX (toll: ~₱500)',
      '2. Exit at Pozorrubio or Rosario → Kennon Road or Marcos Highway',
      '3. Enter Baguio → follow Leonard Wood Road to Botanical Garden',
    ],
  },
  {
    titleFil: 'Mula sa Clark International Airport (CRK)',
    titleEn: 'From Clark International Airport (CRK)',
    descriptionFil:
      'Ang Clark Airport sa Pampanga ay isang alternatibong airport, lalo na para sa mga galing sa ibang bahagi ng Asya. Mas malapit ito sa Baguio kaysa sa NAIA.',
    descriptionEn:
      'Clark Airport in Pampanga is an alternative gateway, especially for those from other parts of Asia. It is closer to Baguio than NAIA.',
    icon: '🛩️',
    stepsFil: [
      '1. Paglabas ng CRK, sumakay ng shuttle o taxi papuntang Dau Bus Terminal (₱200–300, 15 min)',
      '2. Sa Dau Terminal, sumakay ng intercity bus papuntang Baguio (₱400–500, 3–4 oras)',
      '3. Bumaba sa Baguio terminal; sumakay ng taxi papuntang Botanical Garden (₱100–150, 10 min)',
      '4. Alternatibo: Mag-arkila ng pribadong van mula Clark papuntang Baguio (~₱3,500–5,000, 2–3 oras)',
    ],
    stepsEn: [
      '1. From CRK, take shuttle or taxi to Dau Bus Terminal (₱200–300, 15 min)',
      '2. At Dau Terminal, board an intercity coach to Baguio (₱400–500, 3–4 hours)',
      '3. Disembark at Baguio terminal; take taxi to Botanical Garden (₱100–150, 10 min)',
      '4. Alternative: Hire a private van from Clark to Baguio (~₱3,500–5,000, 2–3 hours)',
    ],
  },
  {
    titleFil: 'Jeepney at Pampublikong Transportasyon (Mula sa Loob ng Baguio)',
    titleEn: 'Jeepney & Public Transport (From Within Baguio)',
    descriptionFil:
      'Kung nasa Baguio City ka na, ang Botanical Garden ay madaling marating sa pamamagitan ng jeepney. Ito ang pinakamurang paraan para sa mga lokal na bisita.',
    descriptionEn:
      'If you\'re already in Baguio City, the Botanical Garden is easily accessible by jeepney. This is the cheapest option for local visitors.',
    icon: '🚌',
    stepsFil: [
      '1. Mula sa Baguio City Hall o Session Road, sumakay ng jeepney na may rutang "Mines View" o "Gibraltar"',
      '2. Sabihin sa driver: "Sa Botanical Garden po" o "Sa Leonard Wood"',
      '3. Pamasahe: ₱13–15 ( minimum fare sa Baguio jeepney)',
      '4. Tagal ng biyahe: 10–15 minuto, depende sa trapiko',
      '5. Bumaba sa tapat ng entrance — may malaking sign na "Baguio Botanical Garden"',
      '6. Pabalik: Sumakay ng jeepney na may karatulang "Plaza" o "Town"',
    ],
    stepsEn: [
      '1. From Baguio City Hall or Session Road, board a jeepney with route "Mines View" or "Gibraltar"',
      '2. Tell the driver: "Botanical Garden po" or "Leonard Wood"',
      '3. Fare: ₱13–15 (minimum Baguio jeepney fare)',
      '4. Travel time: 10–15 minutes, depending on traffic',
      '5. Alight in front of the entrance — large "Baguio Botanical Garden" sign',
      '6. Return trip: Board a jeepney with sign "Plaza" or "Town"',
    ],
  },
  {
    titleFil: 'Taxi at Ride-hailing',
    titleEn: 'Taxi & Ride-Hailing',
    descriptionFil:
      'Ang taxi at ride-hailing service ay ang pinakakomportableng paraan upang marating ang Botanical Garden. Available ang mga ito sa lungsod, ngunit limitado ang mga sasakyan tuwing peak hours at maulan na araw.',
    descriptionEn:
      'Taxis and ride-hailing services are the most comfortable ways to reach the Botanical Garden. They operate in the city, but vehicle supply is limited during peak hours and rainy days.',
    icon: '🚕',
    stepsFil: [
      '1. Mag-book sa ride-hailing app: Ilagay ang "Baguio Botanical Garden" bilang destinasyon',
      '2. O kaya, sumakay ng regular na taxi — lahat ng taxi sa Baguio ay naka-meter',
      '3. Sabihin: "Botanical Garden sa Leonard Wood Road"',
      '4. Pamasahe: humigit-kumulang ₱80–150 mula sa sentro ng Baguio',
      '5. Tagal: 5–15 minuto, depende sa starting point',
      '6. Lahat ng taxi driver sa Baguio ay pamilyar sa Botanical Garden — isa ito sa pinakasikat na destinasyon',
    ],
    stepsEn: [
      '1. Book via a ride-hailing app: Enter "Baguio Botanical Garden" as destination',
      '2. Or hail a regular taxi — all Baguio taxis are metered',
      '3. Say: "Botanical Garden on Leonard Wood Road"',
      '4. Fare: approximately ₱80–150 from central Baguio',
      '5. Duration: 5–15 minutes, depending on starting point',
      '6. All Baguio taxi drivers are familiar with Botanical Garden — one of the city\'s most popular destinations',
    ],
  },
  {
    titleFil: 'Naglalakad mula sa Kalapit na Atraksyon',
    titleEn: 'Walking from Nearby Attractions',
    descriptionFil:
      'Ang Botanical Garden ay nasa magandang lokasyon — malapit sa ibang sikat na destinasyon. Mainam na isama ang pagbisita sa isang araw na walking tour.',
    descriptionEn:
      'The Botanical Garden is well-located near other popular destinations. Combine your visit in a day walking tour.',
    icon: '🚶',
    stepsFil: [
      'Wright Park → Botanical Garden: 3 minutong lakad (tumawid lamang ng Leonard Wood Road)',
      'The Mansion → Botanical Garden: 10 minutong lakad (dumaan sa Romulo Drive)',
      'Mines View Park → Botanical Garden: 20 minutong lakad (dumaan sa Gibraltar Road, pababa)',
      'Teacher\'s Camp → Botanical Garden: 7 minutong lakad (pataas sa Leonard Wood Road)',
      'Session Road → Botanical Garden: 25 minutong lakad (dumaan sa Upper Session → Leonard Wood)',
    ],
    stepsEn: [
      'Wright Park → Botanical Garden: 3-min walk (just cross Leonard Wood Road)',
      'The Mansion → Botanical Garden: 10-min walk (via Romulo Drive)',
      'Mines View Park → Botanical Garden: 20-min walk (via Gibraltar Road, downhill)',
      'Teacher\'s Camp → Botanical Garden: 7-min walk (uphill on Leonard Wood Road)',
      'Session Road → Botanical Garden: 25-min walk (via Upper Session → Leonard Wood)',
    ],
  },
];

// --------------- FAQ ---------------

export type FaqItem = {
  qFil: string;
  qEn: string;
  aFil: string;
  aEn: string;
};

export const FAQS: FaqItem[] = [
  {
    qFil: 'Ano ang Baguio Botanical Garden?',
    qEn: 'What is the Baguio Botanical Garden?',
    aFil:
      'Ang Baguio Botanical Garden ay isang 5-ektaryang pampublikong hardin sa Leonard Wood Road, Baguio City. Ito ay nagtatampok ng iba\'t ibang themed garden mula sa iba\'t ibang bansa, katutubong halaman ng Cordillera, Igorot cultural village, at sculpture garden — isang showcase ng kultura, sining, at kalikasan ng Cordillera.',
    aEn:
      'The Baguio Botanical Garden is a 5-hectare public garden on Leonard Wood Road, Baguio City. It features various themed gardens from different countries, native Cordillera plants, an Igorot cultural village, and a sculpture garden — a showcase of Cordillera culture, art, and nature.',
  },
  {
    qFil: 'Magkano ang entrance fee?',
    qEn: 'How much is the entrance fee?',
    aFil:
      'Ang entrance fee ay ₱100 para sa mga matanda at ₱50 para sa mga bata (4–12 taong gulang), estudyante (may valid ID), at senior citizen (may valid ID). Libre para sa mga batang 3 taong gulang pababa. Ang bayad ay ginagamit para sa maintenance at preservation ng hardin.',
    aEn:
      'The entrance fee is ₱100 for adults and ₱50 for children (4–12 years old), students (with valid ID), and senior citizens (with valid ID). Free for children 3 years old and below. The fee is used for garden maintenance and preservation.',
  },
  {
    qFil: 'Anong oras bukas ang Botanical Garden?',
    qEn: 'What time does the Botanical Garden open?',
    aFil:
      'Ang Botanical Garden ay bukas araw-araw mula 6:00 AM hanggang 6:00 PM, kasama ang mga holiday. Inirerekomenda na dumating nang maaga (7–10 AM) upang maiwasan ang maraming tao at masulit ang malamig na panahon ng umaga.',
    aEn:
      'The Botanical Garden is open daily from 6:00 AM to 6:00 PM, including holidays. It is recommended to arrive early (7–10 AM) to avoid crowds and enjoy the cool morning weather.',
  },
  {
    qFil: 'Bukas ba ang Baguio Botanical Garden ngayon?',
    qEn: 'Is Baguio Botanical Garden open today?',
    aFil:
      'Ang hardin ay bukas araw-araw — Lunes hanggang Linggo, kasama ang mga holiday — mula 6:00 AM hanggang 6:00 PM. Ang tanging eksepsiyon ay kapag isinuspinde ng lungsod ang pagbisita sa mga pampublikong parke dahil sa matinding panahon (typhoon signal o malakas na ulan ng habagat), kaya suriin muna ang anunsyo ng lungsod bago biyahe kung may bagyo.',
    aEn:
      'The garden is open every day — Monday to Sunday, including public holidays — from 6:00 AM to 6:00 PM. The only exceptions are days when the city suspends visits to public parks for severe weather (typhoon signal or heavy monsoon rain), so check the city advisory before travelling on stormy days.',
  },
  {
    qFil: 'Ano ang mga nasa loob ng Baguio Botanical Garden? (Directory ng parke)',
    qEn: 'What is inside the Baguio Botanical Garden? (Park directory)',
    aFil:
      'Ang 5-ektaryang lugar ay nahahati sa walong themed section: Chinese Garden, Japanese Garden, Korean Garden, Philippine Native Plant Garden, Cordillera Village (Igorot cultural village), Tropical Rain Garden, International Friendship Garden, at Sculpture Garden. Ang mga pasilidad — palikuran, accessible na palikuran, upuan, ticket booth at pangunahing entrance — ay malapit sa gate ng Leonard Wood Road.',
    aEn:
      'The 5-hectare site is divided into eight themed sections: Chinese Garden, Japanese Garden, Korean Garden, Philippine Native Plant Garden, Cordillera Village (Igorot cultural village), Tropical Rain Garden, International Friendship Garden and the Sculpture Garden. Facilities — restrooms, an accessible toilet, seating areas, the ticket booth and the main entrance — are all near the Leonard Wood Road gate.',
  },
  {
    qFil: 'Ang Baguio Botanical Garden ba ay dati ring tinawag na Imelda Park?',
    qEn: 'Is Baguio Botanical Garden the same place as Imelda Park?',
    aFil:
      'Oo. Ang lugar ay kilala bilang Imelda Park noong dekada 1970 at pinalitan ng pangalan bilang Baguio Botanical Garden noong 1986. Maaaring gamitin pa rin ng mga lumang mapa, guidebook at signage ng jeepney ang dating pangalan — iisang 5-ektaryang hardin sa Leonard Wood Road ang tinutukoy nito.',
    aEn:
      'Yes. The site was known as Imelda Park during the 1970s and was renamed Baguio Botanical Garden in 1986. Older maps, guidebooks and jeepney signage may still use the former name — it is the same 5-hectare garden on Leonard Wood Road.',
  },
  {
    qFil: 'Magkano ang entrance fee at sino ang may diskwento?',
    qEn: 'How much is the entrance fee and who gets a discount?',
    aFil:
      'Ang karaniwang bayad ay ₱100 para sa mga matanda at ₱50 para sa mga batang 4–12 taong gulang, estudyante at senior citizen na may valid ID; libre ang mga batang 3 taong gulang pababa. Magdala ng cash — maaaring hindi tumanggap ng card ang ticket booth. Maaaring magbago ang mga rate, kaya kumpirmahin sa gate bago pumasok.',
    aEn:
      'The standard rate is ₱100 for adults and ₱50 for children aged 4–12, students and senior citizens with a valid ID; children 3 years old and below enter free. Bring cash — the ticket booth may not accept cards. Rates can change, so confirm at the gate before entering.',
  },
  {
    qFil: 'Paano pumunta sa Baguio Botanical Garden mula sa Burnham Park o Session Road?',
    qEn: 'How do I get to Baguio Botanical Garden from Burnham Park or Session Road?',
    aFil:
      'Ang hardin ay nasa Leonard Wood Road, humigit-kumulang 2 km mula sa Burnham Park. Ang taxi o ride-hailing ay tumatagal ng 5–10 minuto; ang mga jeepney na papuntang Wright Park o The Mansion ay dumadaan sa entrance. Ang paglakad mula sa Session Road ay humigit-kumulang 20–25 minuto paakyat.',
    aEn:
      'The garden sits on Leonard Wood Road, about 2 km from Burnham Park. A taxi or ride-hailing trip takes 5–10 minutes; jeepneys bound for Wright Park or The Mansion pass the entrance. Walking from Session Road takes roughly 20–25 minutes uphill.',
  },
  {
    qFil: 'Maaari bang magdala ng pagkain at mag-picnic?',
    qEn: 'Can I bring food and have a picnic?',
    aFil:
      'Oo, maaaring magdala ng pagkain at mag-picnic sa mga itinalagang picnic area. Gayunpaman, mangyaring panatilihing malinis ang lugar — magdala ng sariling basurahan o itapon ang basura sa mga designated trash bin. Bawal ang pag-inom ng alak sa loob ng hardin.',
    aEn:
      'Yes, you can bring food and picnic in designated picnic areas. However, please keep the area clean — bring your own trash bag or dispose of waste in designated trash bins. Alcohol consumption is prohibited inside the garden.',
  },
  {
    qFil: 'Pwede bang mag-picture ng kasal o prenup shoot?',
    qEn: 'Can we have a wedding or prenup photoshoot?',
    aFil:
      'Oo, sikat ang Botanical Garden para sa prenup at wedding photoshoots dahil sa magandang tanawin at iba\'t ibang theme gardens. Kailangan ng special permit at may karagdagang bayad. Makipag-ugnayan sa opisina ng Botanical Garden para sa reservation at detalye.',
    aEn:
      'Yes, the Botanical Garden is popular for prenup and wedding photoshoots due to its beautiful scenery and varied themed gardens. A special permit is required and there is an additional fee. Contact the Botanical Garden office for reservations and details.',
  },
  {
    qFil: 'May restawran ba sa loob ng Botanical Garden?',
    qEn: 'Are there restaurants inside the Botanical Garden?',
    aFil:
      'Wala pong full-service na restawran sa loob ng Botanical Garden. May nagtitinda ng meryenda, ice cream, at strawberry taho sa labas ng entrance. Maraming kainan — mula sa karinderya hanggang sa restaurant — sa paligid sa loob ng 5–15 minutong lakad.',
    aEn:
      'There are no full-service restaurants inside the Botanical Garden. Vendors selling snacks, ice cream, and strawberry taho can be found outside the entrance. Plenty of dining options — from local eateries to restaurants — are within a 5–15 minute walk.',
  },
  {
    qFil: 'Accessible ba ang Botanical Garden para sa may kapansanan (PWD)?',
    qEn: 'Is the Botanical Garden accessible for persons with disabilities (PWDs)?',
    aFil:
      'Ang mga pangunahing daanan ay sementado at may rampa sa entrance, kaya accessible ito para sa wheelchair users. Gayunpaman, ang ilang bahagi (tulad ng Cordillera Village) ay may hindi pantay na lupa at hagdan. Inirerekomenda na may kasamang tagatulong. May accessible toilet malapit sa entrance.',
    aEn:
      'The main pathways are paved and there are ramps at the entrance, making it accessible for wheelchair users. However, some areas (such as the Cordillera Village) have uneven terrain and stairs. It is recommended to have a companion. There is an accessible toilet near the entrance.',
  },
  {
    qFil: 'Pwede bang magdala ng alagang hayop?',
    qEn: 'Can I bring my pet?',
    aFil:
      'Hindi pinapayagan ang mga alagang hayop sa loob ng Botanical Garden upang protektahan ang mga halaman at mapanatili ang kalinisan. Exception: certified service animals para sa mga taong may kapansanan.',
    aEn:
      'Pets are not allowed inside the Botanical Garden to protect the plants and maintain cleanliness. Exception: certified service animals for persons with disabilities.',
  },
  {
    qFil: 'Ano ang pinakamagandang panahon para bumisita?',
    qEn: 'What is the best time of year to visit?',
    aFil:
      'Ang pinakamagandang panahon ay mula Nobyembre hanggang Mayo (tag-init at taglamig sa Pilipinas) — malamig ang panahon, malinaw ang kalangitan, at maraming halaman ang namumukadkad. Tuwing Pebrero, kasabay ng Panagbenga Festival, mas maraming tao ngunit mas makulay ang hardin. Tuwing tag-ulan (Hunyo–Oktubre), mas kaunti ang bisita ngunit maaaring maputik ang ilang daanan.',
    aEn:
      'The best time is from November to May (dry and cool season in the Philippines) — cool weather, clear skies, and many plants are in bloom. During February, coinciding with the Panagbenga Festival, crowds are larger but the garden is more colorful. During the rainy season (June–October), there are fewer visitors but some paths may be muddy.',
  },
  {
    qFil: 'Gaano katagal ang kailangan para sa pagbisita?',
    qEn: 'How much time is needed for a visit?',
    aFil:
      'Inirerekomenda ang 2–3 oras para sa kumpletong paglilibot — kasama na ang paglalakad sa lahat ng themed garden, pagbisita sa Cordillera Village, pagkuha ng larawan, at kaunting pahinga sa picnic area. Kung nagmamadali, maaaring gawin sa loob ng 1–1.5 oras ang mga pangunahing atraksyon.',
    aEn:
      '2–3 hours is recommended for a complete tour — including walking through all themed gardens, visiting the Cordillera Village, taking photos, and a short rest at the picnic area. If in a hurry, the main attractions can be covered in 1–1.5 hours.',
  },
  {
    qFil: 'Paano pumunta sa Botanical Garden mula sa Maynila?',
    qEn: 'How to get to the Botanical Garden from Manila?',
    aFil:
      'Sumakay ng intercity bus mula Cubao o Pasay papuntang Baguio (₱450–1,000, 4–6 oras). Pagdating sa Baguio terminal, sumakay ng taxi (₱100–150) o jeepney (₱13–15) papuntang Botanical Garden sa Leonard Wood Road. Ang pinakamadaling ruta ay ang mga deluxe na biyahe mula sa mga pangunahing terminal patungong Baguio.',
    aEn:
      'Take an intercity coach from Cubao or Pasay to Baguio (₱450–1,000, 4–6 hours). Upon arrival at the Baguio terminal, take a taxi (₱100–150) or jeepney (₱13–15) to the Botanical Garden on Leonard Wood Road. Deluxe services departing from the main terminals are the easiest option.',
  },
  {
    qFil: 'Ano ang pinakamagandang panahon para bisitahin ang Botanical Garden?',
    qEn: 'When is the best time to visit the Botanical Garden?',
    aFil:
      'Ang cool dry season (Disyembre–Pebrero) ay nagbibigay ng pinakamalamig na hangin at pinakamatingkad na flower display, ngunit ito rin ang pinakamataong panahon. Ang shoulder season (Nobyembre at huling bahagi ng Mayo) ay nag-aalok ng balanse ng magandang panahon at kaunting tao. Ang tag-ulan (Hunyo–Oktubre) ay pinakatahimik at pinakaluntian, ngunit magdala ng rain gear at suriin muna ang lagay ng kalsada sa bundok.',
    aEn:
      'The cool dry season (December–February) brings the coldest air and the brightest flower displays, but it is also the busiest. The shoulder season (November and late May) offers a balance of pleasant weather and fewer visitors. The rainy season (June–October) is the quietest and greenest, but bring rain gear and check mountain road conditions first.',
  },
  {
    qFil: 'Kailangan bang magdala ng payong o jacket?',
    qEn: 'Should I bring an umbrella or jacket?',
    aFil:
      'Oo — dahil sa altitude na mahigit 1,400 metro, maaaring bumaba ang temperatura sa 8–12°C sa madaling araw tuwing Disyembre hanggang Pebrero, at madalas ang pag-ulan sa hapon mula Hunyo hanggang Oktubre. Ang layered na damit at folding umbrella o light rain jacket ay praktikal sa halos buong taon.',
    aEn:
      'Yes — because of the 1,400m+ altitude, temperatures can fall to 8–12°C before dawn between December and February, and afternoon rain is common from June to October. Layered clothing plus a folding umbrella or light rain jacket is practical almost all year.',
  },
  {
    qFil: 'Ang Botanical Garden ba ay accessible para sa wheelchair o stroller?',
    qEn: 'Is the Botanical Garden accessible for wheelchairs or strollers?',
    aFil:
      'Ang pangunahing daanan ay sapat na lapad para sa wheelchair at stroller, at may accessible na palikuran malapit sa entrance. Gayunpaman, may mga bahaging may hagdan at slope patungo sa ilang themed garden. Mas mainam na dumating sa tuyong panahon at magtanong sa entrance tungkol sa kasalukuyang kondisyon ng mga daanan.',
    aEn:
      'The main paths are wide enough for wheelchairs and strollers, and an accessible restroom is located near the entrance. However, some sections have steps and slopes toward the themed gardens. Visiting in dry weather is better, and it is worth asking at the entrance about current path conditions.',
  },
  {
    qFil: 'Gaano katagal dapat ang pagbisita sa Botanical Garden?',
    qEn: 'How long should I spend at the Botanical Garden?',
    aFil:
      'Karaniwang 1.5–2 oras para sa isang kumpletong paglilibot sa walong themed garden. Kung kasama mo ang mga bata, maglaan ng 2–3 oras; para sa photography, 3–4 oras. Madaling pagsamahin ang pagbisita sa Wright Park at The Mansion dahil ilang minuto lang ang layo nito.',
    aEn:
      'Usually 1.5–2 hours for a complete loop of the eight themed gardens. With children, allow 2–3 hours; for photography, 3–4 hours. The visit combines easily with Wright Park and The Mansion, which are only minutes away.',
  },
];

// --------------- Tips ---------------

export type Tip = {
  titleFil: string;
  titleEn: string;
  bodyFil: string;
  bodyEn: string;
  icon: string;
};

export const TIPS: Tip[] = [
  {
    titleFil: 'Dumating nang maaga',
    titleEn: 'Arrive Early',
    bodyFil:
      'Dumating sa pagitan ng 7–10 AM upang maiwasan ang maraming tao at maranasan ang pinakamalamig na panahon. Ang umaga rin ang pinakamagandang oras para sa photography — malambot ang liwanag at hindi pa matindi ang araw.',
    bodyEn:
      'Arrive between 7–10 AM to avoid crowds and experience the coolest weather. Morning is also the best time for photography — soft light and the sun isn\'t too harsh yet.',
    icon: '🌅',
  },
  {
    titleFil: 'Magsuot ng komportableng damit at sapatos',
    titleEn: 'Wear Comfortable Clothes & Shoes',
    bodyFil:
      'Ang Botanical Garden ay may mga paakyat at pababang daanan. Magsuot ng komportableng walking shoes at magdala ng jacket — ang temperatura sa Baguio ay maaaring bumaba sa 15°C sa umaga.',
    bodyEn:
      'The Botanical Garden has uphill and downhill paths. Wear comfortable walking shoes and bring a jacket — Baguio temperatures can drop to 15°C in the morning.',
    icon: '👟',
  },
  {
    titleFil: 'Subukan ang tradisyonal na kasuotan',
    titleEn: 'Try Traditional Attire',
    bodyFil:
      'Sa Cordillera Village, maaaring magrenta ng tradisyonal na Igorot attire (bahag, tapis, headdress) para sa ₱50–100. Ito ay isang masayang karanasan at magandang souvenir photo. Ang bayad ay nakakatulong sa lokal na komunidad.',
    bodyEn:
      'At the Cordillera Village, you can rent traditional Igorot attire (bahag, tapis, headdress) for ₱50–100. It\'s a fun experience and makes a great souvenir photo. The fee supports the local community.',
    icon: '👘',
  },
  {
    titleFil: 'Magdala ng pera (cash)',
    titleEn: 'Bring Cash',
    bodyFil:
      'Karamihan sa mga nagtitinda sa loob at labas ng garden ay cash-only. Walang ATM sa loob ng hardin. Magdala ng sapat na cash para sa entrance fee, meryenda, souvenir, at photo rental.',
    bodyEn:
      'Most vendors inside and outside the garden are cash-only. There is no ATM inside the garden. Bring enough cash for entrance fees, snacks, souvenirs, and photo rentals.',
    icon: '💵',
  },
  {
    titleFil: 'Iwasan ang peak hours tuwing weekend',
    titleEn: 'Avoid Weekend Peak Hours',
    bodyFil:
      'Tuwing Sabado at Linggo, mas maraming tao mula 10 AM hanggang 3 PM. Kung maaari, bumisita sa weekday — mas tahimik at mas masisiyahan sa hardin nang walang nagmamadali.',
    bodyEn:
      'On Saturdays and Sundays, crowds peak from 10 AM to 3 PM. If possible, visit on a weekday — it\'s quieter and you can enjoy the garden without rushing.',
    icon: '📅',
  },
  {
    titleFil: 'Pagsamahin sa kalapit na atraksyon',
    titleEn: 'Combine with Nearby Attractions',
    bodyFil:
      'Dahil malapit ang Botanical Garden sa Wright Park (3 min), The Mansion (10 min), at Mines View Park (20 min), mainam na pagsamahin ang mga ito sa isang araw ng paglilibot. Maaaring magsimula sa Botanical Garden sa umaga, dumaan sa Wright Park, at magtapos sa Mines View.',
    bodyEn:
      'Since the Botanical Garden is near Wright Park (3 min), The Mansion (10 min), and Mines View Park (20 min), it\'s ideal to combine them in a day tour. Start at the Botanical Garden in the morning, go to Wright Park, and end at Mines View.',
    icon: '🗺️',
  },
  {
    titleFil: 'Igalang ang kultura at kapaligiran',
    titleEn: 'Respect Culture & Environment',
    bodyFil:
      'Ang Botanical Garden ay isang cultural at natural heritage site. Huwag pumitas ng bulaklak, huwag umakyat sa mga sculpture, at panatilihing malinis ang lugar. Ang mga Igorot cultural displays ay sagisag ng mayamang tradisyon — tratuhin ang mga ito nang may paggalang.',
    bodyEn:
      'The Botanical Garden is a cultural and natural heritage site. Do not pick flowers, do not climb on sculptures, and keep the area clean. The Igorot cultural displays represent rich traditions — treat them with respect.',
    icon: '🙏',
  },
];

// --------------- Gallery Images ---------------

export const GALLERY_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/gallery/baguio-botanical-garden-${i + 1}.jpg`,
  altFil: `Baguio Botanical Garden — tanawin ${i + 1} sa Baguio, Pilipinas`,
  altEn: `Baguio Botanical Garden — Botanical Garden view ${i + 1} in Baguio, Philippines`,
}));

// --------------- Nearby Attractions ---------------

export type NearbyAttraction = {
  nameFil: string;
  nameEn: string;
  distanceFil: string;
  distanceEn: string;
  descriptionFil: string;
  descriptionEn: string;
  icon: string;
};

export const NEARBY: NearbyAttraction[] = [
  {
    nameFil: 'Wright Park',
    nameEn: 'Wright Park',
    distanceFil: '3 minutong lakad',
    distanceEn: '3-min walk',
    descriptionFil:
      'Sikat na parke na may "Pool of Pines" at horseback riding. Isang magandang lugar para sa pamilya — tumawid lamang ng Leonard Wood Road.',
    descriptionEn:
      'Popular park with the "Pool of Pines" and horseback riding. A great family destination — just cross Leonard Wood Road.',
    icon: '🐴',
  },
  {
    nameFil: 'The Mansion',
    nameEn: 'The Mansion',
    distanceFil: '10 minutong lakad',
    distanceEn: '10-min walk',
    descriptionFil:
      'Ang opisyal na summer residence ng Pangulo ng Pilipinas. Ang gate area ay bukas para sa publiko at sikat para sa picture-taking.',
    descriptionEn:
      'The official summer residence of the President of the Philippines. The gate area is open to the public and popular for photos.',
    icon: '🏰',
  },
  {
    nameFil: 'Mines View Park',
    nameEn: 'Mines View Park',
    distanceFil: '20 minutong lakad',
    distanceEn: '20-min walk',
    descriptionFil:
      'Observation deck na may nakamamanghang tanawin ng mga abandonadong minahan at kabundukan. Sikat din para sa pagsusuot ng tradisyonal na Igorot attire.',
    descriptionEn:
      'Observation deck with stunning views of abandoned mines and mountains. Also popular for wearing traditional Igorot attire.',
    icon: '⛰️',
  },
  {
    nameFil: 'Good Shepherd Convent',
    nameEn: 'Good Shepherd Convent',
    distanceFil: '8 minutong biyahe',
    distanceEn: '8-min drive',
    descriptionFil:
      'Sikat na pasalubong center na pinapatakbo ng mga madre — kilala sa kanilang ube jam, strawberry jam, at peanut brittle.',
    descriptionEn:
      'Famous pasalubong center run by nuns — known for their ube jam, strawberry jam, and peanut brittle.',
    icon: '🍓',
  },
  {
    nameFil: "Teacher's Camp",
    nameEn: "Teacher's Camp",
    distanceFil: '7 minutong lakad',
    distanceEn: '7-min walk',
    descriptionFil:
      'Isang makasaysayang lugar na itinayo noong 1908 para sa training ng mga guro. Ang arkitektura ay American colonial style na may magandang pine tree surroundings.',
    descriptionEn:
      'A historic site built in 1908 for teacher training. The architecture is American colonial style with beautiful pine tree surroundings.',
    icon: '🏫',
  },
  {
    nameFil: 'Camp John Hay',
    nameEn: 'Camp John Hay',
    distanceFil: '10 minutong biyahe',
    distanceEn: '10-min drive',
    descriptionFil:
      'Dating US military rest and recreation facility na ngayon ay resort at eco-tourism destination. May golf course, trails, at historical landmarks.',
    descriptionEn:
      'Former US military rest and recreation facility, now a resort and eco-tourism destination. Features golf course, trails, and historical landmarks.',
    icon: '🌲',
  },
];

// --------------- History Content ---------------

export type HistoryPeriod = {
  yearFil: string;
  yearEn: string;
  titleFil: string;
  titleEn: string;
  bodyFil: string;
  bodyEn: string;
};

export const HISTORY_TIMELINE: HistoryPeriod[] = [
  {
    yearFil: 'Bago ang 1900s',
    yearEn: 'Before the 1900s',
    titleFil: 'Lupain ng mga Ibaloi at Kankanaey',
    titleEn: 'Land of the Ibaloi & Kankanaey',
    bodyFil:
      'Bago ito naging hardin, ang lugar ay bahagi ng pine forest at watershed na nasa loob ng ancestral domain ng mga Ibaloi at Kankanaey. Ang mga pine tree ay pinapangalagaan bilang source ng kahoy, gamot, at proteksyon laban sa pagguho ng lupa sa matatarik na dalisdis.',
    bodyEn:
      'Before it became a garden, the site was part of the pine forest and watershed within the ancestral domain of the Ibaloi and Kankanaey peoples. The pines were managed as a source of timber, medicine, and protection against erosion on steep slopes.',
  },
  {
    yearFil: '1900–1909',
    yearEn: '1900–1909',
    titleFil: 'Plano ni Burnham para sa Baguio',
    titleEn: 'The Burnham Plan for Baguio',
    bodyFil:
      'Habang itinatayo ang Baguio bilang summer capital, ang plano ng arkitekto at urban planner na si Daniel Burnham ay naglaan ng malaking bahagi ng lungsod para sa mga parke at open space. Ang mga nursery site gaya ng lugar na ito ay ginamit upang palakihin ang mga puno at halaman para sa bagong kalsada at parke.',
    bodyEn:
      'As Baguio was built as a summer capital, the plan by architect and urban planner Daniel Burnham reserved large areas of the city for parks and open space. Nursery sites such as this one were used to grow the trees and plants needed for the new roads and parks.',
  },
  {
    yearFil: 'Maagang 1900s',
    yearEn: 'Early 1900s',
    titleFil: 'Panahon ng mga Amerikano',
    titleEn: 'American Colonial Era',
    bodyFil:
      'Itinatag ng mga Amerikano bilang bahagi ng plano para sa Baguio bilang "Summer Capital" ng Pilipinas. Orihinal na ginamit bilang nursery para sa mga halaman at puno na gagamitin sa pagpapaganda ng bagong lungsod.',
    bodyEn:
      'Established by the Americans as part of the plan for Baguio as the "Summer Capital" of the Philippines. Originally used as a nursery for plants and trees to beautify the new city.',
  },
  {
    yearFil: '1941–1945',
    yearEn: '1941–1945',
    titleFil: 'Panahon ng Digmaan',
    titleEn: 'The War Years',
    bodyFil:
      'Sa panahon ng Ikalawang Digmaang Pandaigdig, ang Baguio ay naging sentro ng administrasyon at kalaunan ay dumanas ng matinding pinsala sa pagpapalaya ng lungsod noong 1945. Ang mga pampublikong parke at nursery ay napabayaan, at maraming koleksyon ng halaman ang nawala bago ang muling pagtatanim noong mga sumunod na dekada.',
    bodyEn:
      'During the Second World War, Baguio became an administrative centre and later suffered heavy damage during the liberation of the city in 1945. Public parks and nurseries were neglected, and many plant collections were lost before replanting in the following decades.',
  },
  {
    yearFil: '1950s–1960s',
    yearEn: '1950s–1960s',
    titleFil: 'Panahon ng Pagpapalawak',
    titleEn: 'Expansion Era',
    bodyFil:
      'Ang hardin ay pinalawak at ginawang isang pormal na botanical collection. Ipinakilala ang mga exotic at native na species. Ang lugar ay naging popular na destinasyon para sa mga mag-aaral na nag-aaral ng botany at mga pamilyang nagpipiknik.',
    bodyEn:
      'The garden was expanded and transformed into a formal botanical collection. Exotic and native species were introduced. The area became a popular destination for botany students and picnicking families.',
  },
  {
    yearFil: '1970s',
    yearEn: '1970s',
    titleFil: 'Panahon ng Imelda Park',
    titleEn: 'The Imelda Park Era',
    bodyFil:
      'Kilala noon bilang "Imelda Park" — ipinangalan kay dating First Lady Imelda Marcos. Sa panahong ito, maraming estruktura at sculpture ang idinagdag bilang bahagi ng kanyang beautification program sa buong bansa.',
    bodyEn:
      'Known as "Imelda Park" — named after former First Lady Imelda Marcos. During this period, many structures and sculptures were added as part of her nationwide beautification program.',
  },
  {
    yearFil: '1980s–1990s',
    yearEn: '1980s–1990s',
    titleFil: 'Pagbabagong Pangalan at Pagpapanibago',
    titleEn: 'Renaming & Renewal',
    bodyFil:
      'Pagkatapos ng EDSA Revolution noong 1986, pinalitan ang pangalan mula sa "Imelda Park" tungo sa "Baguio Botanical Garden." Nagsimula ang mga pagsisikap na gawing showcase ng katutubong kultura ng Cordillera at biodiversity.',
    bodyEn:
      'After the 1986 EDSA Revolution, renamed from "Imelda Park" to "Baguio Botanical Garden." Efforts began to transform it into a showcase of indigenous Cordillera culture and biodiversity.',
  },
  {
    yearFil: '1990',
    yearEn: '1990',
    titleFil: 'Lindol sa Luzon at Rehabilitasyon',
    titleEn: 'The Luzon Earthquake & Rehabilitation',
    bodyFil:
      'Ang malakas na lindol noong Hulyo 1990 ay nagdulot ng malawakang pinsala sa Baguio, kabilang ang mga pampublikong gusali, kalsada, at parke. Ang mga sumunod na taon ng rehabilitasyon ay nagbukas ng pagkakataon upang muling ayusin ang mga pampublikong luntiang espasyo at palakasin ang papel ng hardin bilang evacuation-friendly na open space.',
    bodyEn:
      'The strong July 1990 earthquake caused widespread damage across Baguio, including public buildings, roads, and parks. The rehabilitation years that followed reopened the question of how to reorganise the city public green spaces and strengthen the garden role as an evacuation-friendly open area.',
  },
  {
    yearFil: '2000s–Kasalukuyan',
    yearEn: '2000s–Present',
    titleFil: 'Modernong Botanical Garden',
    titleEn: 'Modern Botanical Garden',
    bodyFil:
      'Ang hardin ay patuloy na pinaunlad bilang isang pangunahing tourist destination at educational resource. Ang mga international friendship garden ay idinagdag bilang simbolo ng relasyon ng Baguio sa iba\'t ibang bansa. Ang Cordillera Village ay nagbibigay-buhay sa tradisyonal na kultura ng Igorot.',
    bodyEn:
      'The garden continues to be developed as a major tourist destination and educational resource. International friendship gardens were added as symbols of Baguio\'s relationships with various countries. The Cordillera Village brings traditional Igorot culture to life.',
  },
];

// --------------- Legends & Stories ---------------

export type Story = {
  titleFil: string;
  titleEn: string;
  bodyFil: string;
  bodyEn: string;
  icon: string;
};

export const LEGENDS: Story[] = [
  {
    titleFil: 'Ang Alamat ng Pine Trees ng Baguio',
    titleEn: 'The Legend of Baguio\'s Pine Trees',
    bodyFil:
      'Ayon sa oral tradition ng mga Ibaloi, ang mga unang pine tree ay mga higanteng mandirigma mula sa kalangitan na pinili na manatili sa lupa upang protektahan ang mga tao ng kabundukan. Binigyan sila ni Kabunian (ang Diyos ng mga Igorot) ng mga katawang kahoy upang mabuhay magpakailanman, at ang kanilang mga dahong karayom ay nagpapaalala ng talim ng kanilang mga nakaraang sandata. Ang mga pine forest sa palibot ng Botanical Garden ay sinasabing mga inapo ng mga sinaunang mandirigmang ito.',
    bodyEn:
      'According to Ibaloi oral tradition, the first pine trees were giant warriors from the sky who chose to remain on earth to protect the mountain people. Kabunian (the Igorot God) gave them wooden bodies to live forever, and their needle-like leaves remind us of the sharpness of their former weapons. The pine forests surrounding the Botanical Garden are said to be descendants of these ancient warriors.',
    icon: '🌲',
  },
  {
    titleFil: 'Ang Diwata ng mga Bulaklak',
    titleEn: 'The Spirit of the Flowers',
    bodyFil:
      'Isang kuwentong Ibaloi ang nagsasalaysay tungkol kay "Bangan," isang diwata na nakatira sa lugar na ngayon ay Botanical Garden. Siya ang tagapag-alaga ng lahat ng bulaklak at nagsisiguro na ang bawat halaman ay namumulaklak sa tamang panahon. Sinasabi na tuwing madaling araw, kapag ang unang sinag ng araw ay dumampi sa mga bulaklak, maririnig ang mahinang pag-awit ni Bangan. Ang iba\'t ibang kulay ng mga bulaklak sa hardin ay sinasabing regalo niya sa mga tao ng Baguio.',
    bodyEn:
      'An Ibaloi tale tells of "Bangan," a nature spirit who dwells in what is now the Botanical Garden. She was the guardian of all flowers and ensured every plant bloomed at its proper time. It is said that at dawn, when the first rays of sunlight touch the flowers, Bangan\'s soft singing can be heard. The diverse colors of the garden\'s flowers are said to be her gift to the people of Baguio.',
    icon: '🧚',
  },
  {
    titleFil: 'Ang Hiwaga ng Friendship Garden',
    titleEn: 'The Mystery of the Friendship Garden',
    bodyFil:
      'Noong 1980s, nang unang itatag ang International Friendship Garden, isang matandang mambubulay (storyteller) mula sa Ifugao ang nagsabi: "Ang mga halaman mula sa iba\'t ibang bansa ay magsasama-sama, at ang kanilang mga ugat ay maghahabi ng di-nakikitang tulay sa pagitan ng mga kultura." Ngayon, ang Friendship Garden ay may mga halaman mula sa Tsina, Japan, Korea, Thailand, at iba pang bansa — lahat ay lumalago nang magkakasama sa iisang lupa ng Cordillera, katulad ng propesiya ng mambubulay.',
    bodyEn:
      'In the 1980s, when the International Friendship Garden was first established, an elderly Ifugao storyteller said: "Plants from different nations will grow together, and their roots will weave an invisible bridge between cultures." Today, the Friendship Garden hosts plants from China, Japan, Korea, Thailand, and other countries — all growing together in the same Cordillera soil, just as the storyteller prophesied.',
    icon: '🌏',
  },
  {
    titleFil: 'Ang Misteryo ng mga Igorot Sculpture',
    titleEn: 'The Mystery of the Igorot Sculptures',
    bodyFil:
      'Ang mga bronze sculpture ni Ben Hur Villanueva sa Sculpture Garden ay sinasabing may "espiritu ng kabundukan." Ayon sa mga lokal, kapag gabi at ang buong buwan ay nagniningning, ang mga sculpture ay tila gumagalaw — isang ilusyon na likha ng interplay ng liwanag at anino sa bronse. Sinasabi na ito ay paraang ginamit ng artist upang ipakita na ang kultura ng Cordillera ay hindi static — ito ay patuloy na humihinga at gumagalaw sa modernong panahon.',
    bodyEn:
      'Ben Hur Villanueva\'s bronze sculptures in the Sculpture Garden are said to possess "the spirit of the highlands." According to locals, at night under a full moon, the sculptures appear to move — an illusion created by the interplay of light and shadow on bronze. It is said that this was the artist\'s way of showing that Cordillera culture is not static — it continues to breathe and move in modern times.',
    icon: '🗿',
  },
  {
    titleFil: 'Ang Pinagmulan ng Hamog ng Baguio',
    titleEn: 'Where the Fog of Baguio Comes From',
    bodyFil:
      'Isang sikat na kuwentong bayan ang nagpapaliwanag kung bakit palaging nakabalot sa hamog ang lungsod. Ayon sa mga matatanda, ang ulap ay hininga ng kabundukan na bumababa tuwing umaga upang suriin kung maayos pa ang mga puno. Kapag nawala ang hamog nang mas maaga kaysa karaniwan, sinasabi nilang "naghihintay ang bundok" — palatandaan na dapat maghanda ang mga magsasaka sa pagbabago ng panahon.',
    bodyEn:
      'A popular folktale explains why the city is so often wrapped in fog. According to elders, the cloud is the breath of the mountains descending each morning to check that the trees are still well. When the fog lifts earlier than usual, they say the mountain is "waiting" — a sign for farmers to prepare for a change in the weather.',
    icon: '🌫️',
  },
  {
    titleFil: 'Ang Unang Binhi',
    titleEn: 'The First Seed',
    bodyFil:
      'Isang kwento ng mga manggagawa sa nursery ang nagsasabing ang unang punong itinanim sa lugar ay isang Benguet pine na inilipat mula sa mas mataas na dalisdis. Sinasabi na hindi ito namatay kahit ilang beses na inilipat, kaya ginamit ito bilang "mother tree" para sa mga punla ng buong lungsod. Ang kwento ay paalala na ang pagtatanim ng puno ay gawaing ipinapasa mula sa isang henerasyon patungo sa susunod.',
    bodyEn:
      'A nursery workers story says the first tree planted here was a Benguet pine moved down from a higher slope. It is said to have survived several transplantings, and was used as a "mother tree" for seedlings across the city. The story is a reminder that tree planting is work passed from one generation to the next.',
    icon: '🌱',
  },
];

// --------------- Disclaimer ---------------

export const DISCLAIMER_FIL = [
  'Ang website na ito ay isang independiyenteng, hindi pangkomersyal na proyektong pang-impormasyon para sa mga turista. Wala itong kaugnayan sa anumang ahensya ng gobyerno o opisyal na organisasyon.',
  'Ang mga impormasyon tungkol sa atraksyon ay sinuri at inihambing sa mga pampublikong sanggunian mula sa Baguio City Tourism Office, Department of Tourism (DOT) — Cordillera Administrative Region, at opisyal na website ng Lungsod ng Baguio. Walang anumang komersyal na rekomendasyon.',
  'Ang lahat ng mga larawang ipinapakita sa website na ito ay pag-aari ng kani-kanilang orihinal na photographer. Ang karapatang-ari at copyright ay nananatili sa mga lumikha ng larawan.',
  'Ang rating, bilang ng review, at mga sipi ng review ay nagmula sa mga pampublikong review ng mga gumagamit ng Google Maps, na na-sync noong Setyembre 2026. Ang karapatang-ari ay nananatili sa mga orihinal na may-akda at sa Google Maps; ang mga ito ay ipinapakita lamang sa pahina at hindi isinama sa structured data ng site.',
];

export const DISCLAIMER_EN = [
  'This website is an independent, non-commercial tourist information project. It is not affiliated with any government agency or official organization.',
  'Attraction information has been verified and cross-referenced with public sources from the Baguio City Tourism Office, the Department of Tourism (DOT) — Cordillera Administrative Region, and the official Baguio City website. No commercial recommendations are included.',
  'All images displayed on this website are the property of their respective original photographers. Rights and copyright remain with the image creators.',
  'The rating, review count, and quoted reviews originate from public Google Maps user reviews, synced September 2026. Copyright remains with the original authors and Google Maps; they are shown on the page only and are not included in this site\'s structured data.',
];

// --------------- Seasonal Visit Strategy ---------------

export type SeasonStrategy = {
  seasonFil: string;
  seasonEn: string;
  periodFil: string;
  periodEn: string;
  weatherFil: string;
  weatherEn: string;
  crowdFil: string;
  crowdEn: string;
  strategyFil: string;
  strategyEn: string;
  bringFil: string;
  bringEn: string;
  highlightFil: string;
  highlightEn: string;
  icon: string;
};

export const SEASON_STRATEGY: SeasonStrategy[] = [
  {
    seasonFil: 'Malamig na Tag-init (Cool Dry)',
    seasonEn: 'Cool Dry Season',
    periodFil: 'Disyembre – Pebrero',
    periodEn: 'December – February',
    weatherFil:
      'Pinakamalamig na panahon: karaniwang 8–12°C sa madaling araw at 18–22°C sa tanghali. Mababa ang ulan, ngunit madalas ang makapal na hamog sa umaga.',
    weatherEn:
      'Coolest period: typically 8–12°C at dawn and 18–22°C at midday. Rainfall is low, but thick morning fog is common.',
    crowdFil: 'Pinakamataas — Pasko, Bagong Taon, at ang Panagbenga Festival tuwing Pebrero.',
    crowdEn: 'Highest — Christmas, New Year, and the Panagbenga Festival in February.',
    strategyFil:
      'Pumasok sa pagitan ng 7:00–9:00 AM para sa tahimik na hardin at malambot na liwanag. Iwasan ang 10:00 AM–4:00 PM kung ayaw ng siksikan.',
    strategyEn:
      'Enter between 7:00–9:00 AM for a quiet garden and soft light. Avoid 10:00 AM–4:00 PM if you want to skip the crowds.',
    bringFil: 'Makapal na jacket, gloves, scarf, at layered na damit para sa malamig na umaga.',
    bringEn: 'A warm jacket, gloves, scarf, and layered clothing for cold mornings.',
    highlightFil: 'Hamog sa pine forest, mga seasonal flower display, at pinakamalinaw na tanawin.',
    highlightEn: 'Fog drifting through the pine forest, seasonal flower displays, and the clearest views.',
    icon: '❄️',
  },
  {
    seasonFil: 'Mainit na Tag-init (Warm Dry)',
    seasonEn: 'Warm Dry Season',
    periodFil: 'Marso – Mayo',
    periodEn: 'March – May',
    weatherFil:
      'Pinakamainit at pinakatuyo: 15–26°C, mataas ang UV index sa tanghali at kaunting ulan.',
    weatherEn:
      'Warmest and driest: 15–26°C, with a high UV index at midday and little rain.',
    crowdFil: 'Katamtaman hanggang mataas — Holy Week at simula ng summer vacation.',
    crowdEn: 'Moderate to high — Holy Week and the start of the summer holiday period.',
    strategyFil:
      'Maglibot bago mag-10:00 AM o pagkatapos ng 3:00 PM. Magpahinga sa mga shade area tuwing tanghali at uminom ng maraming tubig.',
    strategyEn:
      'Explore before 10:00 AM or after 3:00 PM. Rest in shaded areas at midday and drink plenty of water.',
    bringFil: 'Sunscreen, sumbrero, sunglasses, at reusable na bote ng tubig.',
    bringEn: 'Sunscreen, a hat, sunglasses, and a reusable water bottle.',
    highlightFil: 'Mga bagong usbong at namumulaklak na halaman; pinakamataas na visibility para sa tanawin.',
    highlightEn: 'Fresh growth and flowering plants; the highest visibility for landscape views.',
    icon: '☀️',
  },
  {
    seasonFil: 'Tag-ulan (Rainy / Typhoon)',
    seasonEn: 'Rainy / Typhoon Season',
    periodFil: 'Hunyo – Oktubre',
    periodEn: 'June – October',
    weatherFil:
      'Mataas na halumigmig at madalas na pag-ulan sa hapon at gabi; posibleng makaapekto ang mga bagyo sa pagbiyahe.',
    weatherEn:
      'High humidity with frequent afternoon and evening rain; tropical storms can affect travel plans.',
    crowdFil: 'Pinakamababa — tahimik ang hardin, lalo na sa mga karaniwang araw.',
    crowdEn: 'Lowest — the garden is quiet, especially on weekdays.',
    strategyFil:
      'Suriin ang weather forecast bago umalis; planuhin ang pagbisita sa umaga, magdala ng rain gear, at iwasan ang mga madulas na daanan. Maaaring may temporary closure ang ilang mountain road.',
    strategyEn:
      'Check the forecast before leaving; plan your visit for the morning, bring rain gear, and avoid slippery paths. Some mountain roads may temporarily close.',
    bringFil: 'Folding umbrella o rain jacket, non-slip na sapatos, at quick-dry na damit.',
    bringEn: 'A folding umbrella or rain jacket, non-slip shoes, and quick-dry clothing.',
    highlightFil:
      'Pinakaluntot na moss, fern, at cloud forest atmosphere — pati na rin ang dramatikong ulap sa pine trees.',
    highlightEn:
      'The greenest moss and ferns and a true cloud-forest atmosphere — plus dramatic mist over the pines.',
    icon: '🌧️',
  },
  {
    seasonFil: 'Panahong Shoulder',
    seasonEn: 'Shoulder Season',
    periodFil: 'Nobyembre at huling bahagi ng Mayo',
    periodEn: 'November and late May',
    weatherFil:
      'Transisyon ng panahon: karaniwang katamtaman ang temperatura, kaunting ulan, at mas kaunting tao kaysa sa peak months.',
    weatherEn:
      'A transitional period: generally moderate temperatures, limited rainfall, and fewer visitors than the peak months.',
    crowdFil: 'Mababa hanggang katamtaman — mainam para sa kalmadong pagbisita.',
    crowdEn: 'Low to moderate — ideal for a calm visit.',
    strategyFil:
      'Pinakamainam na balanse ng magandang panahon at kaunting tao. Subukang pumunta sa karaniwang araw para sa pinakamatahimik na karanasan.',
    strategyEn:
      'The best balance of pleasant weather and fewer people. Try a weekday for the quietest experience.',
    bringFil: 'Light jacket para sa gabi at umbrella bilang precaution.',
    bringEn: 'A light jacket for the evening plus an umbrella as a precaution.',
    highlightFil: 'Matatag na kondisyon para sa photography at mas mababang presyo ng matutuluyan.',
    highlightEn: 'Stable conditions for photography and lower accommodation rates.',
    icon: '🍃',
  },
];

// --------------- Audience-tailored routes ---------------

export type AudienceRoute = {
  titleFil: string;
  titleEn: string;
  summaryFil: string;
  summaryEn: string;
  durationFil: string;
  durationEn: string;
  icon: string;
  stopsFil: string[];
  stopsEn: string[];
  notesFil: string[];
  notesEn: string[];
};

export const AUDIENCE_ROUTES: AudienceRoute[] = [
  {
    titleFil: 'Pamilya na may mga Bata',
    titleEn: 'Families with Children',
    summaryFil:
      'Isang mabagal at ligtas na ruta na may maraming lugar para magpahinga, malawak na open space, at mga elemento ng kwento na madaling maintindihan ng mga bata.',
    summaryEn:
      'A slow, safe route with plenty of rest spots, open spaces, and story elements that children can easily connect with.',
    durationFil: '2–3 oras',
    durationEn: '2–3 hours',
    icon: '👨‍👩‍👧',
    stopsFil: [
      'Entrance plaza — bumili ng ticket at gamitin ang palikuran bago magsimula',
      'Pangunahing pine path — malawak at patag, madaling lakarin',
      'Open lawn at seating area — pahinga at meryenda',
      'Chinese Garden — moon gate at mga hugis na palayok',
      'Japanese Garden — tulay, pond, at malinis na linya',
      'Cordillera Village — tradisyonal na bahay at costume photo',
      'Souvenir area malapit sa exit — tapusin ang paglibot',
    ],
    stopsEn: [
      'Entrance plaza — buy tickets and use the restrooms before starting',
      'Main pine path — wide and mostly level, easy to walk',
      'Open lawn and seating area — rest and snacks',
      'Chinese Garden — moon gate and shaped planters',
      'Japanese Garden — bridge, pond, and clean lines',
      'Cordillera Village — traditional houses and costume photos',
      'Souvenir area near the exit — end the loop here',
    ],
    notesFil: [
      'Gamitin ang mga patag na pangunahing daanan kung may stroller',
      'Magdala ng sariling tubig at meryenda — limitado ang benta sa loob',
      'Iwasan ang tanghali tuwing weekend kapag pinakamaraming tao',
      'Magdala ng barya para sa palikuran at maliit na bilihan',
      'Magtakda ng meeting point malapit sa entrance kung mahiwalay ang grupo',
    ],
    notesEn: [
      'Use the level main paths if you have a stroller',
      'Bring your own water and snacks — sales inside are limited',
      'Avoid midday on weekends when crowds peak',
      'Carry small change for restrooms and small purchases',
      'Agree on a meeting point near the entrance in case the group splits',
    ],
  },
  {
    titleFil: 'Photography at Kalikasan',
    titleEn: 'Photography & Nature',
    summaryFil:
      'Ruta para sa mga mahilig sa larawan at detalye ng halaman, na nakatuon sa oras ng liwanag, texture, at mga natural na detalye.',
    summaryEn:
      'A route for photographers and plant enthusiasts, organised around light, texture, and fine natural detail.',
    durationFil: '3–4 oras',
    durationEn: '3–4 hours',
    icon: '📷',
    stopsFil: [
      'Madaling araw sa pine path — mga sinag ng liwanag sa pagitan ng mga puno',
      'Moss at fern wall — macro details pagkatapos ng ulan',
      'Chinese Garden — moon gate bilang natural frame',
      'Japanese Garden — reflection sa pond',
      'Sculpture Garden — bronze textures sa diffused light',
      'International Friendship Garden — paghahambing ng mga species',
      'Mataas na viewpoint — malawak na tanawin ng lungsod at kabundukan',
    ],
    stopsEn: [
      'Early morning on the pine path — light rays between the trunks',
      'Moss and fern wall — macro details after rain',
      'Chinese Garden — the moon gate as a natural frame',
      'Japanese Garden — reflections on the pond',
      'Sculpture Garden — bronze texture in diffused light',
      'International Friendship Garden — comparing species',
      'Upper viewpoint — wide views over the city and mountains',
    ],
    notesFil: [
      'Pinakamagandang liwanag: 7:00–10:00 AM at hapon bago mag-5:00 PM',
      'Maganda ang fog scenes sa umaga ng malamig na buwan',
      'Magsuot ng sapatos na hindi madulas — madulas ang bato kapag basa',
      'Huwag tumapak sa mga flower bed para sa komposisyon ng larawan',
      'Ang mga drone ay karaniwang nangangailangan ng permiso — magtanong sa management',
    ],
    notesEn: [
      'Best light: 7:00–10:00 AM and late afternoon before 5:00 PM',
      'Fog scenes are excellent on cold-season mornings',
      'Wear non-slip shoes — stone surfaces are slippery when wet',
      'Do not step into flower beds for a composition',
      'Drones usually require permission — ask management first',
    ],
  },
  {
    titleFil: 'Mababang Lakas at Accessible',
    titleEn: 'Low-Mobility & Accessible',
    summaryFil:
      'Pinakamaikling ruta na gumagamit ng mga patag na daanan at seating area, na may kaunting pag-akyat at malapit sa mga pasilidad.',
    summaryEn:
      'The shortest route, using level paths and seating areas, with minimal climbing and close access to facilities.',
    durationFil: '1–1.5 oras',
    durationEn: '1–1.5 hours',
    icon: '♿',
    stopsFil: [
      'Drop-off point malapit sa main entrance sa Leonard Wood Road',
      'Accessible na palikuran malapit sa entrance',
      'Patag na pangunahing daanan patungo sa open lawn',
      'Seating area sa lilim — pahinga at tanawin',
      'Chinese Garden sa labas ng bahagi — nasa patag na bahagi',
      'Bumalik sa entrance sa parehong daanan',
    ],
    stopsEn: [
      'Drop-off point near the main entrance on Leonard Wood Road',
      'Accessible restroom near the entrance',
      'Level main path toward the open lawn',
      'Shaded seating area — rest and enjoy the view',
      'Outer section of the Chinese Garden — on the level side',
      'Return to the entrance along the same path',
    ],
    notesFil: [
      'Ang ilang bahagi ng hardin ay may hagdan at slope — piliin ang pangunahing daanan',
      'Mas ligtas ang pagbisita kapag tuyo ang panahon — madulas ang bato kapag basa',
      'Magtanong sa entrance tungkol sa kondisyon ng rampa at daanan sa araw ng pagbisita',
      'Magdala ng kasama kung kailangan ng tulong sa mga bahaging may slope',
      'Planuhin ang pagpapahinga tuwing 15–20 minuto dahil sa altitude na 1,400m+',
    ],
    notesEn: [
      'Some parts of the garden have steps and slopes — stay on the main paths',
      'Visiting in dry weather is safer — stone is slippery when wet',
      'Ask at the entrance about current ramp and path conditions on the day',
      'Bring a companion if you need help on sloped sections',
      'Plan a rest every 15–20 minutes because of the 1,400m+ altitude',
    ],
  },
];

// --------------- Suggested itineraries ---------------

export type ItineraryStop = {
  time: string;
  activityFil: string;
  activityEn: string;
};

export type Itinerary = {
  titleFil: string;
  titleEn: string;
  durationFil: string;
  durationEn: string;
  summaryFil: string;
  summaryEn: string;
  icon: string;
  stops: ItineraryStop[];
};

export const ITINERARIES: Itinerary[] = [
  {
    titleFil: 'Half-Day Route (Mga 3 Oras)',
    titleEn: 'Half-Day Route (About 3 Hours)',
    durationFil: '3 oras',
    durationEn: '3 hours',
    summaryFil:
      'Tamang-tama kung limitado ang oras o kung may kasamang bata — nakatuon sa mga pangunahing themed garden at isang kalapit na parke.',
    summaryEn:
      'Ideal when time is limited or you are travelling with children — focused on the main themed gardens plus one nearby park.',
    icon: '⏱️',
    stops: [
      { time: '07:30', activityFil: 'Pagdating sa main entrance — bumili ng ticket at basahin ang site map', activityEn: 'Arrive at the main entrance — buy tickets and read the site map' },
      { time: '07:45', activityFil: 'Pangunahing pine path — maglakad nang dahan-dahan sa malamig na hangin', activityEn: 'Main pine path — walk slowly in the cool morning air' },
      { time: '08:15', activityFil: 'Chinese Garden — moon gate, pavilion, at mga palayok', activityEn: 'Chinese Garden — moon gate, pavilion, and planters' },
      { time: '09:00', activityFil: 'Japanese Garden — pond, tulay, at Japanese landscaping', activityEn: 'Japanese Garden — pond, bridge, and Japanese landscaping' },
      { time: '09:45', activityFil: 'Cordillera Village — tradisyonal na bahay at costume experience', activityEn: 'Cordillera Village — traditional houses and the costume experience' },
      { time: '10:30', activityFil: 'Sculpture Garden at Friendship Garden — sining at halaman mula sa ibang bansa', activityEn: 'Sculpture Garden and Friendship Garden — art and plants from other countries' },
      { time: '11:00', activityFil: 'Tumawid papuntang Wright Park (3 minuto) para sa Pool of Pines', activityEn: 'Cross to Wright Park (3 minutes) for the Pool of Pines' },
      { time: '12:00', activityFil: 'Tanghali sa mga kainan malapit sa Leonard Wood Road', activityEn: 'Lunch at the dining options near Leonard Wood Road' },
    ],
  },
  {
    titleFil: 'Full-Day Route (Mga 7 Oras)',
    titleEn: 'Full-Day Route (About 7 Hours)',
    durationFil: '7 oras',
    durationEn: '7 hours',
    summaryFil:
      'Pinagsasama ang Botanical Garden at ang mga kalapit na landmark sa isang kumpletong walking at short-ride tour.',
    summaryEn:
      'Combines the Botanical Garden with nearby landmarks in one complete walking and short-ride tour.',
    icon: '🗺️',
    stops: [
      { time: '07:30', activityFil: 'Baguio Botanical Garden — buong paglibot sa mga themed garden (2 oras)', activityEn: 'Baguio Botanical Garden — full loop of the themed gardens (2 hours)' },
      { time: '09:30', activityFil: 'Wright Park — Pool of Pines at horseback riding area (30 minuto)', activityEn: 'Wright Park — Pool of Pines and the horseback riding area (30 minutes)' },
      { time: '10:15', activityFil: 'The Mansion — gate area at picture-taking (30 minuto)', activityEn: 'The Mansion — gate area and photos (30 minutes)' },
      { time: '11:00', activityFil: 'Mines View Park — observation deck at tanawin (45 minuto)', activityEn: 'Mines View Park — observation deck and views (45 minutes)' },
      { time: '12:00', activityFil: 'Tanghali at pahinga', activityEn: 'Lunch and rest' },
      { time: '13:30', activityFil: 'Good Shepherd — local products at pasalubong (30 minuto)', activityEn: 'Good Shepherd — local products and souvenirs (30 minutes)' },
      { time: '14:30', activityFil: 'Museum at cathedral area ng lungsod — kultura at kasaysayan', activityEn: 'City museum and cathedral area — culture and history' },
      { time: '16:00', activityFil: 'Session Road — coffee, pahinga, at huling pamimili', activityEn: 'Session Road — coffee, rest, and final shopping' },
      { time: '17:30', activityFil: 'Bumalik sa matutuluyan bago dumilim', activityEn: 'Return to your accommodation before dark' },
    ],
  },
];

// --------------- Visitor services & surrounding facilities (type-neutral) ---------------

export type VisitorService = {
  titleFil: string;
  titleEn: string;
  descriptionFil: string;
  descriptionEn: string;
  icon: string;
  pointsFil: string[];
  pointsEn: string[];
};

export const VISITOR_SERVICES: VisitorService[] = [
  {
    titleFil: 'Palikuran, Baby Care, at Accessible Toilet',
    titleEn: 'Restrooms, Baby Care & Accessible Toilets',
    descriptionFil:
      'May mga palikuran sa entrance at sa ilang pangunahing bahagi ng hardin. Isang accessible na palikuran ang malapit sa entrance. Walang dedicated na baby-changing room sa lahat ng punto — magplano nang naaayon.',
    descriptionEn:
      'Restrooms are available at the entrance and at several points inside the garden. An accessible restroom is located near the entrance. Dedicated baby-changing rooms are not available at every point — plan accordingly.',
    icon: '🚻',
    pointsFil: [
      'Mga palikuran malapit sa entrance, Chinese Garden, at Cordillera Village',
      'Hiwalay na pasilidad para sa kalalakihan at kababaihan',
      'Accessible toilet malapit sa entrance',
      'Maaaring may maliit na maintenance fee (₱5–10) sa ilang palikuran',
      'Walang ATM sa loob ng hardin — magdala ng barya',
    ],
    pointsEn: [
      'Restrooms near the entrance, the Chinese Garden, and the Cordillera Village',
      'Separate facilities for men and women',
      'Accessible restroom near the entrance',
      'A small maintenance fee (₱5–10) may apply at some restrooms',
      'No ATM inside the garden — carry small change',
    ],
  },
  {
    titleFil: 'Inuming Tubig at Pagpuno ng Bote',
    titleEn: 'Drinking Water & Refills',
    descriptionFil:
      'May mga tindahan malapit sa entrance na nagbebenta ng bottled water. Limitado ang mga public refilling station sa loob ng hardin — magdala ng reusable na bote upang mabawasan ang plastic waste.',
    descriptionEn:
      'Shops near the entrance sell bottled water. Public refilling stations inside the garden are limited — bring a reusable bottle to reduce plastic waste.',
    icon: '💧',
    pointsFil: [
      'Bumili ng inumin bago pumasok kung darating nang maaga',
      'Magdala ng reusable na bote — limitado ang refilling point',
      'Manatiling hydrated dahil sa altitude na mahigit 1,400 metro',
      'Huwag uminom mula sa mga pond o ornamental water feature',
    ],
    pointsEn: [
      'Buy drinks before entering if you arrive early',
      'Bring a reusable bottle — refilling points are limited',
      'Stay hydrated because of the 1,400m+ altitude',
      'Do not drink from ponds or ornamental water features',
    ],
  },
  {
    titleFil: 'Upuan, Lilim, at Lugar na Pahingahan',
    titleEn: 'Seating, Shade & Rest Areas',
    descriptionFil:
      'May mga bench at shaded area sa pangunahing daanan at malapit sa mga lawn. Mainam ito para sa mga matatanda, bata, at sinumang nangangailangan ng pahinga dahil sa altitude.',
    descriptionEn:
      'Benches and shaded areas are found along the main paths and near the lawns. They are useful for older visitors, children, and anyone needing rest because of the altitude.',
    icon: '🪑',
    pointsFil: [
      'Gamitin ang mga shaded bench tuwing tanghali',
      'Ang mga pavilion ay nagbibigay ng silungan kapag biglang umulan',
      'Magpahinga tuwing 15–20 minuto kung hindi sanay sa altitude',
      'Planuhin ang ruta nang paikot upang hindi maulit ang pag-akyat',
    ],
    pointsEn: [
      'Use the shaded benches around midday',
      'Pavilions provide shelter during sudden rain',
      'Rest every 15–20 minutes if you are not used to the altitude',
      'Plan a loop route to avoid repeating the same climb',
    ],
  },
  {
    titleFil: 'Ticket, Impormasyon, at First Aid',
    titleEn: 'Tickets, Information & First Aid',
    descriptionFil:
      'Ang ticket booth at information counter ay nasa main entrance. May basic first-aid kit sa entrance area, at ang pampublikong ospital ay nasa 10 minutong lakad.',
    descriptionEn:
      'The ticket booth and information counter are at the main entrance. A basic first-aid kit is kept at the entrance, and the public hospital is a 10-minute walk away.',
    icon: '🎟️',
    pointsFil: [
      'Bumili ng ticket sa official booth lamang',
      'Itanong ang site map at kasalukuyang kondisyon ng mga daanan',
      'I-report ang mga nawalang gamit sa entrance staff',
      'Para sa emergency, pumunta sa pampublikong ospital (10 minutong lakad)',
    ],
    pointsEn: [
      'Buy tickets only at the official booth',
      'Ask for the site map and current path conditions',
      'Report lost items to the entrance staff',
      'For emergencies, go to the public hospital (10-minute walk)',
    ],
  },
  {
    titleFil: 'Wi-Fi, Signal, at Pagbabayad',
    titleEn: 'Wi-Fi, Signal & Payments',
    descriptionFil:
      'Ang mobile signal sa Baguio ay karaniwang mabuti, ngunit maaaring humina sa mga bahaging napapalibutan ng matataas na puno. Karamihan sa maliliit na tindahan ay cash-only.',
    descriptionEn:
      'Mobile signal in Baguio is generally good, but it can weaken in sections surrounded by tall trees. Most small stalls are cash-only.',
    icon: '📶',
    pointsFil: [
      'Huwag umasa sa public Wi-Fi sa loob ng hardin',
      'Magdala ng sapat na cash para sa small purchases',
      'Ang ilang entrance at stall ay tumatanggap ng e-wallet — magtanong muna',
      'I-download ang offline map bago pumasok',
    ],
    pointsEn: [
      'Do not rely on public Wi-Fi inside the garden',
      'Carry enough cash for small purchases',
      'Some entrances and stalls accept e-wallets — ask first',
      'Download an offline map before you arrive',
    ],
  },
  {
    titleFil: 'Bag, Baggage, at Alagang Hayop',
    titleEn: 'Bags, Luggage & Pets',
    descriptionFil:
      'Walang luggage storage sa loob ng hardin. Mas mainam na mag-iwan ng malalaking bag sa matutuluyan. Tanging assistance animal ang karaniwang pinapayagan sa mga public garden.',
    descriptionEn:
      'There is no luggage storage inside the garden. Leave large bags at your accommodation. Assistance animals are generally the only animals allowed in public gardens.',
    icon: '🎒',
    pointsFil: [
      'Walang locker o baggage counter sa entrance',
      'Magdala lamang ng day pack na magaan',
      'Ang mga assistance animal ay karaniwang pinapayagan',
      'Para sa ibang alagang hayop, magtanong muna sa management',
    ],
    pointsEn: [
      'No lockers or baggage counter at the entrance',
      'Carry only a light day pack',
      'Assistance animals are generally allowed',
      'Ask management first about other pets',
    ],
  },
];

// --------------- Additional transport details ---------------

export const TRANSPORT_EXTRA: TransportMethod[] = [
  {
    titleFil: 'Mula sa Intercity Bus Terminal ng Baguio',
    titleEn: 'From the Intercity Bus Terminal in Baguio',
    descriptionFil:
      'Karamihan ng mga bisita ay dumarating sa pamamagitan ng intercity bus. Mula sa terminal, madaling sumakay ng jeepney o taxi papuntang Botanical Garden.',
    descriptionEn:
      'Most visitors arrive by intercity coach. From the terminal, it is easy to take a jeepney or taxi to the Botanical Garden.',
    icon: '🚌',
    stepsFil: [
      '1. Pagbaba sa Baguio bus terminal, pumunta sa jeepney loading area',
      '2. Sumakay ng jeepney na may rutang "Mines View" o "Gibraltar"',
      '3. Sabihin sa driver: "Botanical Garden po" — bababa sa tapat ng entrance',
      '4. Pamasahe: humigit-kumulang ₱13–15 kada tao',
      '5. Kung marami kayo o may bagahe, mas praktikal ang taxi (₱100–150)',
      '6. Huling jeepney pabalik sa sentro: karaniwang bandang 8:00–9:00 PM — magtanong sa driver',
    ],
    stepsEn: [
      '1. After disembarking at the Baguio bus terminal, go to the jeepney loading area',
      '2. Board a jeepney with the "Mines View" or "Gibraltar" route',
      '3. Tell the driver: "Botanical Garden" — you will be dropped in front of the entrance',
      '4. Fare: approximately ₱13–15 per person',
      '5. If you are a group or have luggage, a taxi is more practical (₱100–150)',
      '6. Last jeepney back to the centre: usually around 8:00–9:00 PM — confirm with the driver',
    ],
  },
  {
    titleFil: 'Sariling Sasakyan at Pagmamaneho',
    titleEn: 'Driving Your Own Vehicle',
    descriptionFil:
      'May paradahan sa harap ng hardin. Sa peak season, maaaring mabilis itong mapuno — mas mainam na dumating bago mag-9:00 AM.',
    descriptionEn:
      'Parking is available in front of the garden. In peak season it fills up quickly — arriving before 9:00 AM is better.',
    icon: '🚗',
    stepsFil: [
      '1. Dalawang pangunahing ruta papuntang Baguio: Kennon Road (mas maikli, mas matarik) at Marcos Highway (mas mahaba, mas ligtas tuwing tag-ulan)',
      '2. Kapag nasa lungsod na, sundin ang Leonard Wood Road — ang hardin ay nasa gilid nito',
      '3. Landmark: nasa tapat ng Wright Park at malapit sa Teacher\'s Camp',
      '4. Paradahan: ₱50 (motorsiklo) hanggang ₱80 (kotse) para sa buong araw',
      '5. Mahigpit na ipinagbabawal ang street parking sa Leonard Wood Road',
      '6. Mag-ingat sa makapal na fog at madulas na kalsada tuwing tag-ulan',
    ],
    stepsEn: [
      '1. Two main routes into Baguio: Kennon Road (shorter, steeper) and Marcos Highway (longer, safer in the rainy season)',
      '2. Once in the city, follow Leonard Wood Road — the garden sits alongside it',
      '3. Landmark: opposite Wright Park and close to Teacher\'s Camp',
      '4. Parking: ₱50 (motorcycle) to ₱80 (car) for the whole day',
      '5. Street parking on Leonard Wood Road is strictly prohibited',
      '6. Take care in dense fog and on slippery roads during the rainy season',
    ],
  },
  {
    titleFil: 'Chartered Van, Package Tour, at Grupo',
    titleEn: 'Chartered Vans, Tours & Groups',
    descriptionFil:
      'Para sa pamilya o grupo, praktikal ang pag-arkila ng van o pagsali sa city tour na may itinerary. Karaniwang kasama rito ang Botanical Garden, Wright Park, The Mansion, at Mines View.',
    descriptionEn:
      'For families or groups, hiring a van or joining a city tour with a set itinerary is practical. These usually include the Botanical Garden, Wright Park, The Mansion, and Mines View.',
    icon: '🚐',
    stepsFil: [
      '1. Mag-book ng city tour sa mga accredited na operator sa lungsod',
      '2. Kumpirmahin kung kasama sa presyo ang entrance fee at parking',
      '3. Itakda ang pick-up point — karaniwan ay sa matutuluyan o sa sentro',
      '4. Humingi ng nakasulat na itinerary bago magbayad',
      '5. Para sa malalaking grupo, magtanong tungkol sa group rate sa entrance',
      '6. Magplano ng dagdag na oras para sa trapiko tuwing peak season',
    ],
    stepsEn: [
      '1. Book a city tour with accredited operators in the city',
      '2. Confirm whether entrance fees and parking are included',
      '3. Set the pick-up point — usually your accommodation or the city centre',
      '4. Request a written itinerary before paying',
      '5. For large groups, ask about the group rate at the entrance',
      '6. Allow extra time for traffic during peak season',
    ],
  },
  {
    titleFil: 'Accessible na Paglalakbay at Kasamang Matatanda',
    titleEn: 'Accessible Travel & Older Companions',
    descriptionFil:
      'Ang pangunahing daanan ay sapat na lapad para sa wheelchair, ngunit may mga bahaging may hagdan at slope. Magplano ng ruta nang maaga.',
    descriptionEn:
      'The main paths are wide enough for wheelchairs, but some sections have steps and slopes. Plan your route in advance.',
    icon: '♿',
    stepsFil: [
      '1. Magtanong sa entrance tungkol sa kasalukuyang lagay ng mga rampa at daanan',
      '2. Gamitin ang drop-off point malapit sa main entrance upang maiwasan ang mahabang lakad',
      '3. Piliin ang pangunahing daanan at open lawn — ito ang pinakapatag na bahagi',
      '4. Iwasan ang pagbisita kapag umuulan — madulas ang mga bato',
      '5. Magdala ng kasama para sa tulong sa mga bahaging may slope',
      '6. Magpahinga tuwing 15–20 minuto dahil sa altitude',
    ],
    stepsEn: [
      '1. Ask at the entrance about the current condition of ramps and paths',
      '2. Use the drop-off point near the main entrance to avoid a long walk',
      '3. Stay on the main path and open lawn — the flattest sections',
      '4. Avoid visiting in rain — stone surfaces become slippery',
      '5. Bring a companion for help on sloped sections',
      '6. Rest every 15–20 minutes because of the altitude',
    ],
  },
  {
    titleFil: 'Pabalik na Biyahe, Gabi, at Kaligtasan',
    titleEn: 'Return Trips, Evenings & Safety',
    descriptionFil:
      'Ang hardin ay karaniwang nagsasara bago mag-gabi, kaya planuhin nang maaga ang pabalik na biyahe, lalo na tuwing tag-ulan kapag limitado ang sasakyan.',
    descriptionEn:
      'The garden usually closes before evening, so plan your return trip early — especially in the rainy season when vehicles are limited.',
    icon: '🌙',
    stepsFil: [
      '1. Kumpirmahin ang oras ng pagbabalik bago maglakad palayo',
      '2. Para sa jeepney, hanapin ang mga rutang may karatulang "Plaza" o "Town"',
      '3. Mas maaga ang huling biyahe ng ilang ruta tuwing tag-ulan',
      '4. Kung gabi na, gumamit ng taxi o ride-hailing service',
      '5. Magtakda ng meeting point kung maghihiwalay ang grupo',
      '6. I-save ang address na "37 Leonard Wood Road" sa telepono',
    ],
    stepsEn: [
      '1. Confirm the return schedule before you set off',
      '2. For jeepneys, look for routes signed "Plaza" or "Town"',
      '3. Some routes end earlier during the rainy season',
      '4. If it is already dark, use a taxi or ride-hailing service',
      '5. Agree on a meeting point if the group splits up',
      '6. Save the address "37 Leonard Wood Road" on your phone',
    ],
  },
];

// --------------- Science & nature notes ---------------

export type ScienceNote = {
  titleFil: string;
  titleEn: string;
  bodyFil: string;
  bodyEn: string;
  icon: string;
};

export const SCIENCE_NOTES: ScienceNote[] = [
  {
    titleFil: 'Altitude at Klimang Highland',
    titleEn: 'Altitude & Highland Climate',
    bodyFil:
      'Nasa humigit-kumulang 1,400–1,540 metro sa ibabaw ng dagat, ang hardin ay may tropical highland climate: karaniwang 15–23°C sa araw at maaaring bumaba sa 8–12°C sa madaling araw ng Disyembre hanggang Pebrero. Ang manipis na hangin at mataas na UV index ay nagpapaliwanag kung bakit mabilis masunog ang balat sa tanghali kahit malamig ang hangin.',
    bodyEn:
      'At roughly 1,400–1,540 metres above sea level, the garden has a tropical highland climate: typically 15–23°C by day and dropping to 8–12°C on December–February mornings. Thin air and a high UV index explain why skin can burn quickly at midday even when the air feels cool.',
    icon: '🏔️',
  },
  {
    titleFil: 'Pine Forest ng Benguet',
    titleEn: 'The Benguet Pine Forest',
    bodyFil:
      'Ang mga pine tree sa paligid ay kadalasang Benguet pine (Pinus kesiya) — isang species na nangangailangan ng maraming liwanag at may makapal na balat na lumalaban sa sunog. Ang mga nahuhulog na karayom ay bumubuo ng acidic na layer ng lupa na pumipili kung aling halaman ang kayang tumubo sa ilalim nito.',
    bodyEn:
      'The surrounding pines are mostly Benguet pine (Pinus kesiya) — a light-demanding species with thick, fire-resistant bark. Falling needles form an acidic litter layer that selects which plants can grow beneath them.',
    icon: '🌲',
  },
  {
    titleFil: 'Moss, Fern, at Cloud Forest',
    titleEn: 'Moss, Ferns & Cloud Forest',
    bodyFil:
      'Sa mga buwan ng tag-ulan, madalas na bumaba ang ulap sa mga puno. Ang patuloy na halumigmig ay nagbibigay-daan sa moss, fern, at epiphytic orchid na mabuhay nang direkta sa mga sanga at bato — isang maliit na halimbawa ng cloud forest ecology sa gitna ng lungsod.',
    bodyEn:
      'During the rainy months, cloud often sinks into the trees. Persistent humidity allows mosses, ferns, and epiphytic orchids to live directly on branches and stone — a small example of cloud-forest ecology in the middle of a city.',
    icon: '🌿',
  },
  {
    titleFil: 'Mga Ibon at Pollinator',
    titleEn: 'Birds & Pollinators',
    bodyFil:
      'Ang pinaghalong pine forest, shrub, at flower bed ay sumusuporta sa mga highland bird at pollinator gaya ng bees at butterflies. Ang mga namumulaklak na halaman at pollinator ay magkasabay na aktibo — kaya mahalaga ang pangangalaga sa flower bed at pag-iwas sa pesticide.',
    bodyEn:
      'The mix of pine forest, shrubs, and flower beds supports highland birds and pollinators such as bees and butterflies. Flowering plants and pollinators are active on the same schedule — which is why protecting flower beds and avoiding pesticides matters.',
    icon: '🐦',
  },
  {
    titleFil: 'Lupa, Bato, at Drainage',
    titleEn: 'Soil, Rock & Drainage',
    bodyFil:
      'Ang mga bundok sa palibot ng Baguio ay binubuo ng mga weathered volcanic at metamorphic rock na gumagawa ng well-drained at bahagyang acidic na lupa. Ang mabilis na drainage ay mainam para sa pine, ngunit nangangahulugan din ito na mabilis matuyo ang lupa pagkatapos ng matinding ulan.',
    bodyEn:
      'The mountains around Baguio are built from weathered volcanic and metamorphic rock that produces well-drained, slightly acidic soil. Fast drainage suits pines, but it also means the ground dries quickly after heavy rain.',
    icon: '🪨',
  },
  {
    titleFil: 'Phenology at Panahon ng Pamumulaklak',
    titleEn: 'Phenology & Flowering Seasons',
    bodyFil:
      'Ang pamumulaklak ng maraming highland species ay nai-trigger ng haba ng araw at pagbabago ng temperatura kaysa sa dami ng ulan. Ito ang dahilan kung bakit ang mga cool-dry na buwan ay madalas na tugma sa pinakamatingkad na flower display sa mga pampublikong hardin ng lungsod.',
    bodyEn:
      'Flowering in many highland species is triggered by day length and temperature change rather than rainfall alone. That is why the cool-dry months often coincide with the brightest flower displays in the city public gardens.',
    icon: '🌸',
  },
  {
    titleFil: 'Native Species at Introduced Collections',
    titleEn: 'Native Species & Introduced Collections',
    bodyFil:
      'Ang mga themed at friendship garden ay nagpapakita ng mga halaman mula sa iba\'t ibang klima. Ipinapakita nito ang pagkakaiba-iba ng horticulture, ngunit ipinapaalala rin nito ang kahalagahan ng pagprotekta sa mga native species at pag-iwas sa pagpapalaganap ng invasive na halaman sa labas ng hardin.',
    bodyEn:
      'The themed and friendship gardens display plants from many climates. This showcases horticultural variety, but it also highlights why protecting native species and preventing the spread of invasive plants outside the garden matters.',
    icon: '🌏',
  },
  {
    titleFil: 'Microclimate sa Loob ng Lungsod',
    titleEn: 'Urban Microclimate',
    bodyFil:
      'Kahit nasa loob ng lungsod, ang mga matataas na puno at lupa ay nagpapababa ng temperatura kumpara sa mga sementadong kalsada sa labas. Ang epektong ito ay isang lokal na halimbawa ng kung paano binabawasan ng green space ang urban heat island effect.',
    bodyEn:
      'Even within the city, tall trees and soil keep temperatures lower than the paved roads outside. This is a local example of how green space reduces the urban heat island effect.',
    icon: '🌡️',
  },
];

// --------------- Visitor responsibility ---------------

export type Responsibility = {
  titleFil: string;
  titleEn: string;
  bodyFil: string;
  bodyEn: string;
  icon: string;
};

export const VISITOR_RESPONSIBILITY: Responsibility[] = [
  {
    titleFil: 'Huwag pumitas o maglipat ng halaman',
    titleEn: 'Do not pick or move plants',
    bodyFil:
      'Ang bawat halaman ay bahagi ng isang managed collection. Ang pagpitas ng bulaklak o pagkuha ng buto ay nagpapabawas sa display para sa susunod na bisita at nakakaabala sa pollinator.',
    bodyEn:
      'Every plant is part of a managed collection. Picking flowers or taking seeds reduces the display for the next visitor and disrupts pollinators.',
    icon: '🌺',
  },
  {
    titleFil: 'Manatili sa mga daanan',
    titleEn: 'Stay on the paths',
    bodyFil:
      'Ang pagtapak sa labas ng daanan ay sumisira sa root zone at nagpapa-compact ng lupa, na nagpapahirap sa pagtubo ng mga puno at ground cover.',
    bodyEn:
      'Stepping off the path damages root zones and compacts the soil, making it harder for trees and ground cover to grow.',
    icon: '🚶',
  },
  {
    titleFil: 'Dalhin ang sariling basura',
    titleEn: 'Carry out your own waste',
    bodyFil:
      'Limitado ang mga basurahan. Ang pag-uwi ng sariling basura ay pumipigil sa pagpasok ng plastic sa drainage at sa mga watershed ng lungsod.',
    bodyEn:
      'Bins are limited. Taking your own waste home prevents plastic from entering drains and the city watersheds.',
    icon: '🗑️',
  },
  {
    titleFil: 'Huwag magpakain ng mga hayop',
    titleEn: 'Do not feed wildlife',
    bodyFil:
      'Ang pagpapakain ay nagbabago sa natural na pag-uugali ng mga ibon at hayop at maaaring magdulot ng dependency sa pagkain ng tao.',
    bodyEn:
      'Feeding changes the natural behaviour of birds and animals and can create dependency on human food.',
    icon: '🦜',
  },
  {
    titleFil: 'Iwasan ang apoy sa pine area',
    titleEn: 'Avoid fire in pine areas',
    bodyFil:
      'Ang pine litter ay madaling magliyab, lalo na sa mga buwan ng tag-init. Sundin ang mga designated smoking area at huwag mag-iwan ng siga.',
    bodyEn:
      'Pine litter ignites easily, especially in the warm dry months. Use designated smoking areas and never leave flames unattended.',
    icon: '🔥',
  },
  {
    titleFil: 'Igalang ang mga cultural display',
    titleEn: 'Respect cultural displays',
    bodyFil:
      'Ang mga Igorot house, sculpture, at costume ay bahagi ng living culture ng Cordillera. Huwag umakyat sa mga istruktura at humingi ng pahintulot bago kumuha ng larawan ng mga tao.',
    bodyEn:
      'Igorot houses, sculptures, and costumes are part of the living culture of the Cordillera. Do not climb structures and ask permission before photographing people.',
    icon: '🗿',
  },
  {
    titleFil: 'Panatilihin ang tahimik na kapaligiran',
    titleEn: 'Keep noise levels low',
    bodyFil:
      'Ang hardin ay isang pahingahan para sa mga ibon at bisita. Ang malakas na musika at sigaw ay nakakabawas sa karanasan ng lahat.',
    bodyEn:
      'The garden is a refuge for birds and visitors alike. Loud music and shouting reduce the experience for everyone.',
    icon: '🤫',
  },
  {
    titleFil: 'Etiquette sa photography at drone',
    titleEn: 'Photography & drone etiquette',
    bodyFil:
      'Huwag ilipat ang mga signage o halaman para sa larawan. Ang mga drone at malalaking tripod ay maaaring mangailangan ng permiso — magtanong sa management bago gamitin.',
    bodyEn:
      'Do not move signs or plants for a photo. Drones and large tripods may require permission — ask management before use.',
    icon: '📸',
  },
  {
    titleFil: 'Suportahan nang patas ang lokal na komunidad',
    titleEn: 'Support the local community fairly',
    bodyFil:
      'Kung bibili ng crafts o kakain sa labas, piliin ang mga lokal na nagbebenta at itrato ang mga cultural item bilang bahagi ng tradisyon, hindi bilang costume lamang.',
    bodyEn:
      'When buying crafts or eating nearby, favour local vendors and treat cultural items as part of a tradition rather than a costume.',
    icon: '🤝',
  },
  {
    titleFil: 'Maging handa sa pagbabago ng panahon',
    titleEn: 'Be prepared for weather changes',
    bodyFil:
      'Sa panahon ng thunderstorm, iwasan ang mga isolated na matataas na puno at bukas na lugar. Ang lagay ng panahon sa bundok ay maaaring magbago sa loob ng ilang minuto.',
    bodyEn:
      'During thunderstorms, avoid isolated tall trees and open ground. Mountain weather can change within minutes.',
    icon: '⛈️',
  },
];



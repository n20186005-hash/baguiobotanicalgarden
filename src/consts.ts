// ============================================================
// Baguio Botanical Garden — Shared constants & data
// ============================================================

export const SITE = {
  name: 'Baguio Botanical Garden',
  titleFil: 'Baguio Botanical Garden — Kumpletong Gabay sa Bisita',
  titleEn: 'Baguio Botanical Garden — Complete Visitor Guide',
  descriptionFil:
    'Ang komprehensibong gabay sa Baguio Botanical Garden: kasaysayan, mga themed garden, kultura ng Igorot, oras ng pagbisita, transportasyon, paradahan, at praktikal na impormasyon para sa mga bisita.',
  descriptionEn:
    'The comprehensive guide to Baguio Botanical Garden: history, themed gardens, Igorot culture, visiting hours, transportation, parking, and practical visitor information.',
  siteUrl: 'https://baguiobotanicalgarden.com',
  author: 'Baguio Botanical Garden Editorial',
  addressFil: 'Leonard Wood Road, Baguio, 2600 Benguet, Pilipinas',
  addressEn: 'Leonard Wood Road, Baguio, 2600 Benguet, Philippines',
  coordinates: { lat: 16.415016930084526, lng: 120.6103314769752 },
  plusCode: 'CWG6+24 Baguio, Benguet',
  mapsUrl: 'https://maps.app.goo.gl/G1bwYQadpkxRr82m9',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.193091575433!2d120.6103314769752!3d16.415016930084526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1541c0c7227%3A0x673a805fba2868d2!2sBaguio%20Botanical%20Garden!5e0!3m2!1szh-CN!2sus!4v1786335104395!5m2!1szh-CN!2sus',
  phone: '+63746610136',
  rating: 4.3,
  reviewCount: 8500,
} as const;

export const GA4 = 'G-YJTNXGWZNY';

// --------------- Navigation ---------------

export type NavSection = {
  id: string;
  labelFil: string;
  labelEn: string;
};

export const NAV: NavSection[] = [
  { id: 'about', labelFil: 'Tungkol', labelEn: 'About' },
  { id: 'key-info', labelFil: 'Mabilis na Impormasyon', labelEn: 'Quick Info' },
  { id: 'history', labelFil: 'Kasaysayan at Alamat', labelEn: 'History & Legends' },
  { id: 'attractions', labelFil: 'Mga Atraksyon', labelEn: 'Attractions' },
  { id: 'practical', labelFil: 'Praktikal na Gabay', labelEn: 'Practical Info' },
  { id: 'transport', labelFil: 'Transportasyon', labelEn: 'Transportation' },
  { id: 'gallery', labelFil: 'Galeriya', labelEn: 'Gallery' },
  { id: 'tips', labelFil: 'Mga Tip', labelEn: 'Tips' },
  { id: 'faq', labelFil: 'FAQ', labelEn: 'FAQ' },
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
      'Kung puno ang paradahan, maaaring mag-drop off at iwan ang sasakyan sa SM Baguio parking (₱40/araw, 10 minutong biyahe)',
    ],
    tipsEn: [
      '₱50 parking fee for motorcycles, ₱80 for cars',
      'Alternative parking: beside Wright Park (5-minute walk)',
      'Alternative parking: near Teacher\'s Camp (10-minute walk)',
      'Avoid parking along Leonard Wood Road — strictly prohibited',
      'If lot is full, drop off and park at SM Baguio (₱40/day, 10-min ride)',
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
      'Pinakamalapit na fast food: sa may Baguio General Hospital area (10 minutong lakad)',
    ],
    tipsEn: [
      'Local eateries (karinderya) across Wright Park (5-min walk) — home-cooked meals from ₱80',
      'Cafes along Leonard Wood Road (10-min walk) — coffee and pastries',
      'Restaurant district at Session Road (15 min) — international cuisine',
      'Try the strawberry taho sold outside the entrance',
      'Nearest fast food: near Baguio General Hospital area (10-min walk)',
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
      'SM Baguio (10 minutong biyahe sa taxi) — department store, supermarket, pharmacy',
      'Convenience stores sa Leonard Wood Road (5 minutong lakad) — meryenda at inumin',
      'Baguio Public Market (15 minuto) — sariwang gulay, strawberry, pasalubong',
      'ATM: May BPI at BDO ATM sa may Baguio General Hospital (10 minutong lakad)',
    ],
    tipsEn: [
      'Souvenir stalls at entrance — wood carvings, keychains, strawberry jam (₱50–300)',
      'SM Baguio (10-min taxi ride) — department store, supermarket, pharmacy',
      'Convenience stores on Leonard Wood Road (5-min walk) — snacks and drinks',
      'Baguio Public Market (15 min) — fresh vegetables, strawberries, pasalubong',
      'ATM: BPI and BDO ATMs near Baguio General Hospital (10-min walk)',
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
      'EV charging: Available sa SM Baguio parking (10 minutong biyahe)',
      'Magpa-full tank bago umakyat sa Baguio — ang mga gas station sa expressway ay mas mura',
      'Maraming gas station sa Baguio ang tumatanggap ng credit card at GCash',
    ],
    tipsEn: [
      'Gas station on Magsaysay Avenue (5-min drive) — open 24 hours',
      'Gas station at Leonard Wood Road corner (3-min drive)',
      'EV charging: Available at SM Baguio parking (10-min drive)',
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
      'Baguio General Hospital — may emergency room, 10 minutong lakad',
      'Mga botika sa Leonard Wood Road — over-the-counter na gamot',
      'Magdala ng sariling first-aid kit para sa minor na sugat at gasgas',
      'Ang mataas na altitude (1,540m) ay maaaring magdulot ng pagkahilo — magpahinga kung kinakailangan',
    ],
    tipsEn: [
      'Baguio General Hospital — emergency room available, 10-min walk',
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
      'Ang Loakan Airport ay ang pinakamalapit na airport sa Baguio, humigit-kumulang 7 km mula sa Botanical Garden. Bagama\'t limitado ang commercial flights, maaaring gamitin ang taxi o Grab mula rito.',
    descriptionEn:
      'Loakan Airport is the closest airport to Baguio, approximately 7 km from the Botanical Garden. Although commercial flights are limited, taxi or Grab can be used from here.',
    icon: '✈️',
    stepsFil: [
      '1. Paglabas ng terminal, pumunta sa designated taxi stand',
      '2. Sumakay ng taxi o mag-book ng Grab papuntang "Botanical Garden, Leonard Wood Road"',
      '3. Ang biyahe ay 15–20 minuto, depende sa trapiko',
      '4. Sabihin sa driver: "Sa Botanical Garden po, sa tapat ng Teacher\'s Camp"',
      '5. Pamasahe: humigit-kumulang ₱120–180 (taxi meter)',
      '6. Ipa-drop off sa main entrance sa Leonard Wood Road',
    ],
    stepsEn: [
      '1. Upon exiting the terminal, proceed to the designated taxi stand',
      '2. Take a taxi or book a Grab to "Botanical Garden, Leonard Wood Road"',
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
      '2. Sa PITX, sumakay ng JoyBus o Victory Liner Deluxe papuntang Baguio (₱650–1,000)',
      '3. Bumaba sa Baguio terminal; sumakay ng taxi papuntang Botanical Garden (₱100–150, 10 min)',
      'OPSYON B: REGULAR BUS (Pinakamura, ~₱500–700, 5–6 oras)',
      '1. Mula NAIA, sumakay ng taxi/Grab papuntang Cubao Bus Terminal (₱300–400)',
      '2. Sumakay ng Victory Liner, JoyBus, o Genesis bus papuntang Baguio (₱450–550)',
      '3. Bumaba sa Baguio terminal; sumakay ng jeep o taxi papuntang Botanical Garden',
      'OPSYON C: SARILING SASAKYAN (Pinakamabilis, 3.5–4.5 oras)',
      '1. Dumaan sa NLEX → SCTEX → TPLEX (toll: ~₱500)',
      '2. Labasan sa Pozorrubio o Rosario → Kennon Road o Marcos Highway',
      '3. Pumasok sa Baguio → sundin ang Leonard Wood Road papuntang Botanical Garden',
    ],
    stepsEn: [
      'OPTION A: DELUXE BUS (Easiest, ~₱800–1,200, 4–5 hours)',
      '1. From NAIA Terminal 2 or 3, take P2P bus to PITX (₱150)',
      '2. At PITX, take JoyBus or Victory Liner Deluxe to Baguio (₱650–1,000)',
      '3. Disembark at Baguio terminal; take taxi to Botanical Garden (₱100–150, 10 min)',
      'OPTION B: REGULAR BUS (Cheapest, ~₱500–700, 5–6 hours)',
      '1. From NAIA, take taxi/Grab to Cubao Bus Terminal (₱300–400)',
      '2. Board Victory Liner, JoyBus, or Genesis bus to Baguio (₱450–550)',
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
      '2. Sa Dau Terminal, sumakay ng Victory Liner, JoyBus, o Genesis papuntang Baguio (₱400–500, 3–4 oras)',
      '3. Bumaba sa Baguio terminal; sumakay ng taxi papuntang Botanical Garden (₱100–150, 10 min)',
      '4. Alternatibo: Mag-arkila ng pribadong van mula Clark papuntang Baguio (~₱3,500–5,000, 2–3 oras)',
    ],
    stepsEn: [
      '1. From CRK, take shuttle or taxi to Dau Bus Terminal (₱200–300, 15 min)',
      '2. At Dau Terminal, board Victory Liner, JoyBus, or Genesis to Baguio (₱400–500, 3–4 hours)',
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
    titleFil: 'Taxi at Grab',
    titleEn: 'Taxi & Grab',
    descriptionFil:
      'Ang taxi at Grab ay ang pinakakomportableng paraan upang marating ang Botanical Garden. Available ang Grab sa Baguio mula 2023.',
    descriptionEn:
      'Taxi and Grab are the most comfortable ways to reach the Botanical Garden. Grab has been available in Baguio since 2023.',
    icon: '🚕',
    stepsFil: [
      '1. Mag-book sa Grab app: Ilagay ang "Baguio Botanical Garden" bilang destinasyon',
      '2. O kaya, sumakay ng regular na taxi — lahat ng taxi sa Baguio ay naka-meter',
      '3. Sabihin: "Botanical Garden sa Leonard Wood Road"',
      '4. Pamasahe: humigit-kumulang ₱80–150 mula sa sentro ng Baguio',
      '5. Tagal: 5–15 minuto, depende sa starting point',
      '6. Lahat ng taxi driver sa Baguio ay pamilyar sa Botanical Garden — isa ito sa pinakasikat na destinasyon',
    ],
    stepsEn: [
      '1. Book on Grab app: Enter "Baguio Botanical Garden" as destination',
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
      'Sumakay ng bus (Victory Liner, JoyBus, o Genesis) mula Cubao o Pasay papuntang Baguio (₱450–1,000, 4–6 oras). Pagdating sa Baguio terminal, sumakay ng taxi (₱100–150) o jeepney (₱13–15) papuntang Botanical Garden sa Leonard Wood Road. Para sa pinakamadaling ruta: JoyBus Deluxe mula PITX papuntang Baguio.',
    aEn:
      'Take a bus (Victory Liner, JoyBus, or Genesis) from Cubao or Pasay to Baguio (₱450–1,000, 4–6 hours). Upon arrival at the Baguio terminal, take a taxi (₱100–150) or jeepney (₱13–15) to the Botanical Garden on Leonard Wood Road. Easiest route: JoyBus Deluxe from PITX to Baguio.',
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
  altFil: `Baguio Botanical Garden — larawan ${i + 1}`,
  altEn: `Baguio Botanical Garden — photo ${i + 1}`,
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
];

// --------------- Disclaimer ---------------

export const DISCLAIMER_FIL = [
  'Ang website na ito ay isang independiyenteng, hindi pangkomersyal na proyektong pang-impormasyon para sa mga turista. Wala itong kaugnayan sa anumang ahensya ng gobyerno o opisyal na organisasyon.',
  'Ang mga impormasyon tungkol sa atraksyon ay sinuri at inihambing sa mga pampublikong sanggunian mula sa Baguio City Tourism Office, Department of Tourism (DOT) — Cordillera Administrative Region, at opisyal na website ng Lungsod ng Baguio. Walang anumang komersyal na rekomendasyon.',
  'Ang lahat ng mga larawang ipinapakita sa website na ito ay pag-aari ng kani-kanilang orihinal na photographer. Ang karapatang-ari at copyright ay nananatili sa mga lumikha ng larawan.',
];

export const DISCLAIMER_EN = [
  'This website is an independent, non-commercial tourist information project. It is not affiliated with any government agency or official organization.',
  'Attraction information has been verified and cross-referenced with public sources from the Baguio City Tourism Office, the Department of Tourism (DOT) — Cordillera Administrative Region, and the official Baguio City website. No commercial recommendations are included.',
  'All images displayed on this website are the property of their respective original photographers. Rights and copyright remain with the image creators.',
];



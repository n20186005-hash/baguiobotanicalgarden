import type { NavSection } from '../consts';

export const languages: Record<string, string> = {
  tl: 'Tagalog',
  en: 'English',
};

export const defaultLang = 'tl';
export const languagesList = ['tl', 'en'] as const;

export const ui = {
  tl: {
    siteName: 'Baguio Botanical Garden',
    siteTitle: 'Baguio Botanical Garden — Kumpletong Gabay sa Bisita',
    siteDescription:
      'Ang komprehensibong gabay sa Baguio Botanical Garden: kasaysayan, mga themed garden, kultura ng Igorot, oras ng pagbisita, transportasyon, paradahan, at praktikal na impormasyon.',
    nav_home: 'Home',
    nav_about: 'Tungkol',
    nav_keyInfo: 'Mabilis na Impormasyon',
    nav_history: 'Kasaysayan at Alamat',
    nav_attractions: 'Mga Atraksyon',
    nav_practical: 'Praktikal na Gabay',
    nav_transport: 'Transportasyon',
    nav_gallery: 'Galeriya',
    nav_tips: 'Mga Tip',
    nav_faq: 'FAQ',
    nav_disclaimer: 'Patalastas',
    // Hero
    hero_title: 'Baguio Botanical Garden',
    hero_subtitle: 'Tuklasin ang yaman ng kultura at kalikasan ng Cordillera',
    hero_cta_explore: 'Simulan ang Paglilibot',
    hero_cta_map: 'Tingnan sa Mapa',
    hero_rating: '4.3 (8,500+ reviews)',
    hero_location: 'Leonard Wood Road, Baguio City',
    // Key Info
    keyinfo_section: 'Mabilis na Impormasyon',
    // About
    about_section: 'Tungkol sa Baguio Botanical Garden',
    about_p1:
      'Ang Baguio Botanical Garden ay isang 5-ektaryang pampublikong hardin na matatagpuan sa Leonard Wood Road, Baguio City, Pilipinas. Ito ay isang showcase ng mayamang botanikal na biodiversity ng Cordillera region, internasyonal na pagkakaibigan, at katutubong kultura ng Igorot.',
    about_p2:
      'Ang hardin ay nagtatampok ng walong pangunahing themed garden — mula sa Chinese, Japanese, at Korean gardens hanggang sa Philippine Native Plant Garden at International Friendship Garden. Ang Cordillera Village sa loob nito ay nagpapakita ng tradisyonal na pamumuhay ng mga Igorot, habang ang Sculpture Garden ay naglalaman ng mga obrang sining ni Ben Hur Villanueva at iba pang lokal na artist.',
    about_p3:
      'Dahil sa mataas na lokasyon nito sa 1,540 metro sa ibabaw ng dagat, ang hardin ay may malamig na klima sa buong taon — isang perpektong takas mula sa init ng lowland Philippines. Ang mga pine tree na pumapalibot dito ay nagbibigay ng sariwang hanging bundok at magandang natural na tanawin.',
    // History
    history_section: 'Kasaysayan',
    history_p1:
      'Ang kasaysayan ng Baguio Botanical Garden ay kaakibat ng pagkakatatag ng Baguio bilang "Summer Capital" ng Pilipinas noong panahon ng mga Amerikano. Narito ang timeline ng pag-unlad nito mula sa isang nursery ng halaman hanggang sa isang world-class botanical at cultural destination:',
    legends_section: 'Mga Alamat at Kuwentong Bayan',
    legends_p1:
      'Ang Cordillera region ay mayaman sa oral tradition. Ang mga kuwentong ito ay naipasa sa maraming henerasyon at nagbibigay ng mas malalim na kahulugan sa mga halaman, tanawin, at kultura na makikita sa Botanical Garden:',
    // Attractions
    attractions_section: 'Mga Atraksyon at Themed Garden',
    attractions_p1:
      'Ang Baguio Botanical Garden ay binubuo ng iba\'t ibang themed garden na kumakatawan sa kultura ng iba\'t ibang bansa at sa biodiversity ng Cordillera. Bawat hardin ay may natatanging disenyo, halaman, at kuwento:',
    attraction_highlights: 'Mga Dapat Makita',
    // Practical
    practical_section: 'Praktikal na Impormasyon at Pasilidad',
    practical_p1:
      'Bago bumisita, mahalagang malaman ang mga sumusunod na praktikal na impormasyon. Ang gabay na ito ay neutral at hindi nagrerekomenda ng partikular na negosyo — lahat ng impormasyon ay tungkol sa mga uri ng serbisyong available, hindi sa mga partikular na establisyimento.',
    // Transport
    transport_section: 'Paano Pumunta',
    transport_p1:
      'Ang Baguio Botanical Garden ay madaling marating mula sa iba\'t ibang panimulang punto. Narito ang mga detalyadong hakbang para sa bawat paraan ng transportasyon:',
    // Nearby
    nearby_section: 'Mga Kalapit na Atraksyon',
    nearby_p1:
      'Ang Botanical Garden ay nasa magandang lokasyon — malapit sa maraming iba pang sikat na destinasyon sa Baguio. Mainam na pagsamahin ang pagbisita sa isang araw ng paglilibot:',
    // Gallery
    gallery_section: 'Galeriya',
    // Map
    map_section: 'Mapa',
    // Tips
    tips_section: 'Mga Tip ng Bisita',
    tips_p1: 'Mga praktikal na payo mula sa mga nakaraang bisita para sa mas magandang karanasan:',
    // FAQ
    faq_section: 'Mga Madalas Itanong (FAQ)',
    // Disclaimer
    disclaimer_section: 'Patalastas',
    // Footer
    footer_privacy: 'Patakaran sa Privacy',
    footer_terms: 'Mga Tuntunin ng Serbisyo',
    footer_cookie: 'Mga Setting ng Cookie',
    footer_disclaimer_line1: 'Isang independiyenteng, hindi pangkomersyal na proyektong pang-impormasyon para sa mga turista.',
    footer_disclaimer_line2: 'Ang impormasyon ay sinuri at inihambing sa mga pampublikong sanggunian mula sa Baguio City Tourism Office, DOT-CAR, at opisyal na website ng Lungsod ng Baguio.',
    footer_copyright: '© {year} Baguio Botanical Garden Gabay. Lahat ng karapatan ay nakalaan.',
    // Legal
    legal_lastUpdated: 'Huling na-update: {date}',
  },
  en: {
    siteName: 'Baguio Botanical Garden',
    siteTitle: 'Baguio Botanical Garden — Complete Visitor Guide',
    siteDescription:
      'The comprehensive guide to Baguio Botanical Garden: history, themed gardens, Igorot culture, visiting hours, transportation, parking, and practical information.',
    nav_home: 'Home',
    nav_about: 'About',
    nav_keyInfo: 'Quick Info',
    nav_history: 'History & Legends',
    nav_attractions: 'Attractions',
    nav_practical: 'Practical Info',
    nav_transport: 'Transportation',
    nav_gallery: 'Gallery',
    nav_tips: 'Tips',
    nav_faq: 'FAQ',
    nav_disclaimer: 'Disclaimer',
    // Hero
    hero_title: 'Baguio Botanical Garden',
    hero_subtitle: 'Discover the cultural and natural wealth of the Cordillera',
    hero_cta_explore: 'Start Exploring',
    hero_cta_map: 'View on Map',
    hero_rating: '4.3 (8,500+ reviews)',
    hero_location: 'Leonard Wood Road, Baguio City',
    // Key Info
    keyinfo_section: 'Quick Information',
    // About
    about_section: 'About Baguio Botanical Garden',
    about_p1:
      'The Baguio Botanical Garden is a 5-hectare public garden located on Leonard Wood Road, Baguio City, Philippines. It is a showcase of the rich botanical biodiversity of the Cordillera region, international friendship, and indigenous Igorot culture.',
    about_p2:
      'The garden features eight main themed gardens — from Chinese, Japanese, and Korean gardens to the Philippine Native Plant Garden and International Friendship Garden. The Cordillera Village inside displays traditional Igorot living, while the Sculpture Garden houses artworks by Ben Hur Villanueva and other local artists.',
    about_p3:
      'Situated at 1,540 meters above sea level, the garden enjoys cool weather year-round — a perfect escape from the heat of lowland Philippines. The surrounding pine trees provide fresh mountain air and beautiful natural scenery.',
    // History
    history_section: 'History',
    history_p1:
      'The history of Baguio Botanical Garden is intertwined with the establishment of Baguio as the "Summer Capital" of the Philippines during the American colonial era. Here is the timeline of its development from a plant nursery to a world-class botanical and cultural destination:',
    legends_section: 'Legends & Folk Tales',
    legends_p1:
      'The Cordillera region is rich in oral tradition. These stories have been passed down through generations and add deeper meaning to the plants, landscapes, and culture found in the Botanical Garden:',
    // Attractions
    attractions_section: 'Attractions & Themed Gardens',
    attractions_p1:
      'The Baguio Botanical Garden consists of various themed gardens representing different cultures and the biodiversity of the Cordillera. Each garden has a unique design, plants, and story:',
    attraction_highlights: 'Highlights',
    // Practical
    practical_section: 'Practical Information & Facilities',
    practical_p1:
      'Before visiting, it helps to know the following practical information. This guide is neutral and does not recommend specific businesses — all information is about the types of services available, not specific establishments.',
    // Transport
    transport_section: 'How to Get Here',
    transport_p1:
      'The Baguio Botanical Garden is easily accessible from various starting points. Here are detailed steps for each mode of transportation:',
    // Nearby
    nearby_section: 'Nearby Attractions',
    nearby_p1:
      'The Botanical Garden is well-located near many other popular Baguio destinations. Combine your visit in a day tour:',
    // Gallery
    gallery_section: 'Gallery',
    // Map
    map_section: 'Map',
    // Tips
    tips_section: 'Visitor Tips',
    tips_p1: 'Practical advice from previous visitors for a better experience:',
    // FAQ
    faq_section: 'Frequently Asked Questions (FAQ)',
    // Disclaimer
    disclaimer_section: 'Disclaimer',
    // Footer
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_cookie: 'Cookie Settings',
    footer_disclaimer_line1: 'An independent, non-commercial tourist information project.',
    footer_disclaimer_line2: 'Information has been verified and cross-referenced with public sources from the Baguio City Tourism Office, DOT-CAR, and the official Baguio City website.',
    footer_copyright: '© {year} Baguio Botanical Garden Guide. All rights reserved.',
    // Legal
    legal_lastUpdated: 'Last updated: {date}',
  },
} as const;

export type Lang = 'tl' | 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return ui[lang][key as keyof typeof ui.tl] ?? ui[defaultLang][key as keyof typeof ui.tl] ?? key;
  };
}

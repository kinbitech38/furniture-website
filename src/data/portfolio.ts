export interface Project {
  id: string;
  name: string;
  category: 'TV Console' | 'Bed Console' | 'Sofa' | 'Chairs' | 'Bedframes' | 'HDF Flush Door' | 'Heavy Duty Wooden Door' | 'Dining Sets' | 'Wardrobes' | 'Kitchen Cabinet' | 'Dressing Mirror';
  year: string;
  description: string;
  image: string;
  dimensions?: string;
  material?: string;
}

export const INITIAL_PROJECTS: Project[] = [
  // --- TV Console (3) ---
  { 
    id: 'tv-1',
    name: 'Modern TV Console', 
    category: 'TV Console', 
    year: '2024',
    description: 'Sleek, minimalist entertainment unit with integrated cable management.',
    image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'tv-2',
    name: 'Floating Oak TV Unit', 
    category: 'TV Console', 
    year: '2024',
    description: 'Wall-mounted natural white oak console with acoustic slatted doors.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'tv-3',
    name: 'Fluted Walnut Media Unit', 
    category: 'TV Console', 
    year: '2025',
    description: 'Low-profile dark walnut credenza with brass accented hardware.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- Bed Console (3) ---
  { 
    id: 'bc-1',
    name: 'Sleek Bed Console', 
    category: 'Bed Console', 
    year: '2024',
    description: 'Floating bedside unit with wireless charging integration.',
    image: 'https://images.unsplash.com/photo-1616486341353-37521072aa0b?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'bc-2',
    name: 'Nordic Nightstand Console', 
    category: 'Bed Console', 
    year: '2024',
    description: 'Soft-close single drawer console with matte black steel framing.',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'bc-3',
    name: 'Travertine Bedside Unit', 
    category: 'Bed Console', 
    year: '2025',
    description: 'Sculptural fluted ash wood console topped with natural travertine stone.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- Sofa (3) ---
  { 
    id: 'sf-1',
    name: 'Velvet Cloud Sofa', 
    category: 'Sofa', 
    year: '2023',
    description: 'Deep-seated luxury with premium olive velvet upholstery.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'sf-2',
    name: 'Bouclé Curved Sectional', 
    category: 'Sofa', 
    year: '2024',
    description: 'Organic curved silhouette wrapped in tactile ivory cream bouclé.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'sf-3',
    name: 'Italian Cognac Leather Sofa', 
    category: 'Sofa', 
    year: '2025',
    description: 'Full-grain aniline leather 3-seater with feather-down cushioning.',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- Chairs (3) ---
  { 
    id: 'ch-1',
    name: 'Executive Lounge Chair', 
    category: 'Chairs', 
    year: '2024',
    description: 'Ergonomic walnut frame with plush boucle cushioning.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'ch-2',
    name: 'Scandinavian Accent Chair', 
    category: 'Chairs', 
    year: '2024',
    description: 'Minimalist bentwood armrest chair with woven cane backrest.',
    image: 'https://images.unsplash.com/photo-1580481077693-01827471d227?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'ch-3',
    name: 'Sculptural Dining Armchair', 
    category: 'Chairs', 
    year: '2025',
    description: 'Solid teak dining chair with ergonomic curved back support.',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- Bedframes (3) ---
  { 
    id: 'bf-1',
    name: 'Luxury Bedframe', 
    category: 'Bedframes', 
    year: '2024',
    description: 'Premium upholstered headboard frame with integrated slat support.',
    image: 'https://images.unsplash.com/photo-1505693333238-bc63a460950b?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'bf-2',
    name: 'Japanese Platform Bed', 
    category: 'Bedframes', 
    year: '2024',
    description: 'Low-slung solid oak platform bed with extended side ledges.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'bf-3',
    name: 'Tufted Linen Canopy Bed', 
    category: 'Bedframes', 
    year: '2025',
    description: 'Architectural matte black frame with soft Belgian linen headboard.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- HDF Flush Door (3) ---
  { 
    id: 'hdf-1',
    name: 'HDF Flush Entry', 
    category: 'HDF Flush Door', 
    year: '2023',
    description: 'Smooth ultra-flat finish, high-density fiberboard interior door.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'hdf-2',
    name: 'Grooved HDF Acoustic Door', 
    category: 'HDF Flush Door', 
    year: '2024',
    description: 'Precision milled horizontal grooves with high sound insulation core.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'hdf-3',
    name: 'Concealed Frame HDF Door', 
    category: 'HDF Flush Door', 
    year: '2025',
    description: 'Frameless flush-mount interior door engineered for seamless walls.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- Heavy Duty Wooden Door (3) ---
  { 
    id: 'hd-1',
    name: 'Artisan Wood Door', 
    category: 'Heavy Duty Wooden Door', 
    year: '2023',
    description: 'Solid mahogany construction with reinforced security steel core.',
    image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'hd-2',
    name: 'Pivot Iroko Timber Door', 
    category: 'Heavy Duty Wooden Door', 
    year: '2024',
    description: 'Monumental architectural pivot door crafted from weatherproof Iroko wood.',
    image: 'https://images.unsplash.com/photo-1528740561998-3a56201a3cd4?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'hd-3',
    name: 'Carved Walnut Entrance', 
    category: 'Heavy Duty Wooden Door', 
    year: '2025',
    description: 'Hand-carved geometric relief panels with biometric smart lock integration.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- Dining Sets (3) ---
  { 
    id: 'ds-1',
    name: 'Marble Dining Set', 
    category: 'Dining Sets', 
    year: '2022',
    description: 'Natural Carrara marble top with solid walnut sculptural pedestal.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e16208a502?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'ds-2',
    name: 'Minimalist Ash Dining Table', 
    category: 'Dining Sets', 
    year: '2024',
    description: '6-seater bleached ash wood table with matching upholstered chairs.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'ds-3',
    name: 'Smoked Glass Banquet Set', 
    category: 'Dining Sets', 
    year: '2025',
    description: 'Oval tempered smoked glass table supported by dual fluted travertine columns.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- Wardrobes (3) ---
  { 
    id: 'wd-1',
    name: 'Minimalist Wardrobe', 
    category: 'Wardrobes', 
    year: '2024',
    description: 'Floor-to-ceiling fitted closet with soft-close seamless matte doors.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'wd-2',
    name: 'Glass Display Walk-in', 
    category: 'Wardrobes', 
    year: '2024',
    description: 'Bronze tinted glass doors with integrated warm LED hanging rails.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252ded8?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'wd-3',
    name: 'Slatted Teak Wardrobe', 
    category: 'Wardrobes', 
    year: '2025',
    description: 'Custom ventilated louvered wood wardrobe with modular internal drawers.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- Kitchen Cabinet (3) ---
  { 
    id: 'kc-1',
    name: 'Artisan Kitchen Suite', 
    category: 'Kitchen Cabinet', 
    year: '2024',
    description: 'Custom cabinetry with ergonomic layouts and forest green lacquer finishes.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'kc-2',
    name: 'Monochrome Island Kitchen', 
    category: 'Kitchen Cabinet', 
    year: '2024',
    description: 'Matte black anti-fingerprint cabinets paired with waterfall quartz island.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'kc-3',
    name: 'Warm Oak Galley Kitchen', 
    category: 'Kitchen Cabinet', 
    year: '2025',
    description: 'Handleless natural oak base units with brass mesh upper cabinetry.',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=1000&auto=format&fit=crop' 
  },

  // --- Dressing Mirror (3) ---
  { 
    id: 'dm-1',
    name: 'Backlit Dressing Mirror', 
    category: 'Dressing Mirror', 
    year: '2023',
    description: 'Full-length arch mirror with diffused warm perimeter LED lighting.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'dm-2',
    name: 'Pill-Shaped Brass Mirror', 
    category: 'Dressing Mirror', 
    year: '2024',
    description: 'Brushed brass frame vanity mirror with anti-fog touch control.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'dm-3',
    name: 'Freestanding Swivel Mirror', 
    category: 'Dressing Mirror', 
    year: '2025',
    description: 'Solid walnut frame standing mirror with hidden rear jewelry storage.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop' 
  }
];

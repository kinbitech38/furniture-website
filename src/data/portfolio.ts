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
  { 
    id: '1',
    name: 'Modern TV Console', 
    category: 'TV Console', 
    year: '2024',
    description: 'Sleek, minimalist entertainment unit with integrated cable management.',
    image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '2',
    name: 'Velvet Cloud Sofa', 
    category: 'Sofa', 
    year: '2023',
    description: 'Deep-seated luxury with premium velvet upholstery.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '3',
    name: 'Executive Lounge Chair', 
    category: 'Chairs', 
    year: '2024',
    description: 'Ergonomic design for maximum comfort and style.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '4',
    name: 'HDF Flush Entry', 
    category: 'HDF Flush Door', 
    year: '2023',
    description: 'Smooth finish, high-density fiberboard door for modern interiors.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '5',
    name: 'Marble Dining Set', 
    category: 'Dining Sets', 
    year: '2022',
    description: 'Natural marble top with solid wood legs.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e16208a502?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '6',
    name: 'Minimalist Wardrobe', 
    category: 'Wardrobes', 
    year: '2024',
    description: 'Space-saving storage solution with soft-close doors.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '7',
    name: 'Artisan Kitchen Suite', 
    category: 'Kitchen Cabinet', 
    year: '2024',
    description: 'Custom cabinetry with ergonomic layouts and premium finishes.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '8',
    name: 'Backlit Dressing Mirror', 
    category: 'Dressing Mirror', 
    year: '2023',
    description: 'Integrated smart lighting for the perfect vanity experience.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '9',
    name: 'Luxury Bedframe', 
    category: 'Bedframes', 
    year: '2024',
    description: 'Premium upholstered frame with integrated slat support.',
    image: 'https://images.unsplash.com/photo-1505693333238-bc63a460950b?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '10',
    name: 'Artisan Wood Door', 
    category: 'Heavy Duty Wooden Door', 
    year: '2023',
    description: 'Solid mahogany construction with reinforced security core.',
    image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '11',
    name: 'Sleek Bed Console', 
    category: 'Bed Console', 
    year: '2024',
    description: 'Floating bedside unit with wireless charging integration.',
    image: 'https://images.unsplash.com/photo-1616486341353-37521072aa0b?q=80&w=2000&auto=format&fit=crop' 
  }
];

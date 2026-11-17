export interface CategoryVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // can be a URL.createObjectURL or external web url
  thumbnailUrl?: string; // custom wallpaper or auto-extracted canvas frame
  category: string;
  uploadedAt: string;
  fileSize?: string;
}

export type CategoryName =
  | 'TV Console'
  | 'Bed Console'
  | 'Sofa'
  | 'Chairs'
  | 'Bedframes'
  | 'HDF Flush Door'
  | 'Heavy Duty Wooden Door'
  | 'Dining Sets'
  | 'Wardrobes'
  | 'Kitchen Cabinet'
  | 'Dressing Mirror';

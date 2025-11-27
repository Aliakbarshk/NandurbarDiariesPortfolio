export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface GeneratedCaption {
  caption: string;
  hashtags: string[];
}

export interface Reel {
  id: number;
  type: 'viral' | 'promo';
  title: string;
  views: string;
  likes: number; // Added for vote functionality
  image: string;
  category: string;
  isPinned?: boolean;
}
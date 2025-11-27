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

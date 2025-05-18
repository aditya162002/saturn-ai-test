export interface SectionItem {
  id: string;
  content: string;
}

export interface SectionData {
  title: string;
  items: SectionItem[];
}

export interface Sections {
  [key: string]: SectionData;
}

export interface Message {
  id: string;
  user: {
    name: string;
    initials: string;
    color: 'primary' | 'gray';
  };
  text: string;
  time: string;
  isHighlighted?: boolean;
} 
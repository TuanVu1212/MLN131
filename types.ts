
export interface Section {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  badge: string;
  customOverlay?: boolean;
}

export interface GroundingSource {
  web?: {
    uri: string;
    title: string;
  };
}

export interface DetailedInfo {
  title: string;
  content: string;
  culturalContext: string;
  significance: string | number;
  sources?: GroundingSource[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

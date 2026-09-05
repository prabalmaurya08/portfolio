export interface Skill {
  name: string;
  category: 'Mobile' | 'Backend & Cloud' | 'Languages' | 'Web & Tools';
  icon: string;
  level?: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type?: 'Full-time' | 'Contract' | 'Internship';
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Flutter' | 'Kotlin & Compose' | 'Android Native' | 'Firebase & Cloud';
  tagline?: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  releaseUrl?: string;
  playStoreUrl?: string;
  badge?: string;
  publishedUnder?: string;
  highlights?: string[];
  architecture?: string;
}

export interface PublishedApp {
  id: string;
  title: string;
  tagline: string;
  description: string;
  platform: string;
  developerAccount: string;
  technologies: string[];
  features: string[];
  playStoreUrl: string;
  packageName?: string;
  badge?: string;
}

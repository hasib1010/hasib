// Type definitions for the portfolio website

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'design' | 'backend' | 'frontend' | 'qa';
  bio: string;
  skills: string[];
  image: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  gallery?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  link?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
  date?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
}

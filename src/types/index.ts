export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Client & Business' | 'AI-Powered' | 'Personal / Full-Stack';
  description: string;
  problemSolved: string;
  technologies: string[];
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlightBadge?: string;
  metrics?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  type: string;
  highlight?: boolean;
  responsibilities: string[];
  technologies: string[];
  contributions: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration?: string;
  year?: string;
  grade: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    levelDescription: string;
    iconName?: string;
  }[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  targetRole: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  githubUsername: string;
  publicRepos: number;
  liveAppsCount: number;
  summary: string;
  languages: string[];
  interests: string[];
}

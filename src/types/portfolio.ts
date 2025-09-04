export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface TerminalCommand {
  command: string;
  description: string;
  aliases?: string[];
  category: 'navigation' | 'info' | 'fun';
}

export interface TerminalHistory {
  command: string;
  output: string[];
  timestamp: Date;
}

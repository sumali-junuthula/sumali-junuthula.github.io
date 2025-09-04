import { Skill, Project, TerminalCommand } from '../types/portfolio';

export const skills: Skill[] = [
  {
    name: 'React',
    category: 'frontend',
    level: 'expert',
    description: 'Building modern user interfaces with hooks, context, and state management'
  },
  {
    name: 'TypeScript',
    category: 'languages',
    level: 'advanced',
    description: 'Type-safe JavaScript development with advanced type patterns'
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 'advanced',
    description: 'Server-side JavaScript development and API creation'
  },
  {
    name: 'Python',
    category: 'languages',
    level: 'intermediate',
    description: 'Data analysis, automation, and backend development'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'expert',
    description: 'Utility-first CSS framework for rapid UI development'
  },
  {
    name: 'Git',
    category: 'tools',
    level: 'advanced',
    description: 'Version control and collaborative development workflows'
  },
  {
    name: 'PostgreSQL',
    category: 'backend',
    level: 'intermediate',
    description: 'Relational database design and optimization'
  },
  {
    name: 'Docker',
    category: 'tools',
    level: 'intermediate',
    description: 'Containerization and deployment automation'
  }
];

export const projects: Project[] = [
  {
    id: 'terminal-portfolio',
    title: 'Terminal Portfolio',
    description: 'Interactive terminal-style portfolio website with command-line interface',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/user/terminal-portfolio',
    demo: 'https://terminal-portfolio.dev',
    status: 'completed'
  },
  {
    id: 'task-manager',
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered prioritization',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    github: 'https://github.com/user/ai-task-manager',
    status: 'in-progress'
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Portfolio Tracker',
    description: 'Real-time cryptocurrency portfolio tracking with analytics',
    technologies: ['React', 'TypeScript', 'Chart.js', 'CoinGecko API'],
    github: 'https://github.com/user/crypto-tracker',
    demo: 'https://crypto-tracker.app',
    status: 'completed'
  }
];

export const terminalCommands: TerminalCommand[] = [
  {
    command: 'help',
    description: 'Show all available commands',
    aliases: ['h', '?'],
    category: 'info'
  },
  {
    command: 'skills',
    description: 'Display my technical skills',
    aliases: ['abilities', 'tech'],
    category: 'info'
  },
  {
    command: 'projects',
    description: 'Show my portfolio projects',
    aliases: ['work', 'portfolio'],
    category: 'info'
  },
  {
    command: 'about',
    description: 'Learn more about me',
    aliases: ['info', 'bio'],
    category: 'info'
  },
  {
    command: 'contact',
    description: 'Get my contact information',
    aliases: ['reach', 'email'],
    category: 'info'
  },
  {
    command: 'clear',
    description: 'Clear the terminal screen',
    aliases: ['cls'],
    category: 'navigation'
  },
  {
    command: 'whoami',
    description: 'Display current user information',
    category: 'fun'
  },
  {
    command: 'date',
    description: 'Show current date and time',
    category: 'fun'
  },
  {
    command: 'pwd',
    description: 'Print working directory',
    category: 'navigation'
  }
];

export const aboutInfo = {
  name: 'Sumali Junuthula',
  title: 'Full Stack Developer',
  location: 'San Francisco, CA',
  experience: '5+ years',
  description: `
    Passionate full-stack developer with expertise in modern web technologies.
    I love creating interactive experiences and solving complex problems through code.
    
    Currently focused on React, TypeScript, and Node.js development.
    Always learning new technologies and best practices.
  `,
  email: 'hello@example.com',
  github: 'https://github.com/example',
  linkedin: 'https://linkedin.com/in/example',
  website: 'https://sumalijunuthula.dev'
};

import * as TablerIcons from '@tabler/icons-react';

export const themes = ['dracula', 'cmyk'] as const;
export type Theme = (typeof themes)[number];
export type ThemeColors = {
  'color-scheme': 'light' | 'dark';
  primary: `#${string}`;
  'primary-content': `#${string}`;
  secondary: `#${string}`;
  'secondary-content': `#${string}`;
  accent: `#${string}`;
  'accent-content': `#${string}`;
  neutral: `#${string}`;
  'neutral-content': `#${string}`;
  'base-100': `#${string}`;
  'base-200': `#${string}`;
  'base-300': `#${string}`;
  'base-content': `#${string}`;
};

export enum SectionEnum {
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  WORK = 'work',
  SCHOOL = 'school',
  CONTACT = 'contact',
}
export const sections: Record<SectionEnum, string> = {
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  work: 'Experience',
  school: 'Education',
  contact: 'Contact',
};
export type SectionType = (typeof sections)[SectionEnum];

const { createReactComponent, ...Icons } = TablerIcons;
export type IconKey = keyof typeof Icons;
export { Icons };

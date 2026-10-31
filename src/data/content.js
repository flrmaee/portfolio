// All site content lives here. Edit this file to update the site.
export const asset = (file) => `${import.meta.env.BASE_URL}images/assets/${file}`;

export const GITHUB = 'https://github.com/flrmaee';
export const EMAIL = 'floriemaemagsalay92@gmail.com';

export const skills = [
  { id: 'skills-languages', title: 'Languages', soft: false, items: ['JavaScript', 'Java', 'HTML/CSS', 'Dart'] },
  { id: 'skills-tools', title: 'Tools', soft: false, items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Firebase'] },
  { id: 'skills-learning', title: 'Currently Learning', soft: true, items: ['Python', 'Node.js', 'Databases'] },
];

// To add a project, add one object here.
export const projects = [
  {
    id: 'project-brewtopia',
    title: 'BrewTopia',
    description:
      "A coffee shop app concept built to bring people together over handcrafted drinks and a cozy space to relax. It's a mobile app for browsing the menu and ordering, with a warm, welcoming feel throughout.",
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/flrmaee/BrewTopia',
  },
];

export const navItems = [
  { type: 'link', label: 'About', href: '#about', section: 'about' },
  {
    type: 'dropdown', id: 'menu-skills', label: 'Skills', section: 'skills',
    items: [
      { label: 'All skills', href: '#skills' },
      { label: 'Languages', href: '#skills-languages' },
      { label: 'Tools', href: '#skills-tools' },
      { label: 'Currently learning', href: '#skills-learning' },
    ],
  },
  {
    type: 'dropdown', id: 'menu-projects', label: 'Projects', section: 'projects',
    items: [
      { label: 'All projects', href: '#projects' },
      { label: 'BrewTopia', href: '#project-brewtopia' },
      { label: 'More on GitHub', href: `${GITHUB}?tab=repositories`, external: true },
    ],
  },
  { type: 'link', label: 'Contact', href: '#contact', section: 'contact' },
];

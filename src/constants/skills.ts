export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Desarrollo Frontend',
    skills: [
      { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
      { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
      { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
      { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
      { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
      { name: 'Redux', icon: 'https://skillicons.dev/icons?i=redux' },
      { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
      { name: 'TailwindCSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
      { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    ],
  },
  {
    category: 'Desarrollo Backend',
    skills: [
      { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
      { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
      { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
      { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
      { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgresql' },
      { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
      { name: 'Prisma', icon: 'https://skillicons.dev/icons?i=prisma' },
      { name: 'GraphQL', icon: 'https://skillicons.dev/icons?i=graphql' },
      { name: 'Apollo', icon: 'https://skillicons.dev/icons?i=apollo' },
    ],
  },
  {
    category: 'Herramientas de Desarrollo',
    skills: [
      { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
      { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
      { name: 'NPM', icon: 'https://skillicons.dev/icons?i=npm' },
      { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },
      { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
      { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
      { name: 'Vite', icon: 'https://skillicons.dev/icons?i=vite' },
      { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
      { name: 'Jest', icon: 'https://skillicons.dev/icons?i=jest' },
    ],
  },
];

export interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  link: string;
  githubRepository: string;
  backendRepository?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: '01949e5a-f275-70ba-a8d7-834a48cdf4d4',
    title: 'Gestión de proyectos',
    description:
      'Aplicación web para agilizar la gestión de proyectos y tareas en un entorno de equipo. Admite el registro de usuarios, la confirmación de cuentas y la autenticación basada en roles, lo que garantiza que el acceso a determinadas acciones esté restringido o se conceda en función de las permisos de los usuarios.',
    image: 'daem-solutions.png',
    link: 'https://www.daemsolutions.com',
    githubRepository: 'https://github.com/daniel-pompa/project-management-system',
    backendRepository: 'https://github.com/daniel-pompa/project-management-backend',
    technologies: [
      'Vite',
      'TypeScript',
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'Tailwind CSS',
    ],
  },
  {
    id: '01949e5a-f275-7bfc-b8db-05a8382d90e6',
    title: 'Buscador de gifs',
    description:
      'Aplicación basada en React que permite buscar, descargar y ver GIFs utilizando la API de GIPHY. Explora y navega fácilmente por una diversa gama de GIFs e imágenes a través de una interfaz intuitiva y fácil de usar.',
    image: 'gif-finder.png',
    link: 'https://gif-finder-react.vercel.app',
    githubRepository: 'https://github.com/daniel-pompa/gif-finder-app',
    technologies: ['Vite', 'React', 'JavaScript'],
  },
  {
    id: '01949e5a-f275-7334-bc14-23450e4d57a9',
    title: 'Criptomonedas',
    description:
      'Aplicación basada en React diseñada para proporcionar cotizaciones de criptodivisas en tiempo real a través de la API CryptoCompare. Esta plataforma fácil de usar ofrece un resumen exhaustivo de los datos de criptodivisas, incluyendo el precio actual, los precios más altos y más bajos del día, la variación de precios de 24 horas y la hora de actualización más reciente.',
    image: 'crypto-quote.png',
    link: 'https://crypto-quote-react.vercel.app',
    githubRepository: 'https://github.com/daniel-pompa/crypto-quote-app',
    technologies: ['Vite', 'React', 'TypeScript'],
  },
];

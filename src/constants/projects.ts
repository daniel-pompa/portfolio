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
      'Aplicación web para gestionar proyectos y tareas en equipo de forma ágil. Incluye registro de usuarios, confirmación de cuentas y autenticación basada en roles, lo que garantiza que el acceso a ciertas funcionalidades esté controlado según los permisos de cada usuario.',
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
    id: '01949e5a-f275-7c1a-a8d7-834a48cdf4d4',
    title: 'Ecommerce',
    description:
      'Plataforma de comercio electrónico desarrollada con tecnologías modernas como Next.js, TypeScript y Prisma. Incluye autenticación, gestión de productos, carrito de compra y un flujo de pago simulado con PayPal Sandbox (sin transacciones reales). Proyecto orientado a demostrar habilidades full stack en el desarrollo de soluciones de e-commerce escalables.',
    image: 'ecommerce.png',
    link: 'https://next-teslo-shop-xi.vercel.app/',
    githubRepository: 'https://github.com/daniel-pompa/next-teslo-shop',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Docker',
      'Prisma',
      'PostgreSQL',
    ],
  },
  {
    id: '01949e5a-f275-7c1a-a8d7-834b59cdf4d4',
    title: 'Gestor de tareas',
    description:
      'Aplicación full stack para la gestión de tareas que permite crear, editar y eliminar entradas de forma sencilla. Incorpora persistencia de datos y un manejo eficiente del estado para ofrecer una experiencia de usuario fluida y eficaz.',
    image: 'next-todo-list.png',
    link: 'https://next-to-do-list-seven.vercel.app/',
    githubRepository: 'https://github.com/daniel-pompa/next-to-do-list',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Docker',
      'Prisma',
      'PostgreSQL',
    ],
  },
  {
    id: '01949e5a-f275-7334-bc14-23450e4d57a9',
    title: 'Cotizador criptomonedas',
    description:
      'Aplicación que muestra cotizaciones de criptomonedas en tiempo real utilizando la API de CryptoCompare. Ofrece información como precio actual, variación en 24 horas, precios máximos y mínimos del día y hora de la última actualización.',
    image: 'crypto-quote.png',
    link: 'https://crypto-quote-react.vercel.app',
    githubRepository: 'https://github.com/daniel-pompa/crypto-quote-app',
    technologies: ['Vite', 'React', 'TypeScript'],
  },
  {
    id: '01949e5a-f278-7e1b-a8d7-934k59bdf4l6',
    title: 'Control de gastos',
    description:
      'Aplicación para el control de gastos personales. Permite establecer un presupuesto, registrar y clasificar gastos por categoría, y visualizar el estado financiero en tiempo real. Su interfaz clara facilita la gestión eficiente del dinero y el seguimiento de objetivos financieros.',
    image: 'budget-master.png',
    link: 'https://budget-master-react.vercel.app/',
    githubRepository: 'https://github.com/daniel-pompa/budget-master-app',
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '01949e5a-f275-7bfc-b8db-05a8382d90e6',
    title: 'Buscador de GIFs',
    description:
      'Aplicación desarrollada con React para buscar, visualizar y descargar GIFs a través de la API de GIPHY. Permite explorar contenidos de forma sencilla mediante una interfaz intuitiva y fácil de usar.',
    image: 'gif-finder.png',
    link: 'https://gif-finder-react.vercel.app',
    githubRepository: 'https://github.com/daniel-pompa/gif-finder-app',
    technologies: ['Vite', 'React', 'JavaScript'],
  },
];

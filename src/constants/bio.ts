interface Bio {
  readonly name: string;
  readonly roles: readonly string[];
  readonly description: string;
  readonly image?: string;
}

export const bio: Bio = {
  name: 'Daniel',
  roles: [
    'Desarrollador front-end',
    'Desarrollador back-end',
    'Desarrollador MERN stack',
  ],
  description:
    'Desarrollador web full-stack con experiencia en la pila MERN. Me dedico a construir aplicaciones modernas y centradas en la experiencia del usuario, fusionando soluciones tecnológicas sólidas con un diseño atractivo y funcional.',
};

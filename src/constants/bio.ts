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
    'Desarrollador web full-stack con experiencia en la pila MERN/PERN. Diseño y desarrollo aplicaciones modernas orientadas a la experiencia del usuario, combinando soluciones tecnológicas sólidas con interfaces atractivas y funcionales.',
};

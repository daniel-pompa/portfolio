import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className='w-full py-10 bg-slate-100 border-t border-slate-200'>
      <div className='flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-6 md:space-y-0 px-6 text-center'>
        <div className='text-slate-600'>© {currentYear} Daniel Pompa</div>
        {/* Navbar Links */}
        <div className='flex space-x-2 md:space-x-6'>
          <a
            href='#hero'
            className='text-slate-600 hover:text-slate-900'
            aria-label='Sobre mí'
          >
            Sobre mí
          </a>
          <a
            href='#skills'
            className='text-slate-600 hover:text-slate-900'
            aria-label='Habilidades'
          >
            Habilidades
          </a>
          <a
            href='#projects'
            className='text-slate-600 hover:text-slate-900'
            aria-label='Proyectos'
          >
            Proyectos
          </a>
          <a
            href='#contact'
            className='text-slate-600 hover:text-slate-900'
            aria-label='Contacto'
          >
            Contacto
          </a>
        </div>
        {/* Social Links */}
        <div className='flex space-x-4 md:space-x-6'>
          <a
            href='https://github.com/tuusuario'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate-600 hover:text-slate-900'
            aria-label='GitHub'
          >
            <FaGithub className='w-6 h-6' />
          </a>
          <a
            href='https://linkedin.com/in/tuusuario'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate-600 hover:text-slate-900'
            aria-label='LinkedIn'
          >
            <FaLinkedin className='w-6 h-6' />
          </a>
        </div>
      </div>
    </footer>
  );
};

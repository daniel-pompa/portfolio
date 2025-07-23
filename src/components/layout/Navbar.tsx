import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Sobre mí', href: '#hero' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='fixed top-0 left-0 w-full z-50 bg-[#0a001b] h-24'
    >
      <div className='max-w-6xl mx-auto flex justify-between items-center px-6 md:px-2 h-full'>
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-slate-50 hover:text-orange-500 transition'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='flex space-x-6'>
          <motion.a
            href='https://github.com/daniel-pompa'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}
            className='text-slate-50 hidden md:block'
          >
            <FaGithub className='text-3xl hover:text-orange-500 transition' />
          </motion.a>
          <motion.a
            href='https://linkedin.com/in/daniel-pompa'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}
            className='text-slate-50 hidden md:block'
          >
            <FaLinkedin className='text-3xl hover:text-orange-500 transition' />
          </motion.a>
        </div>
        <button
          className='md:hidden text-slate-50 text-2xl focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='md:hidden absolute top-full left-0 w-full shadow-md bg-[#0a001b]'
          >
            <nav className='flex flex-col space-y-4 py-4 px-6'>
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-slate-50 hover:text-orange-500 transition'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

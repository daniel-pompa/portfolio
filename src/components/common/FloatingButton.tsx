import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiChevronUp } from 'react-icons/bi';

export const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='fixed bottom-6 right-6 bg-slate-800 text-white text-2xl p-3 rounded-full hover:bg-slate-900 transition'
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        scale: isVisible ? [1, 1.2, 1] : 1,
      }}
      transition={{
        opacity: { duration: 0.3, ease: 'easeInOut' },
        y: { duration: 0.3, ease: 'easeInOut' },
        scale: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <BiChevronUp />
    </motion.button>
  );
};

import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { bio } from '../../constants';
import { letterVariants, typingVariants } from '../../utils';

export const Hero = () => {
  const roles = bio.roles.length > 0 ? [...bio.roles] : ['Desarrollador MERN stack'];

  return (
    <motion.section
      id='hero'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='min-h-screen flex flex-col justify-center items-center bg-[#0a001b] py-16 md:py-24'
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-center max-w-6xl'
      >
        <div className='mt-20 md:mt-0 px-6 md:px-0'>
          <motion.h1
            className='text-slate-50 mb-6'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Hola, me llamo <span>{bio.name}</span>
          </motion.h1>
          <motion.h2
            className='text-orange-500 mb-6'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}
          >
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          </motion.h2>
          <motion.p
            className='text-slate-50 mb-6'
            variants={typingVariants}
            initial='hidden'
            animate='visible'
          >
            {bio.description.split('').map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <motion.div
          className='flex justify-end'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <img
            src='/laptop.svg'
            alt='Laptop with code'
            className='w-full md:w-96 rounded-full'
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

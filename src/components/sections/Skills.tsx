import { SkillCategory, skills } from '../../constants';
import { motion } from 'framer-motion';

export const Skills = () => {
  return (
    <motion.section
      id='skills'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className='min-h-screen flex flex-col justify-center py-24 md:py-0'
    >
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <motion.h2
          className='font-bold flex items-center justify-center my-6'
          initial={{ scaleX: 0.5, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className='flex-1 h-px bg-slate-300 mr-6'></span>
          Habilidades
          <span className='flex-1 h-px bg-slate-300 ml-6'></span>
        </motion.h2>
        <motion.p
          className='text-center mb-8'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Descubre las competencias técnicas y herramientas que utilizo en el desarrollo
          web.
        </motion.p>
        {/* Category container */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {skills.map((group: SkillCategory, index) => (
            <motion.div
              key={group.category}
              className='bg-white px-4 py-6 rounded-lg shadow-lg'
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              viewport={{ once: true }}
            >
              {/* Category title */}
              <motion.h3
                className='text-center font-bold mb-6'
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {group.category}
              </motion.h3>
              {/* Skill icons */}
              <div className='grid grid-cols-3 gap-6 place-items-center'>
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className='flex flex-col items-center space-y-2 group'
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={skill.icon} alt={skill.name} className='w-12 h-12' />
                    <span className='text-sm group-hover:text-slate-900'>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '../common/Modal';
import { Project, projects } from '../../constants';

export const Projects = () => {
  const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_URL;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.section
      id='projects'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className='py-16 md:py-24 scroll-mt-32'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <motion.h2
          className='font-bold flex items-center justify-center my-6'
          initial={{ scaleX: 0.5, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className='flex-1 h-px bg-slate-300 mr-6'></span>
          Proyectos
          <span className='flex-1 h-px bg-slate-300 ml-6'></span>
        </motion.h2>
        <motion.p
          className='text-center mb-8'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Explora una selección de mis proyectos recientes. Cada uno incluye descripción,
          tecnologías, enlaces a repositorios y demostraciones.
        </motion.p>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className='bg-white p-6 rounded-lg shadow-lg cursor-pointer'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              whileHover={{
                y: -20,
                transition: { duration: 0.2, delay: 0 },
                boxShadow: '0px 10px 20px rgba(0,0,0,0.15)',
              }}
              onClick={() => openModal(project)}
              viewport={{ once: true }}
            >
              <img
                src={`${cloudinaryUrl}/${project.image}`}
                alt={project.title}
                className='w-full object-cover rounded-md mb-4'
              />
              <h3 className='font-bold mb-2'>{project.title}</h3>
              <p className='text-slate-600 mb-4 line-clamp-3'>{project.description}</p>
              <div className='flex flex-wrap items-center justify-center gap-2 mb-4'>
                {project.technologies.map(tech => (
                  <motion.span
                    key={tech}
                    className='px-3 py-1 text-xs font-medium rounded-md border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200'
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {modalOpen && selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </motion.section>
  );
};

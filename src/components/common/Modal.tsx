import { motion } from 'motion/react';
import { FaTimes, FaGlobe, FaGithub } from 'react-icons/fa';
import { Project } from '../../constants';

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export const Modal = ({ project, onClose }: ModalProps) => {
  const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_URL;

  if (!project) return null;

  const {
    image,
    title,
    description,
    link,
    githubRepository,
    backendRepository,
    technologies,
  } = project;

  // Determine if the project has backend technologies
  const hasBackend = technologies.some(tech =>
    ['mongodb', 'postgresql', 'firebase', 'mysql', 'express'].includes(tech.toLowerCase())
  );

  return (
    <div className='fixed inset-0 bg-black bg-opacity-45 flex justify-center items-center z-50 animate__animated animate__fadeIn'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='bg-white rounded-md w-full max-w-3xl relative overflow-hidden'
      >
        {/* Sliding container */}
        <div className='max-h-screen overflow-y-auto p-8'>
          {/* Closing button */}
          <button onClick={onClose} className='absolute top-4 right-4 text-2xl z-50'>
            <FaTimes />
          </button>
          {/* Project image */}
          <img
            src={`${cloudinaryUrl}/${image}`}
            alt={title}
            className='w-full object-cover rounded-md my-4'
          />
          <h3 className='font-bold mb-4'>{title}</h3>
          <p className='text-slate-500 mb-4'>{description}</p>
          {/* Technologies used */}
          <div className='flex flex-wrap items-center gap-2 mb-4'>
            {technologies.map(tech => (
              <motion.span
                key={tech}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='px-3 py-1 text-xs font-medium rounded-md border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200'
              >
                {tech}
              </motion.span>
            ))}
          </div>
          {/* Dynamic buttons */}
          <div className='flex flex-col md:flex-row gap-4'>
            {/* Button for website */}
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className={`py-2 px-4 rounded-md text-center border border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-700 font-semibold ${
                hasBackend ? 'w-full md:w-1/3' : 'w-full md:w-1/2'
              } flex items-center justify-center gap-2`}
            >
              <FaGlobe className='text-xl md:text-2xl' />
              Ver sitio web
            </a>
            {/* Button for repository */}
            <a
              href={githubRepository}
              target='_blank'
              rel='noopener noreferrer'
              className={`py-2 px-4 rounded-md text-center border border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-700 font-semibold ${
                hasBackend ? 'w-full md:w-1/3' : 'w-full md:w-1/2'
              } flex items-center justify-center gap-2`}
            >
              <FaGithub className='text-xl md:text-2xl' />
              {hasBackend ? 'Ver código frontend' : 'Ver código'}
            </a>
            {/* Button for backend repository (only if have backend) */}
            {hasBackend && backendRepository && (
              <a
                href={backendRepository}
                target='_blank'
                rel='noopener noreferrer'
                className='py-2 px-4 rounded-md text-center border border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-700 font-semibold w-full md:w-1/3 flex items-center justify-center gap-2'
              >
                <FaGithub className='text-xl md:text-2xl' />
                Ver código backend
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

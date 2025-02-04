import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { sendEmail } from '../../services';
import { useAlert, useForm } from '../../hooks';

export const Contact = () => {
  const { formData, isSubmitting, isSubmitted, error, handleChange, handleSubmit } =
    useForm();

  const showAlert = useAlert(isSubmitted);
  const showError = useAlert(!!error);

  return (
    <motion.section
      id='contact'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className='min-h-screen flex flex-col justify-center py-24 md:py-0'
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
          Contacto
          <span className='flex-1 h-px bg-slate-300 ml-6'></span>
        </motion.h2>
        <motion.p
          className='text-center mb-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          ¿Tienes alguna pregunta o propuesta? No dudes en ponerte en contacto conmigo.
        </motion.p>
        <motion.form
          onSubmit={e => handleSubmit(e, sendEmail)}
          className='max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200'
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
        >
          <div className='space-y-6'>
            <motion.input
              type='text'
              name='name'
              placeholder='Tu nombre'
              value={formData.name}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-0 outline-none transition-all duration-300'
              required
            />
            <motion.input
              type='email'
              name='email'
              placeholder='Tu correo electrónico'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-0 outline-none transition-all duration-300'
              required
            />
            <motion.textarea
              name='message'
              placeholder='Tu mensaje'
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-0 outline-none transition-all duration-300'
              required
            ></motion.textarea>
            <motion.button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-slate-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-900'
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </motion.button>
          </div>
          {showAlert && (
            <motion.div
              className='mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center justify-center gap-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaCheckCircle className='text-green-700' />
              <p>¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.</p>
            </motion.div>
          )}
          {showError && (
            <motion.div
              className='mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center justify-center gap-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaTimesCircle className='text-red-700' />
              <p>{error}</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

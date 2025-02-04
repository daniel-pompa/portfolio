import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type UseFormReturn = {
  formData: FormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    sendEmail: (data: FormData) => Promise<void>
  ) => Promise<void>;
  resetForm: () => void;
};

export const useForm = (): UseFormReturn => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    sendEmail: (data: FormData) => Promise<void>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await sendEmail(formData);
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setError('Error al enviar el mensaje. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

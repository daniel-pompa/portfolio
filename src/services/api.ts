import axios from 'axios';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await axios.post(FORMSPREE_ENDPOINT, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    throw new Error('Error al enviar el mensaje. Inténtalo de nuevo.');
  }
};

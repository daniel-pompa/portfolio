import { Variants } from 'framer-motion';

export const typingVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      staggerChildren: 0.05, // Delay between the occurrence of each letter
    },
  },
};

export const letterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

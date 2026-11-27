import { motion } from 'motion/react';

/**
 * Laat inhoud zacht invliegen zodra ze in beeld komt (één keer).
 */
export default function Reveal({ children, delay = 0, y = 28, as = 'div', className, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

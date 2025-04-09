import React from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '../hooks/useCustomCursor';

export function CustomCursor() {
  const { position, isHovering } = useCustomCursor();

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        mass: 0.5,
        stiffness: 400,
      }}
    >
      <div className={`w-full h-full rounded-full bg-blue-500 dark:bg-purple-500 ${
        isHovering ? 'mix-blend-difference' : 'mix-blend-normal'
      }`} />
    </motion.div>
  );
} 
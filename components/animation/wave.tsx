// components/Wave.tsx
'use client';

import { motion } from 'framer-motion';

export default function Wave() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-24 md:h-32 opacity-40"
      >
        <motion.path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28..."
          fill="white"
          fillOpacity="0.05"
          animate={{
            x: [0, -50, 0], // loop left to right and back
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05..."
          fill="white"
          fillOpacity="0.05"
          animate={{
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </svg>
    </div>
  );
}


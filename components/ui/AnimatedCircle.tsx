"use client";

import { motion } from "framer-motion";

interface AnimatedCircleProps {
  size?: number;
  className?: string;
  color?: string;
}

export function AnimatedCircle({ 
  size = 200, 
  className = "",
  color = "#06b6d4" // cyan-500
}: AnimatedCircleProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Glassdrop effect background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-full" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 blur-[60px]"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          className="absolute inset-0"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={color}
            strokeWidth="20"
            strokeOpacity="0.6"
            className="drop-shadow-2xl"
          />
        </svg>
      </motion.div>
      
      {/* Inner pulsing circle */}
      <motion.div
        animate={{
          scale: [0.7, 1.1, 0.7],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex items-center justify-center blur-[40px]"
      >
        <svg
          width={size * 0.8}
          height={size * 0.8}
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={color}
            strokeWidth="18"
            strokeOpacity="0.4"
          />
        </svg>
      </motion.div>
      
      {/* Outer glow circle */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 blur-[80px]"
      >
        <svg
          width={size * 1.2}
          height={size * 1.2}
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={color}
            strokeWidth="25"
            strokeOpacity="0.3"
          />
        </svg>
      </motion.div>
    </div>
  );
}

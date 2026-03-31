"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedVideoProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function AnimatedVideo({ src, alt, className = "", priority = false }: AnimatedVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 blur-2xl -z-10" />
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-auto object-cover"
        priority={priority}
        unoptimized
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}


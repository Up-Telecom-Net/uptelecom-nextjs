"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function VideoPlayer({ 
  src, 
  poster, 
  className = "", 
  autoplay = true,
  loop = true,
  muted = true 
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative rounded-2xl overflow-hidden shadow-2xl group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 blur-2xl -z-10" />
      <video
        src={src}
        poster={poster}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full h-auto object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
          onClick={() => {
            const video = document.querySelector('video');
            if (video) {
              video.play();
              setIsPlaying(true);
            }
          }}
        >
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <Play className="w-10 h-10 text-white ml-1" fill="white" />
          </div>
        </motion.button>
      )}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}


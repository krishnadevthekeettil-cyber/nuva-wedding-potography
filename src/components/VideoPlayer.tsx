import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay might be blocked by browser if not muted
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div 
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        loop={loop}
        muted={isMuted}
        playsInline
      />
      
      {/* Overlay Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center transition-all"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="w-20 h-20 rounded-full border border-brand-cream/30 bg-brand-cream/10 backdrop-blur-md flex items-center justify-center text-brand-cream"
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
            </motion.button>
            
            <div className="absolute bottom-10 right-10 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="p-3 rounded-full bg-brand-cream/10 backdrop-blur-md text-brand-cream border border-brand-cream/20"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play indicator when paused and controls are hidden */}
      <AnimatePresence>
        {!isPlaying && !showControls && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
              <Play size={24} className="ml-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

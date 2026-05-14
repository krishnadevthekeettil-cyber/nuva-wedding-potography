import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ImageSequenceProps {
  folderPath: string;
  frameCount: number;
  fps?: number;
  className?: string;
  loop?: boolean;
}

export default function ImageSequence({ 
  folderPath, 
  frameCount, 
  fps = 30, 
  className = "",
  loop = true 
}: ImageSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  
  // Pre-generate image paths
  const imagePaths = Array.from({ length: frameCount }, (_, i) => 
    `${folderPath}/ezgif-frame-${(i + 1).toString().padStart(3, '0')}.jpg`
  );

  useEffect(() => {
    let count = 0;
    const images: HTMLImageElement[] = [];

    imagePaths.forEach((path, index) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        count++;
        setLoadedCount(count);
        if (count === frameCount) {
          setIsReady(true);
        }
      };
      img.onerror = () => {
        // Handle missing frames gracefully
        count++;
        setLoadedCount(count);
        if (count === frameCount) setIsReady(true);
      };
      images[index] = img;
    });

    imagesRef.current = images;
  }, [folderPath, frameCount]);

  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameInterval = 1000 / fps;
    let lastTime = 0;
    let currentFrame = 0;
    let animationId: number;

    const render = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;

      if (elapsed >= frameInterval) {
        lastTime = timestamp - (elapsed % frameInterval);

        const img = imagesRef.current[currentFrame];
        if (img && img.complete) {
          // Sync canvas internal dimensions with its CSS display dimensions
          const { width, height } = canvas.getBoundingClientRect();
          if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Draw image with "cover" behavior
          const imgAspect = img.naturalWidth / img.naturalHeight;
          const canvasAspect = canvas.width / canvas.height;
          let drawWidth, drawHeight, offsetX, offsetY;

          if (canvasAspect > imgAspect) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgAspect;
            offsetX = 0;
            offsetY = -(drawHeight - canvas.height) / 2;
          } else {
            drawWidth = canvas.height * imgAspect;
            drawHeight = canvas.height;
            offsetX = -(drawWidth - canvas.width) / 2;
            offsetY = 0;
          }

          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }

        currentFrame++;
        if (currentFrame >= frameCount) {
          if (loop) {
            currentFrame = 0;
          } else {
            return; // Stop animation if not looping
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, [isReady, fps, frameCount, loop]);

  const progress = Math.round((loadedCount / frameCount) * 100);

  return (
    <div className={`relative overflow-hidden bg-brand-charcoal ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover"
      />
      
      <AnimatePresence>
        {!isReady && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-brand-charcoal z-10"
          >
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div 
                className="h-full bg-brand-cream"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-brand-cream/50">
              Loading Wedding Film {progress}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

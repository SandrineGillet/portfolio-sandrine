import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';

interface WaveformPlayerProps {
  title: string;
  audioUrl?: string;
}

export const WaveformPlayer: React.FC<WaveformPlayerProps> = ({ title, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bars, setBars] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8; // Set a default volume
    }
    // Generate random heights for the waveform
    setBars(Array.from({ length: 40 }, () => Math.random() * 100));
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        console.log("Tentative de lecture de :", audioUrl);
        audioRef.current.play().catch(err => {
          console.error("Erreur lecture audio:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioUrl]);

  return (
    <div className="bg-paper p-4 md:p-6 mt-4 flex items-center gap-4 md:gap-6 border border-ink/10 overflow-hidden">
      {audioUrl && (
        <audio 
          key={audioUrl}
          ref={audioRef} 
          src={audioUrl} 
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onLoadStart={() => setIsLoading(true)}
          onCanPlay={() => {
            setIsLoading(false);
            console.log("Audio prêt à être lu :", audioUrl);
          }}
          onError={(e) => {
            setIsLoading(false);
            console.error("Erreur de chargement audio pour :", audioUrl, e);
            setIsPlaying(false);
          }}
        />
      )}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        disabled={isLoading}
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm flex-shrink-0 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? (
          <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
        ) : (
          isPlaying ? <Pause className="text-black w-5 h-5 md:w-6 md:h-6" /> : <Play className="text-black w-5 h-5 md:w-6 md:h-6 ml-1" />
        )}
      </button>
      
      <div className="flex-1 min-w-0">
        <div className="text-white/50 text-[10px] uppercase tracking-widest mb-2 font-semibold truncate">
          {title}
        </div>
        <div className="h-10 flex items-end gap-1 overflow-hidden">
          {bars.slice(0, 30).map((height, i) => (
            <motion.div
              key={i}
              className="waveform-bar"
              animate={isPlaying ? {
                height: [
                  `${Math.max(15, height * 0.3)}%`,
                  `${Math.max(40, Math.random() * 80)}%`,
                  `${Math.max(15, height * 0.3)}%`
                ]
              } : {
                height: `${Math.max(15, height * 0.4)}%`
              }}
              transition={{
                duration: isPlaying ? 0.6 + Math.random() * 0.4 : 0.5,
                repeat: isPlaying ? Infinity : 0,
                ease: "easeInOut"
              }}
              style={{ 
                height: `${Math.max(15, height * 0.4)}%`,
                width: '3px',
                backgroundColor: 'white',
                borderRadius: '9999px',
                flexShrink: 0
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

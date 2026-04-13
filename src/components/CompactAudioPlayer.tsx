import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CompactAudioPlayerProps {
  audioUrl: string;
  label?: string;
}

export const CompactAudioPlayer: React.FC<CompactAudioPlayerProps> = ({ audioUrl, label = "Écouter l'actualité" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const p = (audio.currentTime / audio.duration) * 100;
      setProgress(p || 0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-4 bg-ink/5 p-3 rounded-lg group/player hover:bg-ink/10 transition-colors">
      <audio ref={audioRef} src={audioUrl} />
      
      <button 
        onClick={togglePlay}
        className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm flex-shrink-0"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
      </button>

      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-widest font-bold text-ink/60">{label}</span>
          <Volume2 size={12} className="text-ink/20" />
        </div>
        <div className="h-1 bg-ink/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

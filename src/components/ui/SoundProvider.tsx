import { useState, useEffect } from 'react';
import useSound from 'use-sound'; // We'll mock this behavior first without external dependency
import { motion } from 'framer-motion';

// Simple beep sound generator using Web Audio API
const useTechSound = () => {
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

    useEffect(() => {
        // Initialize AudioContext on user interaction to handle autoplay policies
        const initAudio = () => {
            if (!audioContext) {
                setAudioContext(new (window.AudioContext || (window as any).webkitAudioContext)());
            }
        };

        window.addEventListener('click', initAudio, { once: true });
        return () => window.removeEventListener('click', initAudio);
    }, [audioContext]);

    const playHover = () => {
        if (!audioContext) return;
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.05);

        gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
    };

    const playClick = () => {
        if (!audioContext) return;
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    };

    return { playHover, playClick };
};

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
    const { playHover, playClick } = useTechSound();

    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a')
            ) {
                playHover();
            }
        };

        const handleClick = () => {
            playClick();
        };

        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('click', handleClick);
        };
    }, [playHover, playClick]);

    return <>{children}</>;
};

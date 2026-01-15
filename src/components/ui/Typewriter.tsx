import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
}

export const Typewriter = ({ text, className = "", speed = 50, delay = 0 }: TypewriterProps) => {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    // Keep cursor blinking after typing is done
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [text, speed, delay]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className={className}>
            {displayText}
            <span className={`inline-block w-0.5 h-[1em] bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </span>
    );
};

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main dot */}
            <motion.div
                className="fixed w-2 h-2 bg-primary rounded-full"
                style={{
                    left: 0,
                    top: 0,
                }}
                animate={{
                    x: mousePosition.x - 4, // Center the 8px dot
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1, // Hide dot when hovering to focus on ring
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
            />

            {/* Trailing Ring */}
            <motion.div
                className="fixed border border-primary/50 rounded-full"
                style={{
                    left: 0,
                    top: 0,
                }}
                animate={{
                    x: mousePosition.x - (isHovering ? 24 : 12), // Center larger/smaller ring
                    y: mousePosition.y - (isHovering ? 24 : 12),
                    width: isHovering ? 48 : 24,
                    height: isHovering ? 48 : 24,
                    opacity: isHovering ? 1 : 0.5,
                    borderColor: isHovering ? 'var(--primary)' : 'rgba(var(--primary), 0.5)',
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
            >
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full h-full bg-primary/10 rounded-full blur-sm"
                    />
                )}
            </motion.div>
        </div>
    );
};

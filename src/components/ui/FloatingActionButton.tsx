import { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const FloatingActionButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Show FAB after scrolling down 300px
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            setIsVisible(window.scrollY > 300);
        });
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-24 right-6 z-40 flex flex-col gap-2 items-end"
                >
                    {/* Back to Top */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full w-12 h-12 shadow-lg bg-background/90 backdrop-blur-sm border-border hover:border-primary hover:bg-primary/10"
                    >
                        <ChevronUp size={20} />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

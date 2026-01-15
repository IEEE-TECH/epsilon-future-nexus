import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [steps, setSteps] = useState<string[]>([]);

    const bootSequence = [
        "INITIALIZING_CORE...",
        "LOADING_MODULES...",
        "CONNECTING_TO_NEXUS...",
        "VERIFYING_SECURITY_PROTOCOLS...",
        "SYSTEM_READY."
    ];

    useEffect(() => {
        // Add steps one by one
        let currentStep = 0;

        // Total load time approx 2.5 seconds
        const interval = setInterval(() => {
            if (currentStep < bootSequence.length) {
                setSteps(prev => [...prev, bootSequence[currentStep]]);
                currentStep++;
            } else {
                clearInterval(interval);
                setTimeout(() => setLoading(false), 500);
            }
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Matrix rain effect simplified background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/dummy/giphy.gif')] opacity-5" />
                        {/* Note: Using CSS grid instead of image for stability */}
                        <div className="w-full h-full"
                            style={{
                                backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 184, 212, .3) 25%, rgba(0, 184, 212, .3) 26%, transparent 27%, transparent 74%, rgba(0, 184, 212, .3) 75%, rgba(0, 184, 212, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 184, 212, .3) 25%, rgba(0, 184, 212, .3) 26%, transparent 27%, transparent 74%, rgba(0, 184, 212, .3) 75%, rgba(0, 184, 212, .3) 76%, transparent 77%, transparent)',
                                backgroundSize: '50px 50px'
                            }}
                        />
                    </div>

                    <div className="w-full max-w-md px-6 z-10 font-mono text-sm md:text-base">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 text-center"
                        >
                            <div className="inline-block relative">
                                <span className="text-4xl md:text-5xl font-bold text-primary animate-pulse">ε</span>
                                <div className="absolute inset-0 blur-lg bg-primary/30 animate-pulse" />
                            </div>
                        </motion.div>

                        <div className="space-y-2 font-mono text-xs md:text-sm">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-primary/80 flex items-center gap-2"
                                >
                                    <span className="text-primary">{'>'}</span>
                                    {step}
                                    {index === steps.length - 1 && index < bootSequence.length - 1 && (
                                        <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-8 h-1 w-full bg-secondary/50 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.2, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="mt-2 text-right text-xs text-muted-foreground">
                            v2.0.26_FINAL_BUILD
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

import { motion } from 'framer-motion';

interface CircularProgressProps {
    percentage: number;
    label: string;
    subLabel: string;
    delay?: number;
}

export const CircularProgress = ({ percentage, label, subLabel, delay = 0 }: CircularProgressProps) => {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-20 h-20 mb-2">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        fill="transparent"
                        stroke="hsl(var(--secondary))"
                        strokeWidth="4"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        cx="40"
                        cy="40"
                        r={radius}
                        fill="transparent"
                        stroke="hsl(var(--primary))"
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                </svg>
                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">
                    {label}
                </div>
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider text-center font-mono">
                {subLabel}
            </div>
        </div>
    );
};

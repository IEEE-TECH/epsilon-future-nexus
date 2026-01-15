import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
    targetDate: Date;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeBlock = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <motion.div
                key={value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center mb-2"
            >
                <span className="text-2xl md:text-3xl font-bold text-primary font-mono">
                    {String(value).padStart(2, '0')}
                </span>
            </motion.div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
        </div>
    );

    return (
        <div className="flex gap-3 md:gap-4 justify-center">
            <TimeBlock value={timeLeft.days} label="Days" />
            <div className="flex items-center text-2xl text-primary/50 mb-6">:</div>
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <div className="flex items-center text-2xl text-primary/50 mb-6">:</div>
            <TimeBlock value={timeLeft.minutes} label="Mins" />
            <div className="flex items-center text-2xl text-primary/50 mb-6">:</div>
            <TimeBlock value={timeLeft.seconds} label="Secs" />
        </div>
    );
};

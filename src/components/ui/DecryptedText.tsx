import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface DecryptedTextProps {
    text: string;
    className?: string;
    speed?: number;
}

export const DecryptedText = ({
    text,
    className = "",
    speed = 40
}: DecryptedTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 2;
        }, speed);

        return () => clearInterval(interval);
    }, [isInView, text, speed]);

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
};

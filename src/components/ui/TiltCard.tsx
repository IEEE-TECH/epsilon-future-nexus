import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

export const TiltCard = ({ children, className = "" }: TiltCardProps) => {
    return (
        <div className={`relative ${className}`}>
            {children}
        </div>
    );
};

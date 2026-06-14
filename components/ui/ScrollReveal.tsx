"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    initial?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
    className?: string;
}

export default function ScrollReveal({ 
    children, 
    initial = { opacity: 0, y: 30 },
    whileInView = { opacity: 1, y: 0 },
    viewport = { once: true },
    transition = { duration: 0.6 },
    className = ""
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    );
}

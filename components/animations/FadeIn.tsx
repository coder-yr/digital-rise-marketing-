"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    className?: string;
    useVariants?: boolean;
}

export const FadeIn = ({
    children,
    delay = 0,
    direction = "up",
    fullWidth = false,
    className = "",
    useVariants = false,
}: FadeInProps) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    };

    const variants = {
        hidden: {
            opacity: 0,
            ...directions[direction]
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
            }
        }
    };

    if (useVariants) {
        return (
            <motion.div
                variants={variants}
                className={`${fullWidth ? "w-full" : ""} ${className}`}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={`${fullWidth ? "w-full" : ""} ${className}`}
        >
            {children}
        </motion.div>
    );
};

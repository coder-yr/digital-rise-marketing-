"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
    children: ReactNode;
    delay?: number;
    staggerChildren?: number;
    className?: string;
}

export const StaggerContainer = ({
    children,
    delay = 0,
    staggerChildren = 0.1,
    className = "",
}: StaggerContainerProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delay,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const variants = {
        initial: {
            opacity: 0,
            y: 40,
        },
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Custom snappy ease-out
                when: "beforeChildren",
                staggerChildren: 0.1,
            }
        },
        exit: {
            opacity: 0,
            y: -40,
            transition: {
                duration: 0.4,
                ease: [0.36, 0, 0.66, -0.56] as [number, number, number, number], // Custom ease-in
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

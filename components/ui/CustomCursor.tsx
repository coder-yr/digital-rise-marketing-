"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth the outer ring
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            // Offset main dot by 6px (half of 12px width), outer ring by 20px (half of 40px width)
            cursorX.set(e.clientX - 6);
            cursorY.set(e.clientY - 6);

            // For the spring ring, we need to offset differently since x/y are shared if we used the same motion value.
            // Wait, cursorX and cursorY are passed to the spring directly, so they share the exact same value.
            // We can handle the offset in the CSS or margin.
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expand cursor dot over links, buttons, inputs, labels, and elements with pointer cursor
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.tagName.toLowerCase() === "input" ||
                target.tagName.toLowerCase() === "textarea" ||
                target.tagName.toLowerCase() === "select" ||
                target.closest("a") ||
                target.closest("button") ||
                window.getComputedStyle(target).cursor === "pointer"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [cursorX, cursorY]);

    // Only render the custom cursor on larger screens (avoids issues on mobile touch)
    if (typeof window !== "undefined" && window.innerWidth < 768) {
        return null;
    }

    return (
        <>
            {/* The main solid dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-dr-gold rounded-full pointer-events-none z-[100]"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isClicking ? 0.5 : isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.1,
                }}
            />
            {/* The outer ring / expanded hover state */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-dr-gold/50 bg-dr-gold/10 rounded-full pointer-events-none z-[99] flex items-center justify-center backdrop-blur-sm -ml-[14px] -mt-[14px]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "rgba(212, 175, 55, 0.8)" : "rgba(212, 175, 55, 0.3)",
                    backgroundColor: isHovering ? "rgba(212, 175, 55, 0.2)" : "transparent"
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5,
                }}
            />
        </>
    );
}

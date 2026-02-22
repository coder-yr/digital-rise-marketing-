import PageTransition from "@/components/animations/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
    // Next.js recreates Templates on navigation (unlike Layouts). 
    // This allows Framer Motion's AnimatePresence to detect the unmount and trigger the exit animation.
    return (
        <PageTransition>
            {children}
        </PageTransition>
    );
}

import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
    badge: string;
    badgeColor?: string;
    title: React.ReactNode;
    description: string;
    buttonText: string;
    blobColor?: string;
    blobPosition?: string;
    buttonLink?: string;
}

const ServiceHero = ({
    badge,
    badgeColor = "text-dr-gold",
    title,
    description,
    buttonText,
    blobColor = "bg-dr-gold/5",
    blobPosition = "top-[10%] left-[20%]",
    buttonLink = "/booking"
}: ServiceHeroProps) => {
    return (
        <section className="relative pt-40 pb-20 px-6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Hidden on mobile to prevent severe scroll lag from heavy CSS filter */}
                <div className={`hidden md:block absolute ${blobPosition} w-[600px] h-[600px] ${blobColor} rounded-full blur-[120px] opacity-40`} />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h4 className={`text-xs font-black tracking-[0.4em] ${badgeColor} uppercase mb-6`}>{badge}</h4>
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none text-white">
                    {title}
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-dr-text/60 font-light leading-relaxed mb-10">
                    {description}
                </p>
                <a href={buttonLink} className="inline-flex items-center gap-2 px-8 py-4 bg-dr-gold text-dr-navy font-black text-xs tracking-widest rounded-xl hover:bg-dr-gold-hover transition-all">
                    {buttonText} <ArrowRight size={16} />
                </a>
            </div>
        </section>
    );
};

export default ServiceHero;

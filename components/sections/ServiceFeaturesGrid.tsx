import { LucideIcon } from "lucide-react";

interface FeatureItem {
    icon: LucideIcon;
    iconColor: string;
    title: string;
    description: string;
}

interface ServiceFeaturesGridProps {
    items: FeatureItem[];
    borderColor: string;
    hoverBorderColor: string;
}

const ServiceFeaturesGrid = ({ items, borderColor, hoverBorderColor }: ServiceFeaturesGridProps) => {
    return (
        <section className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`glass p-8 rounded-[2rem] border ${borderColor} ${hoverBorderColor} transition-all group`}
                    >
                        <div className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center ${item.iconColor} mb-6 group-hover:scale-110 transition-transform`}>
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceFeaturesGrid;

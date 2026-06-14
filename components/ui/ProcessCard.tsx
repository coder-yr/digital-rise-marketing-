interface ProcessCardProps {
    number: string;
    title: string;
    description: string;
    color: 'gold' | 'orange' | 'green';
}

const colorClasses = {
    gold: {
        border: 'border-[#D4AF37]/20',
        text: 'text-[#D4AF37]',
        hover: 'hover:border-[#D4AF37]/20',
    },
    orange: {
        border: 'border-[#FF6B4A]/20',
        text: 'text-[#FF6B4A]',
        hover: 'hover:border-[#FF6B4A]/20',
    },
    green: {
        border: 'border-[#10B981]/20',
        text: 'text-[#10B981]',
        hover: 'hover:border-[#10B981]/20',
    },
};

export default function ProcessCard({ number, title, description, color }: ProcessCardProps) {
    const colors = colorClasses[color];

    return (
        <div className={`glass p-8 rounded-2xl border border-white/5 flex gap-8 items-start ${colors.hover} transition-all`}>
            <span className={`w-10 h-10 rounded-lg border ${colors.border} flex items-center justify-center text-[10px] font-black ${colors.text} flex-shrink-0 mt-1`}>
                {number}
            </span>
            <div>
                <h5 className="text-lg font-black mb-2">{title}</h5>
                <p className="text-sm text-white/40 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

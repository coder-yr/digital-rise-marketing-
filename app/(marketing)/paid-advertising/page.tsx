import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceFeaturesGrid from "@/components/sections/ServiceFeaturesGrid";
import { BarChart3, Target, PieChart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "Paid Advertising | DigitalRise",
    description: "ROI-focused acquisition campaigns across Meta, Google, TikTok, and LinkedIn.",
};

export default function PaidAdvertisingPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden pb-20">
                <ServiceHero
                    badge="Service"
                    badgeColor="text-dr-orange"
                    title={<>Paid <span className="text-gradient-gold">Advertising</span></>}
                    description="Stop burning budget. We replace guesswork with a scientific approach to creative testing and funnel optimization."
                    buttonText="START SCALING"
                    blobColor="bg-dr-orange/5"
                    blobPosition="top-[10%] right-[20%]"
                />

                <ServiceFeaturesGrid
                    borderColor="border-white/5"
                    hoverBorderColor="hover:border-dr-orange/20"
                    items={[
                        {
                            icon: Target,
                            iconColor: "text-dr-orange",
                            title: "Multi-Channel",
                            description: "Expert management across Meta, Google, TikTok, and LinkedIn ads."
                        },
                        {
                            icon: PieChart,
                            iconColor: "text-dr-gold",
                            title: "Creative Testing",
                            description: "Systematic testing of hooks, angles, and formats to find winning creatives."
                        },
                        {
                            icon: BarChart3,
                            iconColor: "text-white",
                            title: "Data-Driven",
                            description: "Decisions based on ROAS, CPA, and LTV, not vanity metrics."
                        },
                        {
                            icon: TrendingUp,
                            iconColor: "text-dr-green",
                            title: "Scaling Logic",
                            description: "Proven frameworks to increase spend while maintaining profitability."
                        }
                    ]}
                />

            </main>
            <Footer />
        </>
    );
}

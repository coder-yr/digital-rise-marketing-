import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceFeaturesGrid from "@/components/sections/ServiceFeaturesGrid";
import { Megaphone, Search, Share2, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Organic Growth | DigitalRise",
    description: "SEO, social strategy, and content distribution to lower acquisition costs over time.",
};

export default function OrganicGrowthPage() {
    return (
        <>
            <Header />
            <main className="relative min-h-screen bg-dr-navy text-white overflow-hidden pb-20">
                <ServiceHero
                    badge="Service"
                    badgeColor="text-dr-green"
                    title={<>Organic <span className="text-gradient-gold">Growth</span></>}
                    description="Build an asset that compounds. We help you dominate search results and social feeds to lower your acquisition costs over time."
                    buttonText="The Long Game"
                    blobColor="bg-dr-green/5"
                    blobPosition="top-[10%] left-[50%] transform -translate-x-1/2"
                />

                <ServiceFeaturesGrid
                    borderColor="border-white/5"
                    hoverBorderColor="hover:border-dr-green/20"
                    items={[
                        {
                            icon: Search,
                            iconColor: "text-dr-green",
                            title: "SEO Strategy",
                            description: "Technical SEO, keyword research, and content clustering to own your niche."
                        },
                        {
                            icon: Share2,
                            iconColor: "text-dr-gold",
                            title: "Social Media",
                            description: "Platform-native content strategies for LinkedIn, Twitter, and Instagram."
                        },
                        {
                            icon: Megaphone,
                            iconColor: "text-white",
                            title: "Content Distribution",
                            description: "Repurposing engines to get maximum mileage out of every piece of content."
                        },
                        {
                            icon: Users,
                            iconColor: "text-dr-orange",
                            title: "Community",
                            description: "Building and nurturing communities that become brand advocates."
                        }
                    ]}
                />
            </main>
            <Footer />
        </>
    );
}

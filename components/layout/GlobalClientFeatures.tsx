"use client";

import dynamic from "next/dynamic";

const WhatsAppCTA = dynamic(() => import("@/components/WhatsAppCTA").then((module) => module.WhatsAppCTA), {
  ssr: false,
});

const AIChatbot = dynamic(() => import("@/components/AIChatbot").then((module) => module.AIChatbot), {
  ssr: false,
});

export default function GlobalClientFeatures() {
  return (
    <>
      <WhatsAppCTA />
      <AIChatbot />
    </>
  );
}
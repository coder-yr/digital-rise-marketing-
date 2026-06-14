import type { Metadata } from "next";
import LocalSeoLandingPage from "@/components/seo/LocalSeoLandingPage";
import { buildLocalSeoMetadata, getLocalSeoCity } from "@/lib/localSeo";

const city = getLocalSeoCity("kalyan");

export function generateMetadata(): Metadata {
  return buildLocalSeoMetadata(city);
}

export default function KalyanLocalMarketingPage() {
  return <LocalSeoLandingPage city={city} />;
}

import type { Metadata } from "next"
import Hero from "@/components/Hero"
import ProductHighlights from "@/components/ProductHighlights"
import FeatureSection from "@/components/FeatureSection"
import TestimonialSection from "@/components/TestimonialSection"
import CtaSection from "@/components/CtaSection"

export const metadata: Metadata = {
  title: "Premium Eco-Friendly Water Bottles",
  description: "Discover HydroPure's premium eco-friendly water bottles designed for your active lifestyle.",
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProductHighlights />
      <FeatureSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  )
}

import Image from "next/image";

import { Hero } from "@/components/ui/animated-hero";
import Features from "@/components/features-section";
import { Pricing } from "@/components/pricing-section";
import { Testimonials } from "@/components/testimonials";
import { PhotoGallery } from "@/components/ui/gallery";
import { ContactWithMap } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <PhotoGallery />
      <ContactWithMap />
    </>
  );
}

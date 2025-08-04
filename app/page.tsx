import { Hero } from "@/components/ui/animated-hero";
import Features from "@/components/features-section";
// import { Pricing } from "@/components/pricing-section";
import { Pricing } from "@/components/ui/pricing-cards";
import { PhotoGallery } from "@/components/ui/gallery";
import { ContactWithMap } from "@/components/contact";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <PhotoGallery />
      <StaggerTestimonials />
      <ContactWithMap />
    </>
  );
}

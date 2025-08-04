import { Gallery } from "@/components/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Elite Detailing",
  description:
    "See our premium detailing work on interiors, exteriors, and rims",
};

export default function GalleryPage() {
  const gallerySections = [
    {
      title: "Interior",
      description: "Showroom-fresh interiors with ceramic protection",
      images: Array.from(
        { length: 10 },
        (_, i) => `/gallery/interior/int${i + 1}.jpg`,
      ),
    },
    {
      title: "Exterior",
      description: "Sleek and glossy finishes with long-lasting protection",
      images: Array.from(
        { length: 11 },
        (_, i) => `/gallery/exterior/ext${i + 1}.jpg`,
      ),
    },
    {
      title: "Rim",
      description: "Precision-cleaned rims for that perfect finish",
      images: Array.from(
        { length: 6 },
        (_, i) => `/gallery/rim/rim${i + 1}.jpg`,
      ),
    },
  ];

  return (
    <main className="bg-[#F5F5F5] text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 sm:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Our Detailing Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Witness the transformation – Each vehicle tells a story of
            precision, care, and automotive passion.
          </p>
          <div className="w-full h-1 bg-gray-300 mx-auto"></div>
        </div>
      </section>

      {/* Gallery Component */}
      <Gallery sections={gallerySections} />

      {/* CTA Section */}
      <section className="py-20 px-5 sm:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-gray-600 mb-8">
            Browse our services or book an appointment to give your car the
            Elite treatment.
          </p>
          <a href="/booking">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
              Book Your Detailing
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

import { Gallery } from "@/components/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Elite Detailing",
  description: "See our premium detailing work on cars, bikes, and boats",
};

export default function GalleryPage() {
  const gallerySections = [
    {
      title: "Ceramic Coated Cars",
      description: "Showroom-quality finishes with long-lasting protection",
      images: [
        "/benz2.jpeg",
        "/benz1.png",
        "/benz3.jpg",
        "/bmw1.jpg",
        "/bmw2.jpg",
        "/bmw3.jpg",
        "/rr.jpg",
        "/mustang1.jpg",
        "/mustang2.jpg",
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      title: "Paint Correction Masters",
      description: "Before and after transformations of damaged paintwork",
      images: [
        "/ford3.jpg",
        "/ford1.jpg",
        "/ford2.jpg",
        "/jeep1.jpg",
        "/jeep2.jpg",
        "/jeep3.jpg",
        "/jeep4.jpg",
        "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      title: "Motorcycle Detailing",
      description: "Precision cleaning and protection for bikes",
      images: [
        "https://images.unsplash.com/photo-1667320831760-a68cb9150ca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1710773172327-0a685000b148?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1726663780295-89be7a1d0bd9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      title: "Luxury Interior Detailing",
      description: "Showroom-fresh interiors with ceramic protection",
      images: [
        "/rr_interior.jpg",
        "https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1704932500000-17b8445307d1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bHV4dXJ5JTIwY2FyJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      title: "Boat Detailing",
      description: "Our experties also extends to Boats",
      images: [
        "/boat1.jpg",
        "/boat2.jpg",
        "/boat3.jpg",
        "/boat4.jpg",
        "/boat5.jpg",
        "/boat6.jpg",
      ],
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

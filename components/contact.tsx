import React from "react";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactWithMapProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
  address?: string;
  mapAddress?: string;
}

export const ContactWithMap = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+61 411 479 468",
  email = "forellis@gmail.com",
  // web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
  address = "Clayton Ct Springvale South VIC 3172, Australia",
  mapAddress = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.2775367951083!2d145.14780638265583!3d-37.978501229829426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6134fefc444ff%3A0x90e9e9fbc8f33c43!2sSpringvale%20Rd%2FPaterson%20Rd!5e0!3m2!1sen!2sin!4v1754376224119!5m2!1sen!2sin",
}: ContactWithMapProps) => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-24 bg-[#f5f5f5]"
      id="contact"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl px-4">
            {description}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <div className="w-full flex flex-col justify-center">
            <div className="space-y-8 max-w-md mx-auto lg:mx-0">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mt-0.5 shadow-md">
                    <Phone className="text-white w-6 h-6" strokeWidth={2} />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-base sm:text-lg mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${phone}`}
                    className="text-base sm:text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mt-0.5 shadow-md">
                    <Mail className="text-white w-6 h-6" strokeWidth={2} />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-base sm:text-lg mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="text-base sm:text-lg text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center mt-0.5 shadow-md">
                    <MapPin className="text-white w-6 h-6" strokeWidth={2} />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-base sm:text-lg mb-1">
                    Address
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-lg lg:max-w-none">
              <div className="rounded-xl border border-muted-foreground p-3 shadow-xl bg-background">
                <iframe
                  src={mapAddress}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

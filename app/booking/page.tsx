"use client";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  return (
    <main className="bg-[#F5F5F5] text-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-5 sm:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-black">
              Book Your Premium Detailing
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your vehicle with our expert detailing services. Fill
              out the form below and we'll contact you within 24 hours to
              schedule your appointment.
            </p>
          </div>
          <div className="w-full h-1 bg-gray-300 mx-auto mb-8 animate-pulse"></div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-20 px-2 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Form Container */}
          <div className="bg-white border border-gray-300 rounded-2xl p-2 sm:p-6 md:p-8 shadow-xl animate-fade-in-up animation-delay-200">
            <div className="relative w-full overflow-hidden rounded-lg bg-white">
              <div className="aspect-[4/5] md:aspect-[16/20] lg:aspect-[4/3] w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfoGO705PS9wsSU2iX6yRiqsry6wVFfb8fGHbsjRmHNKv5WXg/viewform?embedded=true"
                  className="absolute inset-0 w-full h-full border-0 rounded-lg"
                  title="Car Detailing Booking Form"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 animate-fade-in-up animation-delay-400">
            <div className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Quick Response</h3>
              </div>
              <p className="text-gray-600">
                We'll contact you within 24 hours to confirm your appointment
                and discuss any specific requirements.
              </p>
            </div>

            <div className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Expert Service</h3>
              </div>
              <p className="text-gray-600">
                Our certified professionals use premium products and techniques
                to deliver exceptional results.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center animate-fade-in-up animation-delay-600">
            <div className="inline-block bg-white border border-gray-300 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-2">
                Need immediate assistance?
              </h4>
              <p className="text-gray-600 mb-4">
                Call us directly or send us an email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-black text-black hover:bg-black hover:text-white"
                >
                  <a
                    href="tel:+61 411 479 468"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <a
                    href="mailto:forellisdetial@gmail.com"
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </main>
  );
}

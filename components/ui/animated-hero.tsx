"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Flawless",
      "Detailed",
      "Polished",
      "Restored",
      "Refreshed",
      "Spotless",
      "Pristine",
      "Revamped",
      "Enhanced",
      "Finished",
    ],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="w-full bg-gradient-to-b from-[#EEECE7] to-[#F5F5F5] py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-25 lg:mt-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left ">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tight flex flex-wrap justify-center lg:justify-start items-center gap-2">
              <span>We Bring Back the</span>
              <span className="relative inline-block min-h-[1em] w-[6ch] font-extrabold">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute left-0 top-0 w-full text-center lg:text-left"
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? "-150%" : "150%",
                            opacity: 0,
                          }
                    }
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span>Version of Your Car</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 max-w-xl mx-auto lg:mx-0">
              Life leaves its mark — dirt, dust, spills, and scratches. Our
              detailing service is here to reverse that. With a focus on both
              exterior shine and interior freshness, we bring your vehicle back
              to life while helping preserve its condition for the long run.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center lg:justify-start">
              <Button size="lg" variant="outline" className="gap-2">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-2">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Car Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/hero-car.png"
              alt="Car"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };

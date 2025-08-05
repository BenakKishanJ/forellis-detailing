"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

interface Testimonial {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
  rating: number;
}

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Absolutely stoked with the results! My ute looks brand new. Highly recommend these legends!",
    by: "Bruce, Tradie in Brisbane",
    imgSrc: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    tempId: 1,
    testimonial:
      "The interior detail was incredible. They got rid of all the red dirt from my last camping trip.",
    by: "Sheila, Teacher in Perth",
    imgSrc: "https://i.pravatar.cc/150?img=2",
    rating: 4.5,
  },
  {
    tempId: 2,
    testimonial: "These guys are fair dinkum! Best car wash I've ever had.",
    by: "Mack, Cattle Farmer in Longreach",
    imgSrc: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
  {
    tempId: 3,
    testimonial:
      "My Mazda hadn't been cleaned in 6 months...looked like new when I picked it up.",
    by: "Bazza, Plumber in Sydney",
    imgSrc: "https://i.pravatar.cc/150?img=4",
    rating: 4.5,
  },
  {
    tempId: 4,
    testimonial: "Top quality work and great value for money. Will be back!",
    by: "Shazza, Nurse in Melbourne",
    imgSrc: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    tempId: 5,
    testimonial:
      "Couldn't be happier with the service. The team went above and beyond. True blue!",
    by: "Bluey, Retired in Gold Coast",
    imgSrc: "https://i.pravatar.cc/150?img=6",
    rating: 5,
  },
  {
    tempId: 6,
    testimonial:
      "Finally, a decent car wash that doesn't cost an arm and a leg. Good on ya, mates!",
    by: "Dazza, Musician in Adelaide",
    imgSrc: "https://i.pravatar.cc/150?img=7",
    rating: 4.5,
  },
  {
    tempId: 7,
    testimonial:
      "My old Landcruiser got the full treatment and looks better than when I bought it.",
    by: "G'Day, Miner in Broken Hill",
    imgSrc: "https://i.pravatar.cc/150?img=8",
    rating: 5,
  },
  {
    tempId: 8,
    testimonial:
      "Quick, efficient, and friendly service. What more could you want?",
    by: "Smithy, IT Guy in Canberra",
    imgSrc: "https://i.pravatar.cc/150?img=9",
    rating: 4.5,
  },
  {
    tempId: 9,
    testimonial:
      "They really know their stuff. My car is gleaming. Thanks heaps!",
    by: "Macca, Surfer in Byron Bay",
    imgSrc: "https://i.pravatar.cc/150?img=10",
    rating: 5,
  },
  {
    tempId: 10,
    testimonial:
      "Best detailing in town. Wouldn't trust anyone else with my pride and joy.",
    by: "Wazza, Car Enthusiast in Perth",
    imgSrc: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    tempId: 11,
    testimonial: "Awesome job! They even got the dog hair out of the back.",
    by: "Ange, Dog Walker in Sydney",
    imgSrc: "https://i.pravatar.cc/150?img=12",
    rating: 4.5,
  },
  {
    tempId: 12,
    testimonial:
      "Great attention to detail. My car feels like it's showroom ready. Cheers!",
    by: "Bronte, Sales Rep in Melbourne",
    imgSrc: "https://i.pravatar.cc/150?img=13",
    rating: 5,
  },
  {
    tempId: 13,
    testimonial:
      "These guys are the real deal. Professional, reliable, and do a cracking job.",
    by: "Davos, Builder in Brisbane",
    imgSrc: "https://i.pravatar.cc/150?img=14",
    rating: 5,
  },
  {
    tempId: 14,
    testimonial:
      "Highly recommend! They take pride in their work and it shows. Beaut job!",
    by: "Haydos, Fisherman in Adelaide",
    imgSrc: "https://i.pravatar.cc/150?img=15",
    rating: 4.5,
  },
  {
    tempId: 15,
    testimonial:
      "I've been to a few places, but this is the best by far. My car is sparkling!",
    by: "Kylie, Accountant in Gold Coast",
    imgSrc: "https://i.pravatar.cc/150?img=16",
    rating: 5,
  },
  {
    tempId: 16,
    testimonial:
      "My car looks brand new. Will be recommending to all my mates.",
    by: "Lachie, Electrician in Canberra",
    imgSrc: "https://i.pravatar.cc/150?img=17",
    rating: 5,
  },
  {
    tempId: 17,
    testimonial:
      "First class service from start to finish. These guys are the best in the business.",
    by: "Narelle, Marketing Manager in Perth",
    imgSrc: "https://i.pravatar.cc/150?img=18",
    rating: 5,
  },
  {
    tempId: 18,
    testimonial:
      "My car got the full detail and it's never looked so good. Great value for money.",
    by: "Ossie, Truck Driver in Darwin",
    imgSrc: "https://i.pravatar.cc/150?img=19",
    rating: 4.5,
  },
  {
    tempId: 19,
    testimonial: "Fantastic work, and the staff are all really friendly.",
    by: "Robbo, Teacher in Melbourne",
    imgSrc: "https://i.pravatar.cc/150?img=20",
    rating: 5,
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <Star
            key={i}
            className="h-4 w-4 fill-yellow-500 stroke-yellow-500"
          />,
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 stroke-yellow-500" />);
      }
    }
    return <div className="flex py-8">{stars}</div>;
  };

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px hsl(var(--border))"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <div className="mb-4 flex items-start justify-start gap-4">
        <img
          src={testimonial.imgSrc}
          alt={`${testimonial.by.split(",")[0]}`}
          className="h-14 w-12 bg-muted object-cover object-top"
          style={{
            boxShadow: "3px 3px 0px hsl(var(--background))",
          }}
        />
        <div className="pt-1">{renderStars(testimonial.rating)}</div>
      </div>
      <h3
        className={cn(
          "text-base sm:text-xl font-medium",
          isCenter ? "text-primary-foreground" : "text-foreground",
        )}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

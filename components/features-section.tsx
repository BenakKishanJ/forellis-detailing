import { FlippingCard } from "@/components/ui/flipping-card";
import { useTheme } from "next-themes";

interface CardData {
  id: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  back: {
    description: string;
    buttonText: string;
  };
}

const cardsData: CardData[] = [
  {
    id: "exterior-detailing",
    front: {
      imageSrc:
        "https://images.unsplash.com/photo-1670951295478-975b208d31c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHdoaXRlJTIwY2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
      imageAlt: "Exterior Detailing",
      title: "Exterior Detailing",
      description:
        "Our expert exterior detailing services restore your car's shine and protect its finish.",
    },
    back: {
      description:
        "We offer a comprehensive range of exterior detailing services, including hand washing, waxing, polishing, and paint protection film installation.",
      buttonText: "Learn More",
    },
  },
  {
    id: "interior-detailing",
    front: {
      imageSrc:
        "https://images.unsplash.com/photo-1583573278124-e8d4fd3edf3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhciUyMGludGVyaW9yfGVufDB8fDB8fHww",
      imageAlt: "Interior Detailing",
      title: "Interior Detailing",
      description:
        "We meticulously clean and protect your car's interior, creating a fresh and comfortable space.",
    },
    back: {
      description:
        "Our interior detailing services include vacuuming, shampooing carpets, leather conditioning, and stain removal.",
      buttonText: "Learn More",
    },
  },
  {
    id: "paint-correction",
    front: {
      imageSrc:
        "https://images.unsplash.com/photo-1723155016442-f6d4a70ce407?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpbmV5JTIwY2FyfGVufDB8fDB8fHww",
      imageAlt: "Paint Correction",
      title: "Paint Correction",
      description:
        "Our expert paint correction services remove scratches and imperfections, restoring your car's original shine.",
    },
    back: {
      description:
        "We use advanced techniques and high-quality products to remove scratches, swirl marks, and other imperfections from your car's paint.",
      buttonText: "Learn More",
    },
  },
];

export default function FlippingCardDemo() {
  return (
    <section className="bg-[#ddd]">
      <div className="mx-10 pt-20">
        <h3 className="text-center text-4xl font-semibold">Our Services</h3>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm sm:text-base md:text-lg">
          We offer a comprehensive range of car detailing services to meet your
          needs.
        </p>
      </div>
      <div className="flex gap-4 flex-wrap justify-center p-8">
        {cardsData.map((card) => (
          <FlippingCard
            key={card.id}
            width={300}
            frontContent={<GenericCardFront data={card.front} />}
            backContent={<GenericCardBack data={card.back} />}
          />
        ))}
      </div>
    </section>
  );
}

interface GenericCardFrontProps {
  data: CardData["front"];
}

function GenericCardFront({ data }: GenericCardFrontProps) {
  return (
    <div className="flex flex-col h-full w-full p-4">
      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className="w-full h-auto object-cover flex-grow min-h-0 rounded-md"
      />
      <div className="p-2">
        <h3 className="text-base font-semibold mt-2">{data.title}</h3>
        <p className="text-[13.5px] mt-2 text-muted-foreground">
          {data.description}
        </p>
      </div>
    </div>
  );
}

interface GenericCardBackProps {
  data: CardData["back"];
}

function GenericCardBack({ data }: GenericCardBackProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6">
      <p className="text-[13.5px] mt-2 text-muted-foreground text-center">
        {data.description}
      </p>
      <button className="mt-6 bg-foreground text-background px-4 py-2 rounded-md text-[13.5px] w-min whitespace-nowrap h-8 flex items-center justify-center">
        {data.buttonText}
      </button>
    </div>
  );
}

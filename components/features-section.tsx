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
    heading: string;
    subheading?: string;
    body: string;
    buttonText: string;
  };
}

const cardsData: CardData[] = [
  {
    id: "full-detail",
    front: {
      imageSrc:
        "https://images.unsplash.com/photo-1670951295478-975b208d31c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHdoaXRlJTIwY2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
      imageAlt: "Full Detail",
      title: "FULL DETAIL",
      description:
        "The all-in-one service to refresh your car inside and out.\nGreat for deep cleaning, shine, and a like-new feel.",
    },
    back: {
      heading: "FULL DETAIL",
      subheading: "Complete Interior + Exterior Refresh",
      body: "Get your car looking new again with a full inside-out detail. Includes a 2-stage wash and wax, wheel and tyre care, deep interior vacuum, seat and carpet cleaning, surface treatment, interior glass polish, and deodorising. Perfect for a full reset.",
      buttonText: "",
    },
  },
  {
    id: "full-interior",
    front: {
      imageSrc:
        "https://images.unsplash.com/photo-1583573278124-e8d4fd3edf3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhciUyMGludGVyaW9yfGVufDB8fDB8fHww",
      imageAlt: "Full Interior",
      title: "FULL INTERIOR",
      description:
        "Thorough interior cleaning that goes beyond the surface.\nLeaves your cabin fresh, tidy, and protected.",
    },
    back: {
      heading: "FULL INTERIOR",
      subheading: "Deep Clean for a Fresh, Tidy Cabin",
      body: "Complete interior refresh — seats, carpets, dash, vents, and pedals. Vacuumed, steamed, and wiped down with care. Interior glass is cleaned and the cabin is deodorised. Great for family cars, daily drivers, or post-trip resets.",
      buttonText: "",
    },
  },
  {
    id: "full-exterior",
    front: {
      imageSrc:
        "https://images.unsplash.com/photo-1723155016442-f6d4a70ce407?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpbmV5JTIwY2FyfGVufDB8fDB8fHww",
      imageAlt: "Full Exterior",
      title: "FULL EXTERIOR",
      description:
        "A complete clean and shine for your car’s exterior.\nRemoves grime, protects paint, and brings out the gloss.",
    },
    back: {
      heading: "FULL EXTERIOR",
      subheading: "Glossy, Protected, and Road-Ready",
      body: "Thorough exterior detail with pre-wash, iron and tar removal, wax finish, and full wheel care. Tyres dressed, glass polished, and paint protected. Ideal for keeping your car sharp and shielded from the elements.",
      buttonText: "",
    },
  },
];

export default function FlippingCardDemo() {
  return (
    <section className="bg-[#ddd]" id="services">
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
        <p className="text-[13.5px] mt-2 text-muted-foreground whitespace-pre-line">
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
      <h3 className="text-lg font-semibold text-white text-center">
        {data.heading}
      </h3>
      {data.subheading && (
        <p className="text-sm text-white/70 text-center mt-2">
          {data.subheading}
        </p>
      )}
      <p className="text-[13.5px] text-white text-left whitespace-pre-line mt-2">
        {data.body}
      </p>
    </div>
  );
}

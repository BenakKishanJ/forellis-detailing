import Link from "next/link";
import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-30">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Prices that make sense!
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Managing a small business today is already tough.
            </p>
          </div>

          <div className="grid pt-20 px-5 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {/* Left Card: Full Interior */}
            <Card className="w-full rounded-md flex flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Interior Detailing
                  </span>
                </CardTitle>
                <CardDescription>
                  Revitalize your car's interior with our deep cleaning service.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-8 flex-grow">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$129</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / service
                  </span>
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Dashboard, console & air vents detailed",
                    "Seats cleaned/steamed + protectant",
                    "Carpets steamed",
                    "Pedals & windows detailed",
                    "Full deodorisation",
                    "Free: Air freshener + microfibre towel",
                  ].map((item, idx) => (
                    <div className="flex flex-row gap-4" key={idx}>
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/booking">
                    <Button variant="outline" className="gap-4 w-full">
                      Book Now <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Center Card: Full Detail */}
            <Card className="w-full shadow-2xl rounded-md flex flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Full Detail
                  </span>
                </CardTitle>
                <CardDescription>
                  The ultimate reset for your vehicle—inside and out.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-8 flex-grow">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$199</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / service
                  </span>
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "2-stage decontamination wash",
                    "Wheels & fenders deep cleaned + tyre sealant",
                    "Exterior wax polish",
                    "Interior vacuumed & protected",
                    "Seats cleaned or steamed (material-specific)",
                    "Carpets steamed",
                    "Glass cleaned (inside & out)",
                    "Odour neutralising treatment",
                    "Free: Air freshener + microfibre towel",
                  ].map((item, idx) => (
                    <div className="flex flex-row gap-4" key={idx}>
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/booking">
                    <Button className="gap-4 w-full">
                      Book Now <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Right Card: Full Exterior */}
            <Card className="w-full rounded-md flex flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Exterior Detailing
                  </span>
                </CardTitle>
                <CardDescription>
                  Achieve a stunning, protected finish for your vehicle.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-8 flex-grow">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$109</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / service
                  </span>
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Pre-wash + iron & tar removal",
                    "2-stage paint decontamination",
                    "Wheels/fenders cleaned + tyre sealant",
                    "Wax polish",
                    "Exterior glass cleaned",
                    "Free: Air freshener + microfibre towel",
                  ].map((item, idx) => (
                    <div className="flex flex-row gap-4" key={idx}>
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/booking">
                    <Button variant="outline" className="gap-4 w-full">
                      Book Now <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };

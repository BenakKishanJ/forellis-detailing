"use client";

import { Instagram, Facebook, Twitter, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "Services",
    links: [
      "Full Detail",
      "Interior Detail",
      "Exterior Detail",
      "Ceramic Coating",
      "Paint Correction",
    ],
  },
  {
    title: "About",
    links: ["Our Team", "Location", "Reviews", "FAQ"],
  },
  {
    title: "Contact",
    links: ["Book Now", "Pricing", "Hours", "Directions"],
  },
];

const legalLinks = ["Terms of Service", "Privacy Policy"];

const socialIcons = [
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
  { icon: <Facebook className="h-5 w-5" />, href: "#" },
  { icon: <Phone className="h-5 w-5" />, href: "tel:+1234567890" },
  { icon: <MapPin className="h-5 w-5" />, href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-background text-foreground relative w-full pt-20 pb-10 border-t">
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div className="bg-primary absolute top-1/3 left-1/4 h-64 w-64 rounded-full opacity-10 blur-3xl" />
        <div className="bg-primary absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="glass-effect mb-16 rounded-2xl p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Stay ahead with Acme Inc.
              </h3>
              <p className="text-foreground/70 mb-6">
                Join thousands of professionals who trust Acme Inc. for
                innovative business solutions.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-foreground/20 bg-background focus:ring-primary rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
                />
                <button className="bg-primary text-primary-foreground shadow-primary/20 hover:shadow-primary/30 rounded-lg px-6 py-3 font-medium shadow-lg transition">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="hidden justify-end md:flex">
              <div className="relative">
                <div className="bg-primary/20 absolute inset-0 rotate-6 rounded-xl" />
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&h=240&q=80"
                  alt="Acme Inc. team"
                  className="relative w-80 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center space-x-2">
              <Link
                href="/"
                aria-label="home"
                className="flex gap-2 items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Forelli's logo"
                  width={70}
                  height={70}
                />
                <div className="font-bold text-xs sm:text-sm lg:text-base tracking-tighter font-sans leading-tight min-w-0">
                  <div className="whitespace-nowrap text-ellipsis overflow-hidden">
                    Forelli's
                  </div>
                  <div className="text-[9px] sm:text-xs lg:text-sm text-muted-foreground whitespace-nowrap">
                    Wash & Detail
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-foreground/60 mb-6">
              Premium car care services with attention to detail and customer
              satisfaction.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="glass-effect hover:bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-lg font-semibold">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((text) => (
                  <li key={text}>
                    <a
                      href="#"
                      className="text-foreground/60 hover:text-foreground transition"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-foreground/10 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-foreground/60 mb-4 text-sm md:mb-0">
            © {new Date().getFullYear()} Forelli's Wash & Detailing. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((text) => (
              <a
                key={text}
                href="#"
                className="text-foreground/60 hover:text-foreground text-sm"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

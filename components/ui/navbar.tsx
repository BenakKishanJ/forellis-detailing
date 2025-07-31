"use client";
import Link from "next/link";
import { Equal, X } from "lucide-react";
import { Button } from "@/components/ui/liquid-glass-button";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const menuItems = [
  { name: "Services", href: "#link" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "#link" },
  { name: "Contact", href: "#link" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed left-0 top-0 w-full z-100 px-2 sm:px-4"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-4 sm:px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg px-4 sm:px-5 lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-4 sm:gap-6 lg:gap-0 py-2 sm:py-3">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex gap-2 items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Forelli's logo"
                  width={50}
                  height={50}
                  className="sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]"
                />
                <p className="font-bold text-sm sm:text-base lg:text-xl tracking-tighter font-sans">
                  Forelli's Wash <br className="hidden sm:block" />
                  <span className="sm:hidden"> & </span>
                  <span className="hidden sm:inline">and </span>Detailing
                </p>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2 -mr-2 block cursor-pointer p-2 lg:hidden touch-manipulation"
              >
                <Equal
                  className={cn(
                    "m-auto size-5 sm:size-6 duration-200 transition-all",
                    menuState && "rotate-180 scale-0 opacity-0",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-5 sm:size-6 duration-200 transition-all",
                    menuState
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0",
                  )}
                />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-6 xl:gap-8 text-sm font-sans">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150 transition-colors"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-6 sm:space-y-8 rounded-2xl sm:rounded-3xl border p-4 sm:p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                menuState && "block lg:flex",
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-4 sm:space-y-6 text-base font-sans">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150 transition-colors py-1"
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit font-sans">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(
                    "w-full sm:w-auto text-sm",
                    isScrolled && "lg:hidden",
                  )}
                >
                  <Link href="#" onClick={() => setMenuState(false)}>
                    <span>Login</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "w-full sm:w-auto text-sm",
                    isScrolled && "lg:hidden",
                  )}
                >
                  <Link href="#" onClick={() => setMenuState(false)}>
                    <span>Sign Up</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    "w-full sm:w-auto text-sm",
                    isScrolled ? "lg:inline-flex" : "hidden",
                  )}
                >
                  <Link href="/booking" onClick={() => setMenuState(false)}>
                    <span>Book Now</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

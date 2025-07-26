"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
interface BgradientAnimProps {
  className?: string;
  animationDuration?: number;
}

const BgradientAnim: React.FC<BgradientAnimProps> = ({
  className = "",
  animationDuration = 5,
}) => {
  useEffect(() => {
    // Add required CSS for the oklch gradient animation
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @property --hue1 {
        syntax: "<angle>";
        inherits: false;
        initial-value: 0deg;
      }
      @property --hue2 {
        syntax: "<angle>";
        inherits: false;
        initial-value: 0deg;
      }

      .oklch-gradient-bg {
      background-image: linear-gradient(
          in oklch longer hue to right,
          oklch(0.97 0.02 var(--hue1) / 35%),
          oklch(0.85 0.02 var(--hue1) / 35%)
        ),
        linear-gradient(
          in oklch longer hue to bottom,
          oklch(0.95 0.00 var(--hue2) / 20%),
          oklch(0.80 0.00 var(--hue2) / 20%)
        );
        background-size: 100% 100%;
        animation-name: anim_bg;
        animation-duration: ${animationDuration}s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }

      @keyframes anim_bg {
        0% {
          --hue1: 240deg; /* blue */
          --hue2: 240deg; /* grey base (same hue, chroma = 0) */
        }
        100% {
          --hue1: 240deg; /* still blue */
          --hue2: 240deg; /* still grey */
        }
      }
      `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, [animationDuration]);

  return <div className={`oklch-gradient-bg w-full h-full ${className}`} />;
};

export { BgradientAnim };

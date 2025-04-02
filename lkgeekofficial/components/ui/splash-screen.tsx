"use client";

import { useEffect, useState } from "react";
import { GooeyText } from "./gooey-text-morphing";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <GooeyText
        texts={["Welcome to", "LK Geek", "Official"]}
        morphTime={0.75}
        cooldownTime={0.75}
        className="font-bold"
      />
    </div>
  );
} 
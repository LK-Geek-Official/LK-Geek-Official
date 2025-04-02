"use client";

import { GlowingEffect } from "./glowing-effect";
import { cn } from "@/lib/utils";
import { 
  User, 
  Cpu, 
  Gamepad2, 
  GraduationCap, 
  CircuitBoard, 
  Store, 
  LineChart 
} from "lucide-react";
import { useRouter } from "next/navigation";

interface WebsiteLink {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

const websiteLinks: WebsiteLink[] = [
  {
    title: "About Me",
    description: "The pride of Sri Lankan technical artists",
    url: "https://aboutme.lkgeekofficial.com",
    icon: <User className="h-6 w-6" />
  },
  {
    title: "LK Geek Tech",
    description: "The pride of Sri Lankan technical artists",
    url: "https://tech.lkgeekofficial.com",
    icon: <Cpu className="h-6 w-6" />
  },
  {
    title: "LK Geek Gaming",
    description: "The pride of Sri Lankan technical artists",
    url: "https://gaming.lkgeekofficial.com",
    icon: <Gamepad2 className="h-6 w-6" />
  },
  {
    title: "LK Geek Edu",
    description: "The pride of Sri Lankan technical artists",
    url: "https://edu.lkgeekofficial.com",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "LK Geek Electronic",
    description: "The pride of Sri Lankan technical artists",
    url: "https://electronic.lkgeekofficial.com",
    icon: <CircuitBoard className="h-6 w-6" />
  },
  {
    title: "LK Geek Store",
    description: "The pride of Sri Lankan technical artists",
    url: "https://store.lkgeekofficial.com",
    icon: <Store className="h-6 w-6" />
  },
  {
    title: "LK Geek Trading",
    description: "The pride of Sri Lankan technical artists",
    url: "https://trading.lkgeekofficial.com",
    icon: <LineChart className="h-6 w-6" />
  }
];

export function WebsiteLinks() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, url: string) => {
    e.preventDefault();
    router.push(url);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {websiteLinks.map((link, index) => (
        <div
          key={index}
          onClick={(e) => handleClick(e, link.url)}
          className="relative group cursor-pointer"
        >
          <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                    {link.title}
                  </h3>
                  <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                    {link.icon}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-white/60">
                    {link.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 
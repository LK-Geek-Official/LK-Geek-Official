"use client";

import { GlowingEffect } from "./glowing-effect";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
  image: string;
}

const websiteLinks: WebsiteLink[] = [
  {
    title: "About Me",
    description: "Get to know about me",
    url: "https://aboutme.lkgeekofficial.com",
    icon: <User className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "LK Geek Tech",
    description: "The pride of Sri Lankan technical art",
    url: "https://tech.lkgeekofficial.com",
    icon: <Cpu className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "LK Geek Gaming",
    description: "The pride of Sri Lankan technical artists",
    url: "https://gaming.lkgeekofficial.com",
    icon: <Gamepad2 className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "LK Geek Edu",
    description: "The pride of Sri Lankan technical artists",
    url: "https://edu.lkgeekofficial.com",
    icon: <GraduationCap className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "LK Geek Electronic",
    description: "The pride of Sri Lankan technical artists",
    url: "https://electronic.lkgeekofficial.com",
    icon: <CircuitBoard className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "LK Geek Store",
    description: "The pride of Sri Lankan technical artists",
    url: "https://store.lkgeekofficial.com",
    icon: <Store className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "LK Geek Trading",
    description: "The pride of Sri Lankan technical artists",
    url: "https://trading.lkgeekofficial.com",
    icon: <LineChart className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
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
              <div className="absolute inset-0 z-0">
                <Image
                  src={link.image}
                  alt={link.title}
                  fill
                  className="object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between gap-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                    {link.title}
                  </h3>
                  <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted/80 backdrop-blur-sm p-2">
                    {link.icon}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-white/80">
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
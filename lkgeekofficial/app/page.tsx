import Image from "next/image";
import { SplashScreen } from "@/components/ui/splash-screen";
import { WebsiteLinks } from "@/components/ui/website-links";
import FluidCursor from "@/components/ui/fluid-cursor";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <FluidCursor />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 relative z-10">
        <h1 className="text-4xl font-bold mb-8">LK Geek Official</h1>
        <WebsiteLinks />
      </div>
    </>
  );
}

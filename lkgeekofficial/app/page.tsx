import Image from "next/image";
import { SplashScreen } from "@/components/ui/splash-screen";
import { WebsiteLinks } from "@/components/ui/website-links";
import FluidCursor from "@/components/ui/fluid-cursor";
import MatrixRain from "@/components/ui/matrix-rain";

export default function Home() {
  return (
    <>
      <MatrixRain 
        fontSize={20}
        color="#00ff00"
        characters="01"
        fadeOpacity={0.1}
        speed={1.0}
      />
      <SplashScreen />
      <FluidCursor />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 relative z-10">
        <h1 className="text-4xl font-bold mb-8">LK Geek Official</h1>
        <WebsiteLinks />
      </div>
    </>
  );
}

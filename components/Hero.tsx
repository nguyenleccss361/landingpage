import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/hero-banner.webp"
        alt="Raptor X Skateboard"
        fill
        className="object-cover"
        priority
        quality={90}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      <div className="relative z-10 container px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 max-w-5xl mx-auto leading-tight">
          Discover Raptor X: The Ultimate Skateboard from Scaters—<br />
          <span className="text-pink-200">Unleash Your Urban Adventure</span>
        </h1>
        <div className="flex gap-4 md:gap-6 justify-center flex-wrap mt-8">
          <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
            <Link href="#register">
              Join the Event
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white hover:text-black">
            <Link href="#products">Learn About Raptor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

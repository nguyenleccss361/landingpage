import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden w-full max-w-full">
      <Image
        src="/images/hero/hero-banner.webp"
        alt="Raptor X Skateboard"
        fill
        className="object-cover"
        priority
        quality={90}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme-5)]/60 via-[var(--theme-5)]/50 to-[var(--theme-5)]/70" />
      <div className="relative z-10 container text-center text-[var(--theme-1)] px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 max-w-5xl mx-auto leading-tight drop-shadow-lg">
          Discover Raptor X: The Ultimate Skateboard from Scaters—<br />
          <strong className="text-[var(--theme-3)]">Unleash Your Urban Adventure</strong>
        </h1>
        <div className="flex gap-4 md:gap-6 justify-center flex-wrap mt-8">
          <Link href="#register" className="btn">
            Join the Event
          </Link>
          <Link href="#products" className="btn btn-outline text-white border-white/30 hover:bg-white hover:text-[var(--theme-5)]">
            Learn About Raptor
          </Link>
        </div>
      </div>
    </section>
  );
}

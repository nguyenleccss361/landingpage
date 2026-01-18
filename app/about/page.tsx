import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "About Us - Scaters",
  description: "Welcome to Scaters! We are committed to delivering top-notch products and services designed for skaters of all skill levels.",
};

export default function AboutPage() {
  return (
    <>
      <main className="w-full max-w-full overflow-x-hidden">
        <Header />
        <section className="section bg-[var(--theme-1)]">
          <div className="container max-w-4xl">
            <h1 className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-bold">
              Welcome to Scaters! We are committed to delivering top-notch products and services designed for skaters of all skill levels.
            </h1>
            
            <div className="space-y-8">
              <figure className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/scaters-skateboards.jpg"
                  alt="Scaters Skateboards"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  quality={90}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-[var(--theme-5)]/90 text-[var(--theme-1)] p-4 text-center rounded-b-xl">
                  Scaters Skateboards is a leading innovator in the skateboarding industry, creates high-quality, durable boards for all skill levels, blending performance, style, and sustainability. We support skaters, collaborate with pros, and foster community growth.
                </figcaption>
              </figure>

              <figure className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/scaters-mission.jpg"
                  alt="Scaters Mission"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-[var(--theme-5)]/90 text-[var(--theme-1)] p-4 text-center rounded-b-xl">
                  Our mission is to inspire skaters with high-performance designs, helping them push their limits and express creativity in every ride.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

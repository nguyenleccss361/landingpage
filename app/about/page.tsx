import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About Us - Scaters",
  description: "Welcome to Scaters! We are committed to delivering top-notch products and services designed for skaters of all skill levels.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24">
        <section className="container px-4 max-w-4xl">
          <h1 className="text-center mb-12 text-3xl md:text-4xl lg:text-5xl font-bold">
            Welcome to Scaters! We are committed to delivering top-notch products and services designed for skaters of all skill levels.
          </h1>
          
          <div className="space-y-12">
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src="/images/about/scaters-skateboards.jpg"
                  alt="Scaters Skateboards"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  quality={90}
                />
              </div>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Scaters Skateboards is a leading innovator in the skateboarding industry, creates high-quality, durable boards for all skill levels, blending performance, style, and sustainability. We support skaters, collaborate with pros, and foster community growth.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden max-w-md mx-auto">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/images/about/scaters-mission.jpg"
                  alt="Scaters Mission"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Our mission is to inspire skaters with high-performance designs, helping them push their limits and express creativity in every ride.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

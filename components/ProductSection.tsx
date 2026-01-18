import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ShoppingCart } from "lucide-react";

export default function ProductSection() {
  const features = [
    "Reinforced Deck: Eco-friendly bamboo and maple for strength.",
    "Precision Trucks: Smooth turns and superior control.",
    "Advanced Wheels: Shock-absorbing for all terrains.",
    "Custom Graphics: Unique urban art designs.",
    "Lightweight Build: Durable and portable.",
  ];

  return (
    <section id="products" className="py-24 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Raptor X: Unleash Your Urban Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elevate your skateboarding with the <strong>Raptor X</strong>, a limited-edition skateboard built for thrill-seekers.
          </p>
        </div>

        {/* Pricing Banner */}
        <Card className="mb-12 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground mb-2">Limited Time Offer</p>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="text-4xl md:text-5xl font-bold text-primary">£177</span>
                  <span className="text-xl text-muted-foreground line-through">£221</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong className="text-primary">20% OFF</strong> + Exclusive Gift Included
                </p>
              </div>
              <Button size="lg" className="w-full md:w-auto">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Product Images */}
          <div className="space-y-6">
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-square">
                <Image
                  src="/images/products/product-20-off.webp"
                  alt="20% OFF Raptor X"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />
              </div>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/products/product-01.webp"
                    alt="Raptor X 01"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    quality={75}
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold">Raptor X 01</p>
                </div>
              </Card>
              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/products/product-02.webp"
                    alt="Raptor X 02"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    quality={75}
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold">Raptor X 02</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Premium Features</CardTitle>
                <CardDescription>Built for performance and style</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      <span className="leading-relaxed text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Raptor X?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ride in style and performance with the <strong className="text-foreground">Raptor X</strong>—your perfect skateboard for urban adventures. 
                  <strong className="text-primary"> Limited edition</strong>—get yours today!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

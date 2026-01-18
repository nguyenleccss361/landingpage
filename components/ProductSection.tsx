import Image from "next/image";

export default function ProductSection() {
  return (
    <section id="products" className="section bg-[var(--theme-1)]">
      <div className="container">
        <h2 className="text-center mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          <strong>Raptor X: Unleash Your Urban Adventure</strong>
        </h2>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/products/product-20-off.webp"
                alt="20% OFF Raptor X"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 40vw"
                quality={90}
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p className="text-base md:text-lg leading-relaxed">
                Elevate your skateboarding with the <strong>Raptor X</strong>, <strong>a limited-edition skateboard built for thrill-seekers</strong>. Order now to get <strong className="text-[var(--theme-5)]">20% off</strong> ONLY <strong className="text-[var(--theme-5)] text-xl md:text-2xl">£177</strong> and an <strong>exclusive gift!</strong>
              </p>
            </div>
            <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/products/product-01.webp"
                alt="Raptor X 01"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 40vw"
                quality={90}
              />
            </div>
            <p className="text-center md:text-left font-semibold text-base md:text-lg">
              <strong>Raptor X 01</strong>
            </p>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="bg-[var(--theme-4)] p-6 md:p-8 rounded-xl shadow-lg border border-[var(--theme-3)]">
              <h3 className="text-xl md:text-2xl mb-6 font-bold text-[var(--theme-5)]">Features:</h3>
              <ol className="list-decimal list-inside space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed">
                <li className="mb-2"><strong>Reinforced Deck</strong>: Eco-friendly bamboo and maple for strength.</li>
                <li className="mb-2"><strong>Precision Trucks</strong>: Smooth turns and superior control.</li>
                <li className="mb-2"><strong>Advanced Wheels</strong>: Shock-absorbing for all terrains.</li>
                <li className="mb-2"><strong>Custom Graphics</strong>: Unique urban art designs.</li>
                <li className="mb-2"><strong>Lightweight Build</strong>: Durable and portable.</li>
              </ol>
            </div>
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Ride in style and performance with the <strong>Raptor X</strong>—your perfect skateboard for urban adventures. <strong className="text-[var(--theme-5)]">Limited edition</strong>—get yours today!
              </p>
              <div className="flex justify-center md:justify-start pt-2">
                <button className="btn">Order Now</button>
              </div>
            </div>
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/products/product-02.webp"
                alt="Raptor X 02"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
            <p className="text-center font-semibold text-base md:text-lg">
              <strong>Raptor X 02</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

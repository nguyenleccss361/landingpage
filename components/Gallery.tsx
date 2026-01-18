import Image from "next/image";
import { Card } from "@/components/ui/card";

const galleryItems = [
  { id: "03", src: "/images/gallery/raptor-03.webp", alt: "Raptor X 03" },
  { id: "04", src: "/images/gallery/raptor-04.webp", alt: "Raptor X 04" },
  { id: "05", src: "/images/gallery/raptor-05.webp", alt: "Raptor X 05" },
  { id: "06", src: "/images/gallery/raptor-06.webp", alt: "Raptor X 06" },
  { id: "07", src: "/images/gallery/raptor-07.webp", alt: "Raptor X 07" },
  { id: "08", src: "/images/gallery/raptor-08.webp", alt: "Raptor X 08" },
  { id: "09", src: "/images/gallery/raptor-09.webp", alt: "Raptor X 09" },
  { id: "10", src: "/images/gallery/raptor-10.webp", alt: "Raptor X 10" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container px-4">
        <h2 className="text-center mb-12 text-3xl md:text-4xl lg:text-5xl font-bold">
          Raptor X Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-4">
                  <p className="text-sm font-semibold">Raptor X {item.id}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

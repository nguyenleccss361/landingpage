import Image from "next/image";

const galleryItems = [
  {
    id: "03",
    src: "/images/gallery/raptor-03.webp",
    alt: "Raptor X 03",
  },
  {
    id: "04",
    src: "/images/gallery/raptor-04.webp",
    alt: "Raptor X 04",
  },
  {
    id: "05",
    src: "/images/gallery/raptor-05.webp",
    alt: "Raptor X 05",
  },
  {
    id: "06",
    src: "/images/gallery/raptor-06.webp",
    alt: "Raptor X 06",
  },
  {
    id: "07",
    src: "/images/gallery/raptor-07.webp",
    alt: "Raptor X 07",
  },
  {
    id: "08",
    src: "/images/gallery/raptor-08.webp",
    alt: "Raptor X 08",
  },
  {
    id: "09",
    src: "/images/gallery/raptor-09.webp",
    alt: "Raptor X 09",
  },
  {
    id: "10",
    src: "/images/gallery/raptor-10.webp",
    alt: "Raptor X 10",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-[var(--theme-4)]">
      <div className="container">
        <h2 className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Raptor X Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {galleryItems.slice(0, 4).map((item) => (
            <div key={item.id} className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl group cursor-pointer transition-all duration-300 hover:shadow-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--theme-5)]/90 to-transparent text-[var(--theme-1)] p-3 md:p-4 text-center">
                <strong className="text-sm md:text-base">Raptor X {item.id}</strong>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {galleryItems.slice(4).map((item) => (
            <div key={item.id} className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl group cursor-pointer transition-all duration-300 hover:shadow-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--theme-5)]/90 to-transparent text-[var(--theme-1)] p-3 md:p-4 text-center">
                <strong className="text-sm md:text-base">Raptor X {item.id}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

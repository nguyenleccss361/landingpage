import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Gallery - Scaters",
  description: "A world filled with endless opportunities and endless potential for you to explore.",
};

export default function GalleryPage() {
  return (
    <>
      <main className="w-full max-w-full overflow-x-hidden">
        <Header />
        <section className="section bg-[var(--theme-4)]">
          <div className="container">
            <h1 className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto">
              A world filled with endless opportunities and endless potential for you to explore.
            </h1>
          </div>
        </section>
        <Gallery />
        <Footer />
      </main>
    </>
  );
}

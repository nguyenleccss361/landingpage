import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Gallery - Scaters",
  description: "A world filled with endless opportunities and endless potential for you to explore.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 bg-muted/50">
          <div className="container px-4">
            <h1 className="text-center mb-12 text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto">
              A world filled with endless opportunities and endless potential for you to explore.
            </h1>
          </div>
        </section>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

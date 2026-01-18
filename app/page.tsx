import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventSection from "@/components/EventSection";
import ProductSection from "@/components/ProductSection";
import Gallery from "@/components/Gallery";
import EventSchedule from "@/components/EventSchedule";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scaters",
    description: "Scaters—Where Passion Meets Performance. Premium skateboard manufacturer.",
    url: "https://scaters.com",
    logo: "https://scaters.com/images/logos/logo.png",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
    },
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Raptor X Skateboard",
    description: "Limited-edition skateboard built for thrill-seekers. Eco-friendly bamboo and maple deck with precision trucks and advanced wheels.",
    brand: {
      "@type": "Brand",
      name: "Scaters",
    },
    offers: {
      "@type": "Offer",
      price: "177",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
    },
  };

  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Raptor Roadshow 2025: The Ultimate Skateboarding Experience",
    description: "Join us for the ultimate skateboarding experience. Test the Raptor Skateboard, meet pro skaters, and participate in exciting activities.",
    startDate: "2025-04-07T10:00:00+01:00",
    endDate: "2025-04-11T16:30:00+01:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: [
      {
        "@type": "Place",
        name: "London Hyde Park",
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "GB",
        },
      },
      {
        "@type": "Place",
        name: "Manchester Platt Fields Park",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Manchester",
          addressCountry: "GB",
        },
      },
      {
        "@type": "Place",
        name: "Birmingham The Wheels Adventure Park",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Birmingham",
          addressCountry: "GB",
        },
      },
      {
        "@type": "Place",
        name: "Greenwich-Victoria Park",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Greenwich",
          addressCountry: "GB",
        },
      },
      {
        "@type": "Place",
        name: "Liverpool-Wavertree Playground",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Liverpool",
          addressCountry: "GB",
        },
      },
    ],
    organizer: {
      "@type": "Organization",
      name: "Scaters",
      url: "https://scaters.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
      />
      <main className="w-full max-w-full overflow-x-hidden">
        <Header />
        <Hero />
        <EventSection />
        <ProductSection />
        <Gallery />
        <EventSchedule />
        <ContactForm />
        <Footer />
      </main>
      <Chatbot />
    </>
  );
}

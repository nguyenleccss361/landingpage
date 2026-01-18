import Image from "next/image";
import Link from "next/link";

const events = [
  {
    location: "London-Hyde Park",
    date: "Monday, April 7, 2025",
    time: "10:00 AM – 4:30 PM",
    content: {
      intro: "Launch of the product and key features.",
      performances: "Professional skaters showcasing tricks with Raptor.",
      experience: "Attendees try Raptor on-site.",
      activities: "Q&A with skaters, meet the team, and engage in mini competitions.",
    },
    image: "/images/events/event-london.png",
    imageAlt: "London Hyde Park Event",
  },
  {
    location: "Manchester Platt Fields Park",
    date: "Tuesday, April 8, 2025",
    time: "10:00 AM – 4:30 PM",
    content: {
      intro: "Launch of the product and key features.",
      performances: "Demonstrations and tricks by top skaters.",
      experience: "Try Raptor on-site.",
      activities: "Games and community engagement with local skateboarders.",
    },
    image: "/images/events/event-manchester.jpeg",
    imageAlt: "Manchester Event",
  },
  {
    location: "Birmingham-The Wheels Adventure Park",
    date: "Wednesday, April 9, 2025",
    time: "10:00 AM – 4:30 PM",
    content: {
      intro: "Product demonstration and features.",
      performances: "Live tricks by sponsored pro skaters.",
      experience: "Raptor test sessions for the public.",
      activities: "Skateboarding workshop for enthusiasts and fans.",
    },
    image: "/images/events/event-birmingham.jpg",
    imageAlt: "Birmingham Event",
  },
  {
    location: "Greenwich-Victoria Park",
    date: "Thursday, April 10, 2025",
    time: "10:00 AM – 4:30 PM",
    content: {
      intro: "Brand launch and demo of key features.",
      performances: "Professional skating showcase.",
      experience: "Skateboard trials and on-site experiences.",
      activities: "Meet the team; participate in skateboarding challenges.",
    },
    image: "/images/events/event-greenwich.png",
    imageAlt: "Greenwich Event",
  },
  {
    location: "Liverpool-Wavertree Playground",
    date: "Friday, April 11, 2025",
    time: "10:00 AM – 4:30 PM",
    content: {
      intro: "Product launch and demonstration.",
      performances: "Skaters performing live tricks.",
      experience: "Public test of the Raptor skateboard.",
      activities: "Meet the skaters, try mini games, and engage with the brand.",
    },
    image: "/images/events/event-liverpool.jpeg",
    imageAlt: "Liverpool Event",
  },
];

export default function EventSchedule() {
  return (
    <section id="schedule" className="section bg-[var(--theme-1)]">
      <div className="container">
        <h2 className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl">
          Event Schedule Raptor Roadshow 2025: The Ultimate Skateboarding Experience
        </h2>
        <div className="space-y-12 md:space-y-16">
          {events.map((event, index) => (
            <div
              key={event.location}
              className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-4 p-6 md:p-8 rounded-xl shadow-lg ${
                index % 2 === 0 
                  ? "bg-[var(--theme-3)]" 
                  : "bg-[var(--theme-5)] text-[var(--theme-1)]"
              } ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{event.location}</h3>
                <div className="space-y-2 text-base md:text-lg">
                  <p><strong>Date</strong>: {event.date}</p>
                  <p><strong>Time</strong>: {event.time}</p>
                </div>
                <div className="pt-4 space-y-3">
                  <p className="font-semibold text-lg">Content:</p>
                  <div className="space-y-2 text-sm md:text-base">
                    <p><strong>Raptor Introduction</strong>: {event.content.intro}</p>
                    <p><strong>Pro Performances</strong>: {event.content.performances}</p>
                    <p><strong>Hands-On Experience</strong>: {event.content.experience}</p>
                    <p><strong>Interactive Activities</strong>: {event.content.activities}</p>
                  </div>
                </div>
                <div className="pt-6">
                  <Link href="#register" className={`btn ${
                    index % 2 === 1 
                      ? "btn-outline bg-[var(--theme-1)] text-[var(--theme-5)] border-[var(--theme-5)] hover:bg-[var(--theme-4)]" 
                      : ""
                  }`}>
                    Register Now
                  </Link>
                </div>
              </div>
              <div className={`relative aspect-video rounded-xl overflow-hidden shadow-xl ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}>
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

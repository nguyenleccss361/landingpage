import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    location: "London-Hyde Park",
    date: "Monday, April 7, 2026",
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
    date: "Tuesday, April 8, 2026",
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
    date: "Wednesday, April 9, 2026",
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
    date: "Thursday, April 10, 2026",
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
    date: "Friday, April 11, 2026",
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
    <section id="schedule" className="py-24 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-center mb-12 text-3xl md:text-4xl lg:text-5xl font-bold">
          Event Schedule Raptor Roadshow 2026: The Ultimate Skateboarding Experience
        </h2>
        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={event.location}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <Card className={index % 2 === 1 ? "md:order-2 bg-primary text-primary-foreground" : ""}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">{event.location}</CardTitle>
                  <CardDescription className={index % 2 === 1 ? "text-primary-foreground/80" : ""}>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Content:</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Raptor Introduction</strong>: {event.content.intro}
                      </p>
                      <p>
                        <strong>Pro Performances</strong>: {event.content.performances}
                      </p>
                      <p>
                        <strong>Hands-On Experience</strong>: {event.content.experience}
                      </p>
                      <p>
                        <strong>Interactive Activities</strong>: {event.content.activities}
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant={index % 2 === 1 ? "secondary" : "default"}
                    className="mt-6"
                  >
                    <Link href="#register">Register Now</Link>
                  </Button>
                </CardContent>
              </Card>
              <div
                className={`relative aspect-video rounded-xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
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

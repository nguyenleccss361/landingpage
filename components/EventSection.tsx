import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export default function EventSection() {
  return (
    <section id="event" className="py-24 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              &ldquo;Raptor Roadshow 2026: The Ultimate Skateboarding Experience&rdquo;
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-semibold">Test the Raptor Skateboard and skateboarding contest</p>
              <p className="text-lg font-semibold">Meet Pro Skaters</p>
              <p className="text-lg font-semibold text-primary">Exclusive Gifts & Offers: Discover Raptor X—20% OFF</p>
            </div>
            <p className="text-muted-foreground">
              Don&apos;t miss this chance to join the skateboarding community and participate in exciting activities!
            </p>
            <p className="font-medium">Check if we&apos;re coming to a city near you!</p>
            <Button size="lg" asChild>
              <Link href="#register">Register Now</Link>
            </Button>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Event Schedule</CardTitle>
                <CardDescription>All events run from 10:00 AM – 4:30 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "April 7, 2026", location: "London Hyde Park" },
                    { date: "April 8, 2026", location: "Manchester Platt Fields Park" },
                    { date: "April 9, 2026", location: "Birmingham The Wheels Adventure Park" },
                    { date: "April 10, 2026", location: "Greenwich-Victoria Park" },
                    { date: "April 11, 2026", location: "Liverpool-Wavertree Playground" },
                  ].map((event, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-0">
                      <Calendar className="h-5 w-5 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">{event.date}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/events/event-roadshow.png"
              alt="Raptor Roadshow Event"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

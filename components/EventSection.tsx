import Image from "next/image";
import Link from "next/link";

export default function EventSection() {
  return (
    <section id="event" className="section bg-[var(--theme-4)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl">
              <strong>&ldquo;Raptor Roadshow 2025: The Ultimate Skateboarding Experience&rdquo;</strong>
            </h2>
            <div className="space-y-3 text-center">
              <p className="text-lg"><strong>Test the Raptor Skateboard and skateboarding contest</strong></p>
              <p className="text-lg"><strong>Meet Pro Skaters</strong></p>
              <p className="text-lg text-[var(--theme-5)]"><strong>Exclusive Gifts & Offers: Discover Raptor X—20% OFF</strong></p>
            </div>
            <p className="text-center text-base">
              Don&apos;t miss this chance to join the skateboarding community and participate in exciting activities!
            </p>
            <p className="text-center text-base font-medium">Check if we&apos;re coming to a city near you!</p>
            <div className="flex justify-center pt-2">
              <Link href="#register" className="btn">
                Register Now
              </Link>
            </div>
            <div className="overflow-x-auto mt-8">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="bg-[var(--theme-3)] text-left">
                      <strong>Date</strong> and Time: 10:00 AM – 4:30 PM
                    </td>
                    <td className="bg-[var(--theme-3)] text-left">
                      <strong>Location</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong><em>April 7, 2025</em></strong>
                    </td>
                    <td>
                      <strong>London Hyde Park</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong><em>April 8, 2025</em></strong>
                    </td>
                    <td>
                      <strong>Manchester Platt Fields Park</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong><em>April 9, 2025</em></strong>
                    </td>
                    <td>
                      <strong>Birmingham The Wheels Adventure Park</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong><em>April 10, 2025</em></strong>
                    </td>
                    <td>
                      <strong>Greenwich-Victoria Park</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong><em>April 11, 2025</em></strong>
                    </td>
                    <td>
                      <strong>Liverpool-Wavertree Playground</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
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

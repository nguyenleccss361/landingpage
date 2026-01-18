import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/#products", label: "Our Product" },
    { href: "/contact", label: "Contact" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Scaters Logo"
                width={60}
                height={68}
                className="h-auto w-auto"
              />
              <h2 className="text-lg font-semibold leading-tight">
                Scaters—Where Passion Meets Performance.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium skateboard manufacturer delivering top-notch products for skaters of all skill levels.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:info@scaters.co.uk" className="hover:underline">
                  info@scaters.co.uk
                </a>
              </p>
              <p>
                <strong className="text-foreground">Phone:</strong>{" "}
                <a href="tel:+442079460958" className="hover:underline">
                  +44 20 7946 0958
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Scaters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

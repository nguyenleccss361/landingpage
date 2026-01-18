import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--theme-3)] py-12 border-t-4 border-[var(--theme-5)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logos/logo.png"
              alt="Scaters Logo"
              width={80}
              height={91}
              className="h-auto w-auto"
              loading="lazy"
              sizes="80px"
            />
            <h2 className="text-lg md:text-xl font-bold text-[var(--theme-5)] leading-tight">
              Scaters—Where Passion Meets Performance.
            </h2>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
            <Link href="/" className="hover:underline transition-all">Home</Link>
            <Link href="#about" className="hover:underline transition-all">About Us</Link>
            <Link href="#products" className="hover:underline transition-all">Our Product</Link>
            <Link href="#contact" className="hover:underline transition-all">Contact</Link>
            <Link href="#gallery" className="hover:underline transition-all">Gallery</Link>
          </nav>
        </div>
        <div className="border-t border-[var(--theme-5)]/30 pt-8 text-center text-sm text-[var(--theme-5)]/80">
          <p>&copy; {new Date().getFullYear()} Scaters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

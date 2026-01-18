import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[var(--theme-5)] text-[var(--theme-1)] py-1.5 sticky top-0 z-50 shadow-lg w-full max-w-full overflow-x-hidden">
      <div className="container">
        <div className="flex items-center justify-between gap-2 md:gap-4 overflow-x-hidden">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity flex-shrink-0">
              <Image
                src="/images/logos/logo.png"
                alt="Scaters Logo"
                width={40}
                height={45}
                className="h-auto w-auto flex-shrink-0"
                priority
                sizes="40px"
              />
              <h1 className="text-xs md:text-sm font-bold leading-tight whitespace-nowrap hidden sm:block">
                Scaters—Where Passion Meets Performance.
              </h1>
            </Link>
          </div>
          <nav className="flex items-center gap-1 md:gap-3 text-xs md:text-sm flex-shrink-0">
            <Link href="/" className="hover:underline transition-all px-1 md:px-2 py-0.5 rounded hover:bg-white/10 whitespace-nowrap">Home</Link>
            <Link href="/about" className="hover:underline transition-all px-1 md:px-2 py-0.5 rounded hover:bg-white/10 whitespace-nowrap">About Us</Link>
            <Link href="/#products" className="hover:underline transition-all px-1 md:px-2 py-0.5 rounded hover:bg-white/10 whitespace-nowrap">Our Product</Link>
            <Link href="/contact" className="hover:underline transition-all px-1 md:px-2 py-0.5 rounded hover:bg-white/10 whitespace-nowrap">Contact</Link>
            <Link href="/gallery" className="hover:underline transition-all px-1 md:px-2 py-0.5 rounded hover:bg-white/10 whitespace-nowrap">Gallery</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scaters—Where Passion Meets Performance.",
  description: "Discover Raptor X: The Ultimate Skateboard from Scaters. Join the Raptor Roadshow 2026 and experience premium skateboarding with our limited-edition boards. 20% OFF - Only £177.",
  keywords: ["skateboard", "skateboarding", "raptor x", "scaters", "skateboard UK", "skateboard deck", "skateboard wheels"],
  authors: [{ name: "Scaters" }],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Scaters—Where Passion Meets Performance.",
    description: "Discover Raptor X: The Ultimate Skateboard from Scaters—Unleash Your Urban Adventure",
    url: "https://scaters.com",
    siteName: "Scaters",
    images: [
      {
        url: "/logo.jpg",
        width: 574,
        height: 652,
        alt: "Scaters Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaters—Where Passion Meets Performance.",
    description: "Discover Raptor X: The Ultimate Skateboard from Scaters",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

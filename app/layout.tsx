import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scaters—Where Passion Meets Performance.",
  description: "Discover Raptor X: The Ultimate Skateboard from Scaters. Join the Raptor Roadshow 2025 and experience premium skateboarding with our limited-edition boards. 20% OFF - Only £177.",
  keywords: ["skateboard", "skateboarding", "raptor x", "scaters", "skateboard UK", "skateboard deck", "skateboard wheels"],
  authors: [{ name: "Scaters" }],
  openGraph: {
    title: "Scaters—Where Passion Meets Performance.",
    description: "Discover Raptor X: The Ultimate Skateboard from Scaters—Unleash Your Urban Adventure",
    url: "https://scaters.com",
    siteName: "Scaters",
    images: [
      {
        url: "/images/logos/logo.png",
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
    images: ["/images/logos/logo.png"],
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
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${bricolageGrotesque.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

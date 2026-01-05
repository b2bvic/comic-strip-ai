import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ComicStripAI | The Ultimate AI Comic Generator",
  description: "Turn your ideas into stunning visual stories. ComicStripAI is a powerful AI comic generator that lets you create unique comics and graphic novels in minutes.",
  metadataBase: new URL('https://comicstripai.com'),
  openGraph: {
    title: 'ComicStripAI | The Ultimate AI Comic Generator',
    description: 'Turn your ideas into stunning visual stories. Create unique comics and graphic novels in minutes with AI.',
    url: 'https://comicstripai.com',
    siteName: 'ComicStripAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComicStripAI | AI Comic Generator',
    description: 'Turn your ideas into stunning visual stories with AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ComicStripAI",
              "applicationCategory": "DesignApplication",
              "operatingSystem": "Web",
              "description": "AI-powered comic strip generator that transforms text into stunning visual stories.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free tier available"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

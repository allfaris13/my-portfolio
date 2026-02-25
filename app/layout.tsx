import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Improve loading performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Improve loading performance
  preload: false, // Only preload if needed
});

export const metadata: Metadata = {
  title: "Dev Area - Alfian Jack Portfolio",
  description: "Frontend Developer Portfolio - Membangun pengalaman web yang indah dan interaktif",
  keywords: ["Frontend Developer", "React", "Next.js", "JavaScript", "TypeScript", "Portfolio", "Web Developer", "Alfian Jack"],
  authors: [{ name: "Alfian Jack" }],
  creator: "Alfian Jack",
  publisher: "Alfian Jack",
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://alfianjack.vercel.app',
    title: 'Dev Area - Alfian Jack Portfolio',
    description: 'Frontend Developer Portfolio - Membangun pengalaman web yang indah dan interaktif',
    siteName: 'Dev Area',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dev Area - Alfian Jack Portfolio',
      },
    ],
  },
  
  // Icons
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  
  // Manifest
  manifest: '/manifest.json',
  
  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

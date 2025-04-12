'use client';

import type React from 'react';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PhoneButton from '@/components/PhoneButton';
import { Toaster } from '@/components/ui/sonner';
import SocialMediaBar from '@/components/SocialMediaBar';
import { usePathname } from 'next/navigation';

const outfit = Outfit({
  subsets: ['latin'], // Specify the character subsets you need
  variable: '--font-outfit', // Optional: Define a CSS variable for easier styling
});

const metadata: Metadata = {
  title: 'SecurePal | Managed IT Services Provider',
  description:
    'Professional IT solutions, cybersecurity, cloud services, and website hosting for businesses of all sizes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current path

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-58KHW3KDNN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-58KHW3KDNN');
            `,
          }}
        ></script>
      </head>
      <body className={outfit.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* Conditionally Render SocialMediaBar */}
          {pathname !== '/about' && <SocialMediaBar />}
          <WhatsAppButton />
          <PhoneButton />
          <Toaster />
        </div>
      </body>
    </html>
  );
}

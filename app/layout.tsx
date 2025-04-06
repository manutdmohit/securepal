'use client';

import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PhoneButton from '@/components/PhoneButton';
import { Toaster } from '@/components/ui/sonner';
import SocialMediaBar from '@/components/SocialMediaBar';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
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

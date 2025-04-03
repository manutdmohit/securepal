'use client';

import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { ThemeProvider } from '@/components/theme-provider';
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
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
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
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

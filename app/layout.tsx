'use client';

import type { ReactNode } from 'react';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PhoneButton from '@/components/PhoneButton';
import { Toaster } from '@/components/ui/sonner';
import SocialMediaBar from '@/components/SocialMediaBar';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import type { Metadata } from 'next';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const metadata: Metadata = {
  title: 'SecurePal | Managed IT Services Provider',
  description:
    'SecurePal offers professional IT solutions including cybersecurity, cloud services, and website hosting tailored for businesses of all sizes.',
  keywords:
    'IT services, cybersecurity, cloud computing, website hosting, managed IT, SecurePal, business IT support',
  authors: [{ name: 'SecurePal Team', url: 'https://securepal.com.au' }],
  creator: 'SecurePal',
  metadataBase: new URL('https://securepal.com.au'),
  openGraph: {
    title: 'SecurePal | Managed IT Services Provider',
    description:
      'Professional IT solutions, cybersecurity, cloud services, and website hosting tailored for your business.',
    url: 'https://securepal.com.au',
    siteName: 'SecurePal',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://securepal.com.au/images/1.png',
        width: 1200,
        height: 630,
        alt: 'SecurePal - Managed IT Services',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SecurePal Team" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-58KHW3KDNN"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-58KHW3KDNN');
            `,
          }}
        />
      </Head>
      <body className={outfit.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          {pathname !== '/about' && <SocialMediaBar />}
          <WhatsAppButton />
          <PhoneButton />
          <Toaster position="top-right" richColors />
        </div>
      </body>
    </html>
  );
}

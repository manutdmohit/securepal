'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { Outfit } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PhoneButton from '@/components/PhoneButton';
import SocialMediaBar from '@/components/SocialMediaBar';
import { Toaster } from '@/components/ui/sonner';

/* =======================
   FONT
======================= */
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

/* =======================
   METADATA (SEO)
======================= */
export const metadata: Metadata = {
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
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/* =======================
   ROOT LAYOUT
======================= */
export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  /* =======================
     SPA PAGE VIEW TRACKING
  ======================= */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Google Analytics page view
      window.gtag?.('config', 'G-58KHW3KDNN', {
        page_path: pathname,
      });

      // Meta Pixel page view
      window.fbq?.('track', 'PageView');
    }
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        {/* ================= Google Analytics ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-58KHW3KDNN"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-58KHW3KDNN');
          `}
        </Script>

        {/* ================= Meta Pixel ================= */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1676326383327587');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* ================= NoScript Meta Pixel ================= */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1676326383327587&ev=PageView&noscript=1"
          />
        </noscript>

        {/* ================= App Layout ================= */}
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

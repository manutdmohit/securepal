import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

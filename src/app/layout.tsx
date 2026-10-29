import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://arvind-sb.vercel.app'),
  title: 'Arvind SB | Automotive Software & Embedded Systems',
  description:
    'Official personal portfolio of Arvind SB — Computer Science & Engineering student at Amrita Vishwa Vidyapeetham. Specializing in Automotive Software Engineering, Embedded Systems, and Automotive AI.',
  authors: [{ name: 'Arvind SB' }],
  keywords: [
    'Arvind SB',
    'Automotive AI',
    'Automotive Software',
    'Embedded Systems',
    'Computer Science',
    'Amrita Vishwa Vidyapeetham',
    'CAN Bus',
    'Next.js Portfolio',
  ],
  openGraph: {
    title: 'Arvind SB | Automotive Software & Embedded Systems',
    description:
      'Official personal portfolio of Arvind SB. Engineering high-performance software at the frontier of smart mobility and embedded computing.',
    url: 'https://arvind-sb.vercel.app',
    siteName: 'Arvind SB Portfolio',
    images: [
      {
        url: '/images/profile/hero-portrait-studio.jpg',
        width: 1200,
        height: 630,
        alt: 'Arvind SB — Automotive Software & Embedded Systems Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arvind SB | Automotive Software & Embedded Systems',
    description:
      'Official personal portfolio of Arvind SB. Computer Science student at Amrita Vishwa Vidyapeetham.',
    images: ['/images/profile/hero-portrait-studio.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#080808]">
      <body className="bg-[#080808] text-[#f5f5f5] antialiased selection:bg-[#e50920] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}


import type {Metadata} from 'next';
import {Poppins, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Barter Up! — Peer-to-Peer Learning & Collaboration',
  description:
    'Barter Up! is a collaborative peer-to-peer learning & networking community that empowers professionals and SMEs to upskill through cross-industry expertise exchange.',
  openGraph: {
    title: 'Barter Up! — Peer-to-Peer Learning & Collaboration',
    description:
      'Barter Up! is a collaborative peer-to-peer learning & networking community that empowers professionals and SMEs to upskill through cross-industry expertise exchange.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barter Up! — Peer-to-Peer Learning & Collaboration',
    description:
      'Barter Up! is a collaborative peer-to-peer learning & networking community that empowers professionals and SMEs to upskill through cross-industry expertise exchange.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`scroll-smooth ${poppins.variable} ${plusJakartaSans.variable}`}>
      <body
        className="bg-[#f8faff] font-sans text-[#0c48a4] antialiased selection:bg-[#f9fe8f] selection:text-[#0c48a4]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

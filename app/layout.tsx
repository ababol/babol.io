import { cn } from '@/utils/cn';
import { getURL } from '@/utils/helpers';
import { Nunito_Sans } from 'next/font/google';
import { Metadata, Viewport } from 'next/types';
import { PropsWithChildren } from 'react';
import 'styles/main.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '500'],
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

const meta = {
  title: 'Arnaud Babol',
  description: 'Arnaud Babol is a French Engineer.',
  cardImage: 'https://babol.io/images/meta/thumbnail.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: getURL()
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Arnaud Babol', url: 'https://babol.io/' }],
  creator: 'Arnaud Babol',
  publisher: 'Arnaud Babol',
  robots: meta.robots,
  icons: { icon: meta.favicon },
  metadataBase: new URL(meta.url),
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    images: [meta.cardImage],
    type: 'website',
    siteName: meta.title
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn(nunitoSans.className, 'container relative')}>
        {children}
      </body>
    </html>
  );
}

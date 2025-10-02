import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'
import type { PropsWithChildren } from 'react';

import { Providers } from '@/components/providers'
import '@workspace/ui/globals.css'

import '@/app/styles.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'monorelease'
};

export default function RootLayout({ children }: PropsWithChildren ) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

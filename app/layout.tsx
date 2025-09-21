import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'TipSpark - Spark engagement by tipping directly on your favorite content',
  description: 'A Base MiniApp that enables users to send small monetary tips for specific interactions, primarily focused on likes within a social context.',
  openGraph: {
    title: 'TipSpark',
    description: 'Spark engagement by tipping directly on your favorite content',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

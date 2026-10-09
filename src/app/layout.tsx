import type { Metadata } from 'next';
import { Anton, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-subheading',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'INDIA IN OCTOBER • Brutalist Dossier',
  description: 'An interactive political brutalist dossier and presentation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-white antialiased overflow-hidden select-none w-screen h-screen">
        <div className="paper-grain" />
        {children}
      </body>
    </html>
  );
}

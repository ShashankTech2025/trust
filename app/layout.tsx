import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'RJS Foundation | Empowering Lives',
  description: 'Charitable trust arm of RJS Group of Institutes, dedicated to healthcare, environment, and community welfare.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#4A463F] bg-[#FCFBFA]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

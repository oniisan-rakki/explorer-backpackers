import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'; // 1. Import the font
import "./globals.css";

// Global Components
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LanguageTranslator } from './components/LanguageTranslator';
import { MainLayout } from './components/MainLayout';

// 2. Configure the font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat', // This defines the CSS variable name
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Explorer Backpackers | Johannesburg Hostel & Tours",
  description: "Your peaceful home away from home in Johannesburg.",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Inject the variable and apply the Tailwind utility class 'font-sans' */}
      <body className={`${montserrat.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <MainLayout>
          {children}
        </MainLayout>

        <Footer />
        <WhatsAppButton />
        <LanguageTranslator />
      </body>
    </html>
  );
}
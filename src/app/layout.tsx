import type { Metadata } from "next";
import { Lato, Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["500", "700"], variable: "--font-montserrat" });
const lato = Lato({ subsets: ['latin'], weight: "400", variable: "--font-lato" });
export const metadata: Metadata = {
  title: "Lucky Quit | Quit Smoking App",
  description: "Discover top-notch smoking cessation coaches and take control of your journey to quit smoking. Our app empowers you to track your cigarette consumption, monitor your health progress, and visualize the money saved. Start your smoke-free life today!",
  keywords: ["quit smoking app","Smoke-free app", "Nicotine addiction help", "Motivational support for quitting smoking","Quit smoking benefits"],
};

import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex w-full h-full">
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased dark:bg-black flex w-full h-full`}
      >
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

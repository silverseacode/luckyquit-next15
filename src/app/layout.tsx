import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'],weight: ["500", "700"], variable:"--font-montserrat" })

export const metadata: Metadata = {
  title: "Lucky Quit | Quit Smoking App",
  description: "Discover top-notch smoking cessation coaches and take control of your journey to quit smoking. Our app empowers you to track your cigarette consumption, monitor your health progress, and visualize the money saved. Start your smoke-free life today!",
  keywords: ["quit smoking app","Smoke-free app", "Nicotine addiction help", "Motivational support for quitting smoking","Quit smoking benefits"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

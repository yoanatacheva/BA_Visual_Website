import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext"

// Variable Fonts

const ibmPlex_font = localFont({
  src: '../public/fonts/variable/IBMPlexSans-VariableFont.woff2',
  display: 'swap',
  variable: '--font-ibm-plex',
})

const geistMono_font = localFont({
  src: '../public/fonts/variable/GeistMono-VariableFont.woff2',
  display: 'swap',
  variable: '--font-geist-mono',
})

const geist_font = localFont({
  src: '../public/fonts/variable/Geist-VariableFont.woff2',
  display: 'swap',
  variable: '--font-geist',
})

const sourceSerif4_font = localFont({
  src: '../public/fonts/variable/SourceSerif4-VariableFont.woff2',
  display: 'swap',
  variable: '--font-source-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://visual.yochita.com/'),
  title: {
    default: "Yoana Tacheva — Visual Website",
    template: "%s | Yoana Tacheva",
  },
  keywords: ["Yoana Tacheva", "Main Website", "Design System World", "Nexa Digital Design System", "Design System Elements", "Control Website", "Visuals",],
  description: 'Visual Website of the Bachelor Thesis Project named The Power of Systematic Digital Design. The main idea of the creative project is to demonstrate and educate about the power of systematic digital design in an engaging and accessible way.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Yoana Tacheva — Visual Website",
    description: "Yoana Tacheva is a designer based in Switzerland. She focuses on creating designs that are visually beautiful and aesthetically pleasing while also functional, dynamic, and responsive.",
    url: "https://visual.yochita.com/",
    siteName: "Visual Website",
    type: "website",
    images: [
      {
        url: '/og_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yoana Tacheva Design Preview',
      }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlex_font.variable} ${geistMono_font.variable} ${geist_font.variable} ${sourceSerif4_font.variable}`}>
      <body className="antialiased tracking-tighter select-none">
        <ThemeProvider>
          <div className="typography-nexa-base">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

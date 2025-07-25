import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { ThemeProvider } from "@/providers/theme-providers";
import { DM_Sans } from 'next/font/google'
import ModalProvider from "@/providers/modal-providers";
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnarToaster } from '@/components/ui/sonner'
const font = DM_Sans({ subsets: ['latin'] })
import { Merriweather } from "next/font/google";
export const metadata: Metadata = {
  title: "BuildFlow",
  description: "All in one Agency Solution",
};

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"], 
  style: ["normal", "italic"],   // optional
  display: "swap",               
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en"
      suppressHydrationWarning
    >
      <ClerkProvider afterSignOutUrl='/' appearance={{ baseTheme: dark }}>
        <body className={merriweather.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
              {children}
              <Toaster />
              <SonnarToaster position="bottom-left" />
            </ModalProvider>
          </ThemeProvider>
        </body>
      </ClerkProvider>

    </html>

  );
}

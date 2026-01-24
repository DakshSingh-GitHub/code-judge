import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "./lib/context";
import ClientLayout from "./components/General/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Judge",
  description: "CodeJudge — a fast, secure platform for coding, execution, and evaluation",
  icons: {
    icon: "./logo.png",
    shortcut: "./logo.png"
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function() {
      if (
        localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <AppWrapper>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppWrapper>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI-Native Book | Architecting for Intelligence",
    template: "%s | AI-Native Book"
  },
  description: "A premium book reading experience for the AI era. Architecting and building software in the age of intelligence.",
  keywords: ["AI-Native", "Next.js 15", "Architecting AI", "LLM", "Agentic Workflow"],
  authors: [{ name: "AI-Native Team" }],
  creator: "AI-Native Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-native-book.com",
    title: "AI-Native Book | Architecting for Intelligence",
    description: "A premium book reading experience for the AI era.",
    siteName: "AI-Native Book",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Native Book | Architecting for Intelligence",
    description: "A premium book reading experience for the AI era.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

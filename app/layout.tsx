import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MADYIS - Your Business-in-a-Box",
  description: "Native full blended mobile application in your name (Apple & Google Play) + Ultra complete CRM. 100% White Label. Launch your entire digital ecosystem in 10 days.",
  keywords: ["CRM", "mobile app", "business management", "white label", "booking system", "payments"],
  authors: [{ name: "MADYIS" }],
  openGraph: {
    title: "MADYIS - Your Business-in-a-Box",
    description: "Launch your entire digital ecosystem in 10 days",
    type: "website",
  },
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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

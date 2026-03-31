import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Kumar | Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack, building fast, scalable, and user-friendly web applications.",
  keywords: [
    "Aditya Kumar",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MERN Stack",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Kumar" }],
  openGraph: {
    title: "Aditya Kumar | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, building fast, scalable, and user-friendly web applications.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.setAttribute('data-theme', 'light');
                } else if (theme === 'dark') {
                  document.documentElement.removeAttribute('data-theme');
                } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

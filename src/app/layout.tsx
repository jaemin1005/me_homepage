import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GitStateProvider } from "../../context/git_state.context";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Me HomePage",
  description: "My Personal Mini Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider  options={{ enableCssLayer: true }}>
        <GitStateProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </GitStateProvider>
      </AppRouterCacheProvider>
    </html>
  );
}

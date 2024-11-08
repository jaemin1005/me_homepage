import type { Metadata } from "next";
import "./globals.css";
import { GitStateProvider } from "../../context/git_state.context";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

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
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <GitStateProvider>
          {/* <body className="flex justify-center bg-custom-gradient bg-background"> */}
          <body>{children}</body>
        </GitStateProvider>
      </AppRouterCacheProvider>
    </html>
  );
}

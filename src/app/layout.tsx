import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { clashDisplay, raleway } from "./fonts";
import Nav from "@/components/layout/nav";

export const metadata: Metadata = {
  title: "Khrone SEO",
  description:
    "A simple SEO tool for any web app. Easily manage your SEO metadata and improve your web app's visibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${raleway.variable} ${clashDisplay.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          disableTransitionOnChange={true}
          enableSystem={false}
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

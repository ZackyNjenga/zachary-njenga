import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zacharia NJenga ",
  description: "Mind-blowing modern and minimalist portfolio website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider>

      </body>
    </html>
  );
}

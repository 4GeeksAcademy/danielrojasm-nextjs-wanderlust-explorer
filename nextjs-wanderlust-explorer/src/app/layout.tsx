import type { Metadata } from "next";
import { DM_Serif_Display, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navigation/Navbar";
import { FavoritesProvider } from "@/hooks/useFavorites";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Explora, filtra y guarda experiencias de viaje inolvidables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <FavoritesProvider>
          <div className="relative min-h-screen bg-app-pattern">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}

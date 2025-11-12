import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La vie cachée des 600 000 cœliaques en France",
  description: "Poster sur le problème de la maladie cœliaque en France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}

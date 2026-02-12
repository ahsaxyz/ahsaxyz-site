import type { Metadata } from "next";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { ParticleField } from "@/components/ParticleField";

export const metadata: Metadata = { title: "ahsa", description: "builder on solana" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <BackgroundEffects />
        <ParticleField />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

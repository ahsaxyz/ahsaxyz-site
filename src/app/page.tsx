"use client";

import { LiveClock } from "@/components/LiveClock";
import { StatusBadge } from "@/components/StatusBadge";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectCard } from "@/components/ProjectCard";
import { MapPin, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-32">
        <div className="flex items-center gap-2 mb-12 animate-fade-in">
          <Terminal size={12} className="text-zinc-700" />
          <span className="text-[10px] text-zinc-700 font-mono tracking-wider">~/ahsa</span>
        </div>

        <section className="mb-24 md:mb-32">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-display tracking-tight text-zinc-100 mb-6 cursor-default">
              <span className="hero-text">ahsa</span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 animate-fade-in-delay-1">
            <StatusBadge />

            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />
            <LiveClock />
            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />
            <SocialLinks />
          </div>
        </section>

        <section className="mb-24 md:mb-32 animate-fade-in-delay-2">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-medium">about</span>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent" />
          </div>
          <p className="text-zinc-500 leading-[1.8] text-sm md:text-[15px] max-w-lg">
            Developer focused on building tools and infrastructure on Solana.
            interested in on-chain experiments, AI systems, trading tooling, and autonomous agents.
            Most work sits at the intersection of crypto, automation, and experimental tech.
          </p>
        </section>

        <section className="mb-24 md:mb-32 animate-fade-in-delay-3">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-medium">builds</span>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent" />
          </div>
          <div className="space-y-4">
            <ProjectCard
              name="Fluxur"
              description="Protocol for provable commitment in on-chain creator ecosystems"
              tags={["solana", "rust", "typescript", "javascript", "css"]}
              href="/projects/fluxur"
              logo="/fluxur-logo.png"
            />
          </div>
        </section>

        <footer className="mt-32 pt-8 border-t border-zinc-900 animate-fade-in-delay-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-zinc-800 font-mono"><span className="text-emerald-500/60 animate-blink">_</span></p>
            <p className="text-[10px] text-zinc-800 font-mono tracking-wider">2025</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

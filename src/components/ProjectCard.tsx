"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  tags?: string[];
  href?: string;
  logo?: string;
}

export function ProjectCard({ name, description, tags, href, logo }: ProjectCardProps) {
  const content = (
    <>
      <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-zinc-800/50 via-transparent to-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6 rounded-lg border border-zinc-900 bg-zinc-950/50 backdrop-blur-sm group-hover:border-zinc-800/80 transition-all duration-500">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {logo && (
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-900 flex-shrink-0">
                  <Image src={logo} alt={`${name} logo`} width={40} height={40} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="text-base font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300 tracking-wide">{name}</h3>
            </div>
            <ArrowUpRight size={14} className="text-zinc-700 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed mb-5 group-hover:text-zinc-500 transition-colors duration-300">{description}</p>
          {tags && <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="text-[9px] uppercase tracking-[0.15em] text-zinc-700 px-2 py-1 rounded bg-zinc-900/80 group-hover:text-zinc-600 transition-colors">{tag}</span>)}</div>}
        </div>
      </div>
    </>
  );
  if (href) return <Link href={href} className="group relative block cursor-pointer">{content}</Link>;
  return <div className="group relative block cursor-pointer">{content}</div>;
}

"use client";
import { Github } from "lucide-react";

function XIcon({ size = 24 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>;
}

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <a href="https://github.com/ahsaxyz" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-emerald-400 transition-colors"><Github size={22} strokeWidth={1.5} /></a>
      <a href="https://x.com/ahsaxyz" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-emerald-400 transition-colors"><XIcon size={22} /></a>
    </div>
  );
}

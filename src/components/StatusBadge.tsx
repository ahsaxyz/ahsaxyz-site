"use client";

export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-3 h-3 rounded-full bg-emerald-400/20 animate-ping" />
        <div className="relative w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
      </div>
      <span className="text-zinc-500 text-xs tracking-widest uppercase font-medium">building</span>
    </div>
  );
}

"use client";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/[0.03] rounded-full blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[120px]" />
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-emerald-500/10 blur-[80px] animate-float" />
      <div className="absolute top-[60%] right-[15%] w-[200px] h-[200px] rounded-full bg-cyan-500/10 blur-[60px] animate-float-delayed" />
      <div className="absolute left-0 right-0 h-[1px] opacity-[0.08]" style={{ background: "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.8), transparent)", animation: "scanline 10s linear infinite" }} />
      <div className="absolute top-0 left-0"><div className="absolute top-8 left-0 w-20 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" /><div className="absolute top-0 left-8 w-px h-20 bg-gradient-to-b from-emerald-500/30 to-transparent" /></div>
      <div className="absolute top-0 right-0"><div className="absolute top-8 right-0 w-20 h-px bg-gradient-to-l from-emerald-500/30 to-transparent" /><div className="absolute top-0 right-8 w-px h-20 bg-gradient-to-b from-emerald-500/30 to-transparent" /></div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

export function LiveClock() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setTime(new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  if (!mounted) return <div className="inline-flex items-center gap-2 text-xs text-zinc-600"><span className="tabular-nums">--:--:--</span><span className="text-zinc-700">EST</span></div>;
  return <div className="inline-flex items-center gap-2 text-xs"><span className="text-zinc-400 tabular-nums font-mono tracking-wide">{time}</span><span className="text-zinc-700">EST</span></div>;
}

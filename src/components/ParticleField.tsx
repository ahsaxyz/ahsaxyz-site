"use client";
import { useEffect, useRef } from "react";

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouse = { x: 0, y: 0 };

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();

    const particles = Array.from({ length: Math.floor((window.innerWidth * window.innerHeight) / 15000) }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.pulse += 0.02;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        const dist = Math.sqrt((mouse.x - p.x) ** 2 + (mouse.y - p.y) ** 2);
        const influence = Math.max(0, 1 - dist / 150);
        const opacity = Math.min(1, p.opacity + Math.sin(p.pulse) * 0.1 + influence * 0.5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + influence * 2), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${influence > 0.3 ? "16, 185, 129" : "255, 255, 255"}, ${opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    const handleMouse = (e: MouseEvent) => { mouse = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    animate();

    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", handleMouse); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[5]" style={{ opacity: 0.6 }} />;
}

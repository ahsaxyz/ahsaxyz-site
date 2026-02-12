"use client";
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outerX = mouseX;
    let outerY = mouseY;
    let innerX = mouseX;
    let innerY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let running = true;
    const animate = () => {
      if (!running) return;

      // Smooth interpolation - outer follows slower, inner follows faster
      outerX += (mouseX - outerX) * 0.08;
      outerY += (mouseY - outerY) * 0.08;
      innerX += (mouseX - innerX) * 0.15;
      innerY += (mouseY - innerY) * 0.15;

      // Use transform for GPU acceleration
      outer.style.transform = `translate3d(${outerX - 300}px, ${outerY - 300}px, 0)`;
      inner.style.transform = `translate3d(${innerX - 125}px, ${innerY - 125}px, 0)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    requestAnimationFrame(animate);

    return () => {
      running = false;
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <div
        ref={outerRef}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.04) 35%, transparent 65%)",
          willChange: "transform",
        }}
      />
      <div
        ref={innerRef}
        className="absolute w-[250px] h-[250px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.06) 40%, transparent 60%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

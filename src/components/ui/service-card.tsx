import { useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  eyebrow?: string;
  title: string;
  description: string;
  items?: string[];
  accent?: "primary" | "secondary" | "accent";
  className?: string;
}

const accentMap: Record<NonNullable<ServiceCardProps["accent"]>, string> = {
  primary: "from-[rgba(124,58,237,0.45)] via-[rgba(124,58,237,0.12)] to-transparent",
  secondary: "from-[rgba(94,234,212,0.38)] via-[rgba(20,184,166,0.1)] to-transparent",
  accent: "from-[rgba(165,180,252,0.35)] via-[rgba(165,180,252,0.12)] to-transparent",
};

export function ServiceCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  items,
  accent = "primary",
  className,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Subtly rotate card based on mouse position relative to card center
    const maxTilt = 5; // elegant low degrees
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex h-full flex-col gap-6 rounded-[1.75rem] border border-[color:var(--border-subtle)] bg-[color:rgba(8,15,28,0.62)] p-8 shadow-[0_22px_40px_-25px_rgba(4,10,24,0.9)] backdrop-blur-2xl transition duration-500 ease-out hover:border-[color:var(--border-glow)]",
        className
      )}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        boxShadow: isHovered
          ? accent === "primary"
            ? "0 20px 40px -15px rgba(124,58,237,0.15), 0 0 30px -5px rgba(124,58,237,0.1)"
            : "0 20px 40px -15px rgba(94,234,212,0.12), 0 0 30px -5px rgba(94,234,212,0.08)"
          : "",
        transition: isHovered
          ? "transform 0.08s ease-out, border-color 0.3s ease, box-shadow 0.3s ease"
          : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Interactive Mouse Spotlight Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-[1.75rem] opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${
              accent === "primary"
                ? "rgba(124, 58, 237, 0.16)"
                : accent === "secondary"
                ? "rgba(94, 234, 212, 0.14)"
                : "rgba(165, 180, 252, 0.12)"
            }, transparent 80%)`,
          }}
        />
      )}
      <div className="absolute inset-0 -z-20 rounded-[1.75rem] bg-[color:rgba(10,18,33,0.75)] opacity-80 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 -z-30 rounded-[1.75rem] bg-gradient-to-br opacity-50",
          accentMap[accent]
        )}
      />

  <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[color:var(--border-strong)] bg-[color:rgba(12,20,37,0.75)] px-4 py-2 text-xs uppercase tracking-[0.32em] text-text-subtle">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:rgba(6,12,23,0.85)]">
          <Icon className="h-4 w-4 text-primary" aria-hidden />
        </span>
        {eyebrow}
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-text">{title}</h3>
  <p className="text-sm leading-relaxed text-text-mute">{description}</p>
      </div>

      {items && items.length > 0 && (
  <ul className="space-y-2 text-sm text-text-mute">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-secondary-fg" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

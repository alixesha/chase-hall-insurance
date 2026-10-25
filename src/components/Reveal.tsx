import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "left" | "right" | "up";

interface RevealProps {
  children: ReactNode;
  /** Direction the content enters from. Convention: text = "right", images = "left". */
  direction?: RevealDirection;
  /** Delay in milliseconds before the transition starts. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Scroll-triggered entrance animation. Adds `.is-visible` the first time the
 * element scrolls into view; CSS in src/styles.css handles the transition.
 */
export function Reveal({
  children,
  direction = "right",
  delay = 0,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", `reveal-${direction}`, className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

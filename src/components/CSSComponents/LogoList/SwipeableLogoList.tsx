import { useState, useRef, useEffect } from "react";
import { cn } from "../../../consts";

interface LogoListProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export const SwipeableLogoList = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: LogoListProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const defaultDuration = 30; // Default animation duration in seconds
  const [animationDuration, setAnimationDuration] = useState(defaultDuration);
  const [animationDirection, setAnimationDirection] = useState(reverse ? "reverse" : "normal");

  useEffect(() => {
    if (containerRef.current) {
      const computedStyle = getComputedStyle(containerRef.current);
      const duration = computedStyle.getPropertyValue("--duration").trim();
      setAnimationDuration(parseFloat(duration));
    }
  }, []);

  let touchStartX = 0;
  let touchStartY = 0;

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const halfWidth = width / 2;

      // Calculate speed and direction based on mouse position
      const speed = ((mouseX - halfWidth) / halfWidth) * 5; // Adjust multiplier for sensitivity
      const newDuration = defaultDuration / Math.abs(speed);
      setAnimationDuration(Math.abs(newDuration));
      setAnimationDirection(speed > 0 ? "reverse" : "normal");
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (containerRef.current) {
      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        const { width } = containerRef.current.getBoundingClientRect();
        const halfWidth = width / 2;

        // Calculate speed and direction based on touch movement
        const speed = (deltaX / halfWidth) * 5; // Adjust multiplier for sensitivity
        const newDuration = defaultDuration / Math.abs(speed);
        setAnimationDuration(Math.abs(newDuration));
        setAnimationDirection(speed > 0 ? "reverse" : "normal");
      }
    }
  };

  const handleMouseEnter = () => {
    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseLeave = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    setAnimationDuration(defaultDuration); // Restore default duration when mouse leaves
    setAnimationDirection(reverse ? "reverse" : "normal"); // Restore default direction when mouse leaves
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, []);

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:30s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{
        "--duration": `${animationDuration}s`,
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-logolist flex-row": !vertical,
              "animate-logolist-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": animationDirection === "reverse",
            })}
            style={{
              animationDuration: `var(--duration)`,
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

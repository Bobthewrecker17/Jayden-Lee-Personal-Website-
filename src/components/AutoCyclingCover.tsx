import { useEffect, useState } from "react";

interface Props {
  images: string[];
  alt: string;
  className?: string;
  intervalMs?: number;
  initialDelayMs?: number;
}

const TRANSITION_MS = 1600;

const AutoCyclingCover = ({
  images,
  alt,
  className = "",
  intervalMs = 5000,
  initialDelayMs = 0,
}: Props) => {
  const [index, setIndex] = useState(0);
  const slides = images.length > 0 ? images : [];

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    let intervalId: ReturnType<typeof setInterval>;

    const advance = () => {
      setIndex((current) => (current + 1) % slides.length);
    };

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(advance, intervalMs);
    }, initialDelayMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [slides.length, intervalMs, initialDelayMs]);

  if (slides.length === 0) {
    return <div className={className} />;
  }

  if (slides.length === 1) {
    return (
      <img
        src={slides[0]}
        alt={alt}
        className={`${className} object-cover`}
        draggable={false}
      />
    );
  }

  const transitionStyle = {
    transition: `opacity ${TRANSITION_MS}ms ease-in-out, transform ${TRANSITION_MS}ms ease-in-out`,
    willChange: "opacity, transform" as const,
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {slides.map((src, slideIndex) => {
        const isActive = slideIndex === index;

        return (
          <img
            key={src}
            src={src}
            alt={isActive ? alt : ""}
            aria-hidden={!isActive}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              ...transitionStyle,
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1)" : "scale(1.015)",
              zIndex: isActive ? 2 : 1,
            }}
          />
        );
      })}
    </div>
  );
};

export default AutoCyclingCover;

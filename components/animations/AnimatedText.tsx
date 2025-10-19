"use client";

import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export function AnimatedText({
  text,
  className = '',
  staggerDelay = 30,
  initialDelay = 0,
  as: Component = 'div',
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  // Split text into characters while preserving spaces
  const characters = text.split('').map((char, index) => ({
    char: char === ' ' ? '\u00A0' : char, // Use non-breaking space
    index,
  }));

  return (
    <Component className={className} aria-label={text}>
      {characters.map(({ char, index }) => (
        <span
          key={index}
          className="inline-block relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * staggerDelay}ms, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * staggerDelay}ms`,
            willChange: isVisible ? 'auto' : 'opacity, transform',
          }}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}

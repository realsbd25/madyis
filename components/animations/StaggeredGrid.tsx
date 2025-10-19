"use client";

import { Children, ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface StaggeredGridProps {
  children: ReactNode;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export function StaggeredGrid({
  children,
  staggerDelay = 100,
  duration = 600,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true,
  direction = 'up',
  distance = 20,
}: StaggeredGridProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin, triggerOnce });

  const getTransform = (index: number) => {
    if (isVisible) return 'translate(0, 0)';

    switch (direction) {
      case 'up':
        return `translate(0, ${distance}px)`;
      case 'down':
        return `translate(0, -${distance}px)`;
      case 'left':
        return `translate(${distance}px, 0)`;
      case 'right':
        return `translate(-${distance}px, 0)`;
      default:
        return 'translate(0, 0)';
    }
  };

  const childrenArray = Children.toArray(children);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: getTransform(index),
            transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${index * staggerDelay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${index * staggerDelay}ms`,
            willChange: isVisible ? 'auto' : 'opacity, transform',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface ScrollRotatingCardsProps {
  features: Feature[];
}

export function ScrollRotatingCards({ features }: ScrollRotatingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !cardsContainerRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    // Set initial positions
    gsap.set(cards[0], {
      rotateY: -25,
      rotateX: 5,
      scale: 0.9,
      z: -150,
      opacity: 0.7,
    });

    gsap.set(cards[1], {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      z: 0,
      opacity: 1,
    });

    gsap.set(cards[2], {
      rotateY: 25,
      rotateX: 5,
      scale: 0.9,
      z: -150,
      opacity: 0.7,
    });

    // Create smooth rotation animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "center center",
        scrub: 2, // Higher value = smoother, more dampened
        markers: false,
        onLeave: () => {
          // Lock cards in final position when leaving
          gsap.to(cards[0], {
            rotateY: 25,
            rotateX: 5,
            scale: 0.9,
            z: -150,
            opacity: 0.7,
            duration: 0.5,
            ease: "power3.out"
          });
          gsap.to(cards[1], {
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            z: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
          });
          gsap.to(cards[2], {
            rotateY: -25,
            rotateX: 5,
            scale: 0.9,
            z: -150,
            opacity: 0.7,
            duration: 0.5,
            ease: "power3.out"
          });
        },
        onEnterBack: () => {
          // Re-enable scrubbing when scrolling back
          ScrollTrigger.refresh();
        }
      },
    });

    // Smoother rotation with custom ease
    tl.to(
      cards[0],
      {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        z: 0,
        opacity: 1,
        ease: "power2.inOut",
      },
      0
    )
    .to(
      cards[1],
      {
        rotateY: -10,
        rotateX: 3,
        scale: 0.95,
        z: -80,
        opacity: 0.85,
        ease: "power2.inOut",
      },
      0
    )
    .to(
      cards[2],
      {
        rotateY: -20,
        rotateX: 5,
        scale: 0.9,
        z: -150,
        opacity: 0.7,
        ease: "power2.inOut",
      },
      0
    );

    // Add a second timeline for the center focus state
    const centerTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "bottom 40%",
        scrub: 2,
        markers: false,
      },
    });

    centerTl
      .to(
        cards[0],
        {
          rotateY: 10,
          rotateX: 3,
          scale: 0.95,
          z: -80,
          opacity: 0.85,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        cards[1],
        {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          z: 0,
          opacity: 1,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        cards[2],
        {
          rotateY: -10,
          rotateX: 3,
          scale: 0.95,
          z: -80,
          opacity: 0.85,
          ease: "power2.inOut",
        },
        0
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-32"
      style={{ perspective: "2000px", perspectiveOrigin: "center center" }}
    >
      <div
        ref={cardsContainerRef}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
        style={{ transformStyle: "preserve-3d" }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform, opacity",
              }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm group h-full">
                <CardContent className="p-6">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} mb-4 mx-auto`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

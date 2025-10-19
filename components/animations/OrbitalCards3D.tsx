"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface OrbitalCards3DProps {
  features: Feature[];
}

export function OrbitalCards3D({ features }: OrbitalCards3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    // Initial setup - all cards visible in a row
    cards.forEach((card, index) => {
      if (!card) return;

      gsap.set(card, {
        opacity: 1,
        scale: 0.8,
        y: 50,
        rotateY: 0,
        transformPerspective: 1000,
      });
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "center center",
        scrub: 1.5,
        markers: false,
      },
    });

    // Animate cards in with stagger
    cards.forEach((card, index) => {
      if (!card) return;

      tl.to(
        card,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: "power2.out",
        },
        index * 0.2
      );
    });

    // Add subtle hover effect on scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const progress = self.progress;

        cards.forEach((card, index) => {
          if (!card) return;

          // Gentle wave motion
          const offset = Math.sin(progress * Math.PI * 2 + index * 0.5) * 10;
          const rotation = Math.sin(progress * Math.PI * 2 + index * 0.5) * 5;

          gsap.to(card, {
            y: offset,
            rotateY: rotation,
            duration: 0.3,
            ease: "none",
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [features.length]);

  return (
    <section className="w-full min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run your business efficiently
          </p>
        </motion.div>

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="relative max-w-6xl mx-auto"
          style={{
            perspective: "2000px",
            perspectiveOrigin: "center center",
          }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    animate={{
                      y: isHovered ? -10 : 0,
                      scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <Card
                      className="border-2 bg-card/95 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 h-full relative overflow-hidden group"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Gradient overlay on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 50% 0%, ${
                            feature.color.includes("from-")
                              ? "rgba(56, 182, 255, 0.1)"
                              : "rgba(56, 182, 255, 0.1)"
                          }, transparent 70%)`,
                        }}
                      />

                      <CardContent className="p-8 relative">
                        {/* Icon */}
                        <motion.div
                          className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 mx-auto shadow-lg`}
                          animate={{
                            rotateY: isHovered ? [0, 360] : 0,
                          }}
                          transition={{
                            duration: 0.8,
                            ease: "easeInOut"
                          }}
                          style={{
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-4 text-foreground text-center">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                          {feature.description}
                        </p>

                        {/* Shine effect on hover */}
                        {isHovered && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{
                              duration: 0.8,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            style={{ borderRadius: "inherit" }}
                          />
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

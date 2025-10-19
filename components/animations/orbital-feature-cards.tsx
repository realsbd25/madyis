"use client";

import { useState, useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface OrbitalFeatureCardsProps {
  features: Feature[];
}

export function OrbitalFeatureCards({ features }: OrbitalFeatureCardsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current) {
      setExpandedId(null);
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedId((prev) => {
      if (prev === id) {
        setAutoRotate(true);
        return null;
      } else {
        setAutoRotate(false);
        centerViewOnNode(id);
        return id;
      }
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.2) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = nodeId;
    const totalNodes = features.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 180;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.5,
      Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2))
    );
    const scale = Math.max(0.85, 0.85 + 0.15 * ((1 + Math.sin(radian)) / 2));

    return { x, y, angle, zIndex, opacity, scale };
  };

  return (
    <div
      className="w-full min-h-[700px] flex flex-col items-center justify-center overflow-hidden py-20"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{
            perspective: "1500px",
          }}
        >
          {/* Center Orb */}
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary via-accent to-secondary animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-24 h-24 rounded-full border border-primary/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-28 h-28 rounded-full border border-primary/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg"></div>
          </div>

          {/* Orbital Ring */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/10"></div>
          <div className="absolute w-[420px] h-[420px] rounded-full border border-primary/5"></div>

          {/* Feature Cards */}
          {features.map((feature, index) => {
            const position = calculateNodePosition(index, features.length);
            const isExpanded = expandedId === index;
            const Icon = feature.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px) scale(${
                isExpanded ? 1 : position.scale
              })`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={index}
                ref={(el) => {
                  nodeRefs.current[index] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(index);
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isExpanded ? "animate-pulse" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
                    opacity: isExpanded ? 0.3 : 0.15,
                    width: "80px",
                    height: "80px",
                    left: "-20px",
                    top: "-20px",
                  }}
                ></div>

                {/* Icon Node */}
                <motion.div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  bg-gradient-to-br ${feature.color}
                  border-2 border-white/40
                  shadow-lg transition-all duration-300
                  ${isExpanded ? "scale-125 shadow-xl" : ""}
                `}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>

                {/* Title */}
                <div
                  className={`
                  absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider text-center
                  transition-all duration-300
                  ${
                    isExpanded
                      ? "text-foreground scale-110 font-bold"
                      : "text-muted-foreground"
                  }
                `}
                >
                  {feature.title.split(" ").slice(0, 3).join(" ")}
                </div>

                {/* Expanded Card */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-72 bg-card/95 backdrop-blur-lg border-primary/30 shadow-2xl overflow-visible">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-primary/50"></div>
                      <CardContent className="p-6">
                        <div
                          className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} mb-4 mx-auto shadow-lg`}
                        >
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-foreground text-center">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-center">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Instruction Text */}
      <motion.p
        className="text-center text-sm text-muted-foreground mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Click on any feature to learn more
      </motion.p>
    </div>
  );
}

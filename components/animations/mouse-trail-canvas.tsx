"use client";

import { useEffect, useRef } from "react";

interface WaveOscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
  update(): number;
  value(): number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Line {
  spring: number;
  friction: number;
  nodes: Node[];
  update(pos: Position): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

interface Position {
  x: number;
  y: number;
}

const CONFIG = {
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

class Oscillator implements WaveOscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
  private value_: number;

  constructor(options: {
    phase?: number;
    offset?: number;
    frequency?: number;
    amplitude?: number;
  } = {}) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
    this.value_ = 0;
  }

  update(): number {
    this.phase += this.frequency;
    this.value_ = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.value_;
  }

  value(): number {
    return this.value_;
  }
}

class TrailLine implements Line {
  spring: number;
  friction: number;
  nodes: Node[];

  constructor(options: { spring: number }, pos: Position) {
    this.spring = options.spring + 0.1 * Math.random() - 0.05;
    this.friction = CONFIG.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];

    for (let i = 0; i < CONFIG.size; i++) {
      const node: Node = {
        x: pos.x,
        y: pos.y,
        vx: 0,
        vy: 0,
      };
      this.nodes.push(node);
    }
  }

  update(pos: Position): void {
    let spring = this.spring;
    const firstNode = this.nodes[0];

    firstNode.vx += (pos.x - firstNode.x) * spring;
    firstNode.vy += (pos.y - firstNode.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];

      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * spring;
        node.vy += (prevNode.y - node.y) * spring;
        node.vx += prevNode.vx * CONFIG.dampening;
        node.vy += prevNode.vy * CONFIG.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= CONFIG.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const firstNode = this.nodes[0];
    let x = firstNode.x;
    let y = firstNode.y;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let i = 1; i < this.nodes.length - 2; i++) {
      const node = this.nodes[i];
      const nextNode = this.nodes[i + 1];
      x = 0.5 * (node.x + nextNode.x);
      y = 0.5 * (node.y + nextNode.y);
      ctx.quadraticCurveTo(node.x, node.y, x, y);
    }

    const secondLast = this.nodes[this.nodes.length - 2];
    const last = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
    ctx.stroke();
    ctx.closePath();
  }
}

export function MouseTrailCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const linesRef = useRef<TrailLine[]>([]);
  const posRef = useRef<Position>({ x: 0, y: 0 });
  const oscillatorRef = useRef<Oscillator | null>(null);
  const runningRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize oscillator for color animation
    oscillatorRef.current = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    // Resize canvas to fill window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize lines
    const initLines = () => {
      linesRef.current = [];
      for (let i = 0; i < CONFIG.trails; i++) {
        linesRef.current.push(
          new TrailLine(
            { spring: 0.45 + (i / CONFIG.trails) * 0.025 },
            posRef.current
          )
        );
      }
    };

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        posRef.current.x = e.clientX;
        posRef.current.y = e.clientY;
      } else if (e.touches && e.touches.length === 1) {
        posRef.current.x = e.touches[0].pageX;
        posRef.current.y = e.touches[0].pageY;
      }
      e.preventDefault();
    };

    // Animation loop
    const render = () => {
      if (!runningRef.current || !ctx || !oscillatorRef.current) return;

      // Clear canvas
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw trails
      ctx.globalCompositeOperation = "lighter";
      const hue = Math.round(oscillatorRef.current.update());
      ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.025)`;
      ctx.lineWidth = 10;

      for (const line of linesRef.current) {
        line.update(posRef.current);
        line.draw(ctx);
      }

      animationRef.current = requestAnimationFrame(render);
    };

    // Start animation
    const startAnimation = (e: MouseEvent | TouchEvent) => {
      if (runningRef.current) return;

      handleMouseMove(e);
      initLines();
      runningRef.current = true;
      render();

      // Remove start listeners and add move listeners
      document.removeEventListener("mousemove", startAnimation);
      document.removeEventListener("touchstart", startAnimation);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleMouseMove);
    };

    // Event listeners
    document.addEventListener("mousemove", startAnimation);
    document.addEventListener("touchstart", startAnimation);
    window.addEventListener("resize", resizeCanvas);

    const handleFocus = () => {
      if (!runningRef.current) {
        runningRef.current = true;
        render();
      }
    };

    const handleBlur = () => {
      runningRef.current = true; // Keep running even when blurred
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    // Cleanup
    return () => {
      runningRef.current = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener("mousemove", startAnimation);
      document.removeEventListener("touchstart", startAnimation);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

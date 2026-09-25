import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant =
  | "photo"
  | "moss"
  | "olive"
  | "ivory"
  | "coffee"
  | "beige"
  | "pattern";

type Direction = "left" | "right" | "up" | "down";

const variantClasses: Record<Variant, string> = {
  photo: "bg-surface-muted",
  moss: "bg-moss text-ivory",
  olive: "bg-primary text-primary-foreground",
  ivory: "bg-surface text-text",
  coffee: "bg-coffee text-ivory",
  beige: "bg-beige text-ink",
  pattern: "bg-coffee text-ivory pattern-mosaic",
};

const offsets: Record<Direction, { x?: number; y?: number }> = {
  left: { x: -28 },
  right: { x: 28 },
  up: { y: 28 },
  down: { y: -28 },
};

export function BrickBlock({
  variant,
  direction = "up",
  delay = 0,
  className = "",
  children,
}: {
  variant: Variant;
  direction?: Direction;
  delay?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-2xl ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}

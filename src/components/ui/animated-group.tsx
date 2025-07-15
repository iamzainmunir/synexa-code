"use client";

import React, { ReactNode, isValidElement, ElementType } from "react";
import { motion, Variants } from "framer-motion";

// ✅ Define preset types
export type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

// ✅ Props for the AnimatedGroup
export interface AnimatedGroupProps {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: keyof typeof motion;
  asChild?: keyof typeof motion;
}

// ✅ Default container animation
const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ✅ Default item animation
const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// ✅ Preset animation variants
const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  },
  blur: {
    hidden: { filter: "blur(4px)" },
    visible: { filter: "blur(0px)" },
  },
  "blur-slide": {
    hidden: { filter: "blur(4px)", y: 20 },
    visible: { filter: "blur(0px)", y: 0 },
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 8 },
    },
  },
};

// ✅ Merge with default item animation
const addDefaultVariants = (variants: Variants): Variants => ({
  hidden: { ...defaultItemVariants.hidden, ...(variants?.hidden ?? {}) },
  visible: { ...defaultItemVariants.visible, ...(variants?.visible ?? {}) },
});

// ✅ Functional component (with no JSX namespace issues)
export function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = "div",
  asChild = "div",
}: AnimatedGroupProps): React.ReactElement {
  const MotionParent = (motion[as] ?? motion.div) as ElementType;
  const MotionItem = (motion[asChild] ?? motion.div) as ElementType;

  const containerVariants = variants?.container ?? defaultContainerVariants;
  const itemVariants =
    variants?.item ?? addDefaultVariants(preset ? presetVariants[preset] : {});

  return (
    <MotionParent
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => {
        if (!isValidElement(child)) return null;
        return (
          <MotionItem key={index} variants={itemVariants}>
            {child}
          </MotionItem>
        );
      })}
    </MotionParent>
  );
}

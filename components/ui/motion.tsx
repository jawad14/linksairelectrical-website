'use client';

import { motion, type Variants } from 'framer-motion';

/**
 * Reusable scroll-triggered animation wrappers.
 * Uses `whileInView` so elements animate as they enter the viewport.
 */

// --- Variants ---

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// --- Components ---

const defaultTransition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const };
const defaultViewport = { once: true, margin: '-60px' as const };

/** Fade up on scroll — the most common animation */
export function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Fade in (no movement) */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Slide in from left */
export function SlideLeft({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Slide in from right */
export function SlideRight({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Scale in on scroll */
export function ScaleIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger children — wrap a group, then wrap each child in FadeUp/FadeIn */
export function StaggerGroup({
  children,
  className,
  slow = false,
}: {
  children: React.ReactNode;
  className?: string;
  slow?: boolean;
}) {
  return (
    <motion.div
      variants={slow ? staggerContainerSlow : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A single stagger child — use inside StaggerGroup */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} transition={defaultTransition} className={className}>
      {children}
    </motion.div>
  );
}

/** Re-export motion for one-off use */
export { motion };

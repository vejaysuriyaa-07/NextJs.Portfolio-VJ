"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-label="Scroll progress"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-primary-400 to-secondary-600"
    />
  );
};

export default ScrollProgress;

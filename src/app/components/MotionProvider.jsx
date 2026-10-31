"use client";
import React from "react";
import { MotionConfig } from "framer-motion";

// Honors the visitor's "reduce motion" system setting for every animation.
const MotionProvider = ({ children }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;

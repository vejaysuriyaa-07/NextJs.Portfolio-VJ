"use client";
import React from "react";
import { motion } from "framer-motion";

// Fades and slides a section in the first time it scrolls into view.
const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default Reveal;

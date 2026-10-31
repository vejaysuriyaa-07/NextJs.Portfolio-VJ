"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const images = [
  `${basePath}/images/DSC07511.JPG`,
  `${basePath}/images/DSC07240.JPG`,
  `${basePath}/images/polish_save.JPG`,
  `${basePath}/images/IMG_0274_Original.jpg`,
  `${basePath}/images/IMG_0994.jpg`,
  `${basePath}/images/polish_save 2.JPG`,
  `${basePath}/images/polish_save 3.JPG`,
  `${basePath}/images/_DSC2231_Original.jpg`,
  `${basePath}/images/polish_save.PNG`,
];

// A slight tilt per frame makes the grid read like prints pinned to a wall.
const TILTS = ["-rotate-1", "rotate-0", "rotate-1"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // The Close button autofocuses before effects run, so the opener is recorded on click.
  const openerRef = useRef(null);

  // While the modal is open: Esc closes, Tab stays on Close, the page behind doesn't scroll,
  // and focus goes back to the photo that opened it.
  useEffect(() => {
    if (!selectedImage) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "Tab") e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      openerRef.current?.focus();
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-16 bg-[#181818]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-white mb-12"
        >
          Leadership & Community Highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#ADB7BE] max-w-3xl mx-auto mb-10 text-sm sm:text-base lg:text-lg"
        >
          A visual snapshot of volunteer work, NSS activities, awards, and
          campus moments alongside my engineering work.
        </motion.p>

        <ul aria-label="Photo wall" className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {images.map((image, index) => (
            <motion.li
              key={image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="mb-6 break-inside-avoid"
            >
              <button
                type="button"
                onClick={(e) => {
                  openerRef.current = e.currentTarget;
                  setSelectedImage(image);
                }}
                aria-label={`View highlights photo ${index + 1} full size`}
                className={`group block w-full rounded-xl bg-[#222] p-2 shadow-lg shadow-black/40 transition duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-primary-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${TILTS[index % TILTS.length]}`}
              >
                <span className="block overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Highlights photo ${index + 1}`}
                    width={800}
                    height={600}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full size photo"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              autoFocus
              className="absolute top-2 right-2 p-3 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage}
              alt="Full size"
              width={800}
              height={600}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

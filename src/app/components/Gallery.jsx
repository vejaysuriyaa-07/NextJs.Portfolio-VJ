"use client"; // Add this line at the top of your Gallery.jsx file

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/images/DSC07511.JPG",
    "/images/DSC07240.JPG",
    "/images/polish_save.JPG",
    "/images/IMG_0274_Original.jpg",
    "/images/IMG_0994.jpg",
    "/images/polish_save 2.JPG",
    "/images/polish_save 3.JPG",
    "/images/_DSC2231_Original.jpg",
    "/images/polish_save.PNG",
  ];

  return (
    <section id="gallery" className="py-16 bg-[#181818]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-white mb-12"
        >
          My Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-[400px] overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 z-10" />
              
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-500
                         group-hover:scale-110"
              />

              {/* Hover Effects */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 
                            group-hover:opacity-100 transition-all duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white 
                               hover:bg-white/20 transition-all duration-300 text-sm"
                    >
                      View Full Size
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

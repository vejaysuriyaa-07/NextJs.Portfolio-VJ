"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="lg:py-16 pt-20 z-10 relative">
      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "VejaySuriyaa ",
                1000,
                "Web Developer",
                1000,
                "Photographer",
                1000,
              ]}
              wrapper="span"
              speed={15}
              repeat={Infinity}
              className="type-animation"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Clicks by sunlight, stacks by moonlight – shaping stories and creating change in the quiet corners.
          </p>
        </motion.div>

        {/* Responsive profile image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-4 lg:mt-0 sm:col-span-4"
        >
          <div className="rounded-full bg- w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] flex justify-center items-center relative">
            <Image
              src="/images/fotor-20241030224834_copy-removebg-preview.png"
              alt="hero image"
              className="rounded-full object-cover"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>

      {/* Additional CSS for mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 640px) {
          #hero div:first-child {
            text-align: center;
            margin-bottom: 20px;
          }

          #hero div:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
          }

          /* Increase profile image size on mobile screens */
          .rounded-full {
            width: 180px !important;  /* Increased size for mobile */
            height: 180px !important;  /* Increased size for mobile */
          }
        }

        @media (max-width: 768px) {
          #hero div:first-child {
            text-align: center;
          }

          #hero div:last-child {
            margin-top: 20px;
          }

          /* Scaling down the photographer text to avoid overlap */
          .type-animation {
            font-size: 2rem; /* Adjust the size slightly on smaller screens */
          }
        }

        @media (min-width: 1024px) {
          .type-animation {
            font-size: 3.5rem;  /* Large screen size text */
          }
        }

        /* Preventing overlap by scaling the "Photographer" text */
        @media (min-width: 768px) and (max-width: 1024px) {
          .type-animation {
            transform: scale(0.9);  /* Reduce the size slightly on medium screens */
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;  /* Reduce font size on very small screens */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

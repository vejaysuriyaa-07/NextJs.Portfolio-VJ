"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import CircuitTraces from "./CircuitTraces";
import HeroTerminal from "./HeroTerminal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const heroLinks = [
  { label: "Resume", href: `${basePath}/resume.pdf`, icon: FileText, primary: true },
  { label: "GitHub", href: "https://github.com/vejaysuriyaa-07", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vejay-suriyaa-a274b3201", icon: Linkedin },
  { label: "Email", href: "mailto:senguttu@usc.edu", icon: Mail },
];

const Hero = () => {
  return (
    <section id="hero" className="lg:py-16 pt-20 z-10 relative">
      <CircuitTraces />
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
                "Vejay Suriyaa Senguttuvan",
                1000,
              ]}
              wrapper="span"
              speed={15}
              repeat={Infinity}
              className="type-animation"
            />
          </h1>
          <p className="text-[#ADB7BE] italic text-base sm:text-lg mb-3 lg:text-xl">
            MS ECE at USC (May 2027). Building the tools I wish existed.
          </p>
          <p className="text-[#ADB7BE] text-sm sm:text-base mb-8">
            Test-first verification, Cadence Xcelium/Innovus, C++ ATPG tooling,
            RL applied to chip design, agentic AI workflows.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            {heroLinks.map(({ label, href, icon: Icon, primary }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 text-sm sm:text-base font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${
                  primary
                    ? "bg-gradient-to-r from-primary-400 to-secondary-600 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                {label}
              </motion.a>
            ))}
          </div>
          <HeroTerminal />
        </motion.div>

        {/* Responsive profile image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center mt-4 lg:mt-0 sm:col-span-4"
        >
          <div className="rounded-full bg- w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] flex justify-center items-center relative">
            <span
              aria-hidden="true"
              className="absolute -inset-2 opacity-80 blur-md motion-safe:animate-spin-slow"
              style={{
                borderRadius: "9999px",
                background: "conic-gradient(from 0deg, #60a5fa, #dc2626, #60a5fa)",
              }}
            />
            <span
              aria-hidden="true"
              className="absolute -inset-1 motion-safe:animate-spin-slow"
              style={{
                borderRadius: "9999px",
                background: "conic-gradient(from 0deg, #60a5fa, #dc2626, #60a5fa)",
              }}
            />
            <Image
              src={`${basePath}/images/fotor-20241030224834_copy-removebg-preview.png`}
              alt="hero image"
              className="relative rounded-full object-cover"
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

          /* Scaling down the rotating title text to avoid overlap */
          .type-animation {
            font-size: 2rem; /* Adjust the size slightly on smaller screens */
          }
        }

        @media (min-width: 1024px) {
          .type-animation {
            font-size: 3.5rem;  /* Large screen size text */
          }
        }

        /* Preventing overlap by scaling the longest title on medium screens */
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

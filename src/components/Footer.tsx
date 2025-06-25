"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <section className="relative px-4 py-16 overflow-hidden">
      {/* Background SVG Circles */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-10 pointer-events-none"
        viewBox="0 0 265 259"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.1">
          <circle
            cx="132.5"
            cy="129.5"
            r="127.5"
            stroke="#BB22DF"
            strokeWidth="4"
          />
          <circle cx="133" cy="131" r="116" stroke="#CE4DED" strokeWidth="4" />
          <circle
            cx="133.5"
            cy="130.5"
            r="97.5"
            stroke="#BB22DF"
            strokeWidth="4"
          />
        </g>
      </svg>

      <svg
        className="absolute top-1/3 -left-20 w-[150px] h-[150px] opacity-10 pointer-events-none"
        width="199"
        height="195"
        viewBox="0 0 199 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.1">
          <path
            d="M195.996 97.2472C195.996 45.2625 152.859 3.00377 99.5 3.00377C46.1414 3.00377 3.00377 45.2625 3.00377 97.2472C3.00377 149.232 46.1414 191.491 99.5 191.491V194.494C44.5477 194.494 0 150.955 0 97.2472C0 43.539 44.5477 0 99.5 0C154.452 0 199 43.539 199 97.2472C199 150.955 154.452 194.494 99.5 194.494V191.491C152.859 191.491 195.996 149.232 195.996 97.2472Z"
            fill="#BB22DF"
          />
          <path
            d="M182.479 95.3698C182.479 48.5048 144.151 10.5132 96.8716 10.5132C49.5918 10.5132 11.264 48.5048 11.264 95.3698C11.264 142.235 49.5918 180.226 96.8716 180.226C144.151 180.226 182.479 142.235 182.479 95.3698ZM185.483 95.3698C185.483 143.919 145.785 183.23 96.8716 183.23C47.9579 183.23 8.26025 143.919 8.26025 95.3698C8.26025 46.8209 47.9579 7.5094 96.8716 7.5094C145.785 7.5094 185.483 46.8209 185.483 95.3698Z"
            fill="#CE4DED"
          />
          <path
            d="M174.97 97.9981C174.97 58.0589 141.601 25.5321 100.251 25.5321C58.901 25.5321 25.5321 58.0589 25.5321 97.9981C25.5321 137.937 58.901 170.464 100.251 170.464V173.468C57.3259 173.468 22.5283 139.679 22.5283 97.9981C22.5283 56.3173 57.3259 22.5283 100.251 22.5283C143.176 22.5283 177.974 56.3173 177.974 97.9981C177.974 139.679 143.176 173.468 100.251 173.468V170.464C141.601 170.464 174.97 137.937 174.97 97.9981Z"
            fill="#BB22DF"
          />
        </g>
      </svg>

      <svg
        className="absolute bottom-0 -right-20 w-[180px] h-[180px] opacity-10 pointer-events-none"
        viewBox="0 0 265 259"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="53" cy="53" r="53" fill="#CE4DED" fillOpacity="0.05" />
      </svg>

      {/* Main Text */}
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-3xl italic font-light text-white mb-4 select-none"
        >
          WarbleLive is redefining access control with blockchain security,
          offline verification, and smart wristbands, all built for the
          realities of African & Global events.
        </motion.h2>
      </div>
    </section>
  );
}

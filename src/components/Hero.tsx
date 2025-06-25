"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { JOIN_WAIT_LIST_URL } from "@/lib/site";
import { motion } from "framer-motion";

export default function Hero({ cabinSketch }: { cabinSketch: any }) {
  return (
    <section className="relative px-4 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Circle */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-1 left-1/4 transform -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 animate-pulse delay-400"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="125" cy="125" r="125" fill="#CE4DED" fillOpacity="0.05" />
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#BB22DF] leading-tight ${cabinSketch.className} select-none`}
        >
          Join The <span className="text-white">WarbleLive</span> Waitlist And
          Supercharge Your Events
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-xl md:text-2xl text-[#CE4DED] max-w-2xl mx-auto leading-relaxed ${cabinSketch.className} select-none`}
        >
          fraud-proof. Offline-ready. Blockchain-powered ticketing made for the
          next-gen event organizers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href={JOIN_WAIT_LIST_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="h-[56px] px-8 rounded-full 
              bg-[linear-gradient(79deg,_rgba(33,_10,_35,_0.64)_23.07%,_rgba(110,_22,_129,_0.64)_67.97%,_rgba(187,_34,_223,_0.64)_93.99%)] 
              shadow-[2px_2px_4px_0px_rgba(187,34,223,0.20)] text-white font-semibold cursor-pointer select-none"
            >
              Join the Waitlist
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 relative mx-auto max-w-4xl select-none"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="App Preview"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-2xl border border-slate-200"
            priority
          />

          {/* Pulsing SVGs */}
          <svg
            className="absolute -top-4 -left-4 opacity-80 animate-pulse delay-700"
            width="265"
            height="259"
            viewBox="0 0 265 259"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.1">
              <path
                d="M132.5 2C204.617 2 263 59.1266 263 129.5C263 199.873 204.617 257 132.5 257C60.3834 257 2 199.873 2 129.5C2 59.1266 60.3834 2 132.5 2Z"
                stroke="#BB22DF"
                strokeWidth="4"
              />
              <path
                d="M133 16C197.048 16 249 67.4707 249 131C249 194.529 197.048 246 133 246C68.9516 246 17 194.529 17 131C17 67.4707 68.9516 16 133 16Z"
                stroke="#CE4DED"
                strokeWidth="4"
              />
              <path
                d="M133.5 32C189.613 32 235 76.155 235 130.5C235 184.845 189.613 229 133.5 229C77.3872 229 32 184.845 32 130.5C32 76.155 77.3872 32 133.5 32Z"
                stroke="#BB22DF"
                strokeWidth="4"
              />
            </g>
          </svg>

          <svg
            className="absolute -top-3.5 -right-8 animate-pulse delay-300"
            width="206"
            height="206"
            viewBox="0 0 206 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="103"
              cy="103"
              r="103"
              fill="#CE4DED"
              fillOpacity="0.05"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

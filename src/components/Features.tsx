"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JOIN_WAIT_LIST_URL } from "@/lib/site";
import { featureItems } from "@/lib";
import { motion } from "framer-motion";
import { ListIcon } from "./icons/listIcon";

export default function Features({ cabinSketch }: { cabinSketch: any }) {
  return (
    <section className="px-4 pt-6 pb-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start md:items-center max-w-7xl mx-auto px-4 md:px-8">
          {/* Left Side */}
          <div className="space-y-8 md:pr-8">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-[28px] sm:text-[32px] md:text-[36px] select-none lg:text-[40px] font-normal leading-snug"
              >
                In the coming months, we're launching a new approach to event
                ticketing in Africa and beyond
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg font-normal leading-tight select-none"
              >
                If you want early access to this game-changing innovation,
                register your interest and become part of our early insider
                community, first in line for exclusive features, info, and
                rewards.
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href={JOIN_WAIT_LIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto max-w-[359px] h-[56px] px-8 rounded-full 
                      bg-[linear-gradient(79deg,_rgba(33,_10,_35,_0.64)_23.07%,_rgba(110,_22,_129,_0.64)_67.97%,_rgba(187,_34,_223,_0.64)_93.99%)] 
                      shadow-[2px_2px_4px_0px_rgba(187,34,223,0.20)] text-white font-semibold cursor-pointer select-none"
                  >
                    Register Your Interest
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Side with Divider */}
          <div className="space-y-8 md:pl-8 md:border-l md:border-white/20">
            {featureItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <ListIcon />
                  <h4
                    className={`text-[20px] select-none text-center sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#CE4DED] ${cabinSketch.className}`}
                  >
                    {item.title}
                  </h4>
                </div>
                <p className="select-none">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

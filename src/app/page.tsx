"use client";

import { Cabin_Sketch } from "next/font/google";

const cabinSketch = Cabin_Sketch({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function WaitlistLanding() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero cabinSketch={cabinSketch} />
      <Features cabinSketch={cabinSketch} />
      <Footer />
    </div>
  );
}

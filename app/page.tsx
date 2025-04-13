"use client";

import { motion } from "framer-motion";
import LatestOfferings from "./ui/home/latest-offerings";

import ParallaxAlbum from "./ui/home/parallax-album";

export default function Page() {
  return (
    <>
      <ParallaxAlbum />
      <main className="flex flex-col">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Discover the Art of Style
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
            Elevate your look with our premium, hand-picked collections.
          </p>
          <button className="px-6 py-3 text-white bg-black rounded-full hover:scale-105 transition">
            Shop Now
          </button>
        </motion.section>
      </main>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import ParallaxAlbum from "./ui/home/parallax-album";
import HeroParallax from "./ui/home/hero-parallax";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const images = [
    "/portraits/portrait1.jpg",
    "/portraits/portrait2.jpg",
    "/portraits/portrait3.jpg",
    "/portraits/portrait4.jpg",
    "/portraits/portrait5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + 1 >= images.length) {
          clearInterval(interval);
          setTimeout(() => {
            handleFinish();
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = (e: Event) => {
      if (!finished) {
        e.preventDefault();
        e.stopPropagation();
        handleFinish();
      }
    };

    if (!finished) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", onScroll, { passive: false });
      window.addEventListener("touchmove", onScroll, { passive: false });
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
  }, [finished]);

  const handleFinish = () => {
    if (fadeOut || finished) return;
    setFadeOut(true);
    setTimeout(() => {
      setFinished(true);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!finished && (
          <motion.div
            key="intro"
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{
              opacity: fadeOut ? 0 : 1,
              scale: fadeOut ? 0.95 : 1,
              y: fadeOut ? -50 : 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen z-50"
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`slide-${i}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Главный контент */}
      <main
        className={`${
          !finished
            ? "fixed top-0 left-0 w-full h-screen overflow-hidden"
            : "relative"
        } z-0`}
      >
        <HeroParallax />
        <ParallaxAlbum />
      </main>
    </>
  );
}

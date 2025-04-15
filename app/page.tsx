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
    "/portraits/SKIN0037.jpg",
    "/portraits/SKIN0057.jpg",
    "/portraits/SKIN0181.jpg",
    "/portraits/SKIN0239.jpg",
    "/portraits/SKIN0332.jpg",
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
    }, 4000);

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

  const text = "LEKA BEAUTY".split("");

  return (
    <>
      {/* Прелоудер с фото и текстом */}
      <AnimatePresence>
        {!finished && (
          <div className="fixed top-0 left-0 w-full h-screen z-50 overflow-hidden pointer-events-none bg-black">
            {/* Фон — теперь используем AnimatePresence с custom для плавного перехода */}
            <AnimatePresence mode="popLayout" custom={index}>
              <motion.img
                key={index}
                src={images[index]}
                alt={`slide-${index}`}
                custom={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full object-cover z-0 will-change-transform"
              />
            </AnimatePresence>
          
            {/* Затемнение и текст — исчезают при fadeOut */}
            <motion.div
              key="overlay"
              initial={{ opacity: 1 }}
              animate={{ opacity: fadeOut ? 0 : 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/10"
            >
              <h1 className="flex gap-2 text-white text-4xl md:text-6xl font-light tracking-[0.4em] uppercase">
                {text.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.07,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Главный контент — появляется ТОЛЬКО после прелоудера */}
      {finished && (
        <main className="relative z-0">
          <HeroParallax />
          <ParallaxAlbum />
        </main>
      )}
    </>
  );
}
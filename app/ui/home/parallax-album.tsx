"use client";

import LayoutWrapper from "@/app/ui/layout-wrapper";
import ParallaxImage from "@/app/ParallaxImage";
import { motion } from "framer-motion";
import "@/app/ui/home/parallax.css";

import ProductDetailCard from "./product-card";
import ScrollingGallery from "./marquee";
import LatestOfferings from "./latest-offerings";

import { useInView } from "react-intersection-observer";

export default function ParallaxAlbum() {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // });

  return (
    <LayoutWrapper>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col justify-center items-center text-center px-0"
      >
        <div className="w-full bg-white">
          {/* HERO */}
          <section className="relative min-h-screen w-full overflow-hidden">
            {/* Фоновое изображение */}
            <div className="absolute inset-0 z-0">
              <ParallaxImage
                src="/portraits/portrait-fur.jpg"
                alt="Hero"
                width={1920}
                height={1080}
                className="w-full h-full object-cover transform scale-[1.2] blur-sm sm:scale-100 sm:blur-none transition-all duration-700 ease-in-out"
              />
            </div>

            {/* Контент поверх изображения */}
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center sm:justify-around z-10 text-white mix-blend-difference text-base px-4 py-6 space-y-4 sm:space-y-0 sm:space-x-6">
              <p className="uppercase tracking-wide">Tour</p>
              <p className="uppercase tracking-wide">Updates</p>
              <p className="uppercase tracking-wide">Contact</p>
              <p className="uppercase tracking-wide">Merch</p>
            </div>
          </section>

          {/* Product-demo */}
          <ProductDetailCard />

          {/* Marquee - Effect */}
          <ScrollingGallery />

          {/* PROJECTS */}
          <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
            {/* Фоновая картинка */}
            <div className="absolute inset-0 z-0">
              <ParallaxImage
                src="/portraits/portrait2.jpg"
                height={1080}
                width={1920}
                alt="projects"
                className={""}
              />
            </div>

            {/* Контент поверх изображения */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center bg-black/40 backdrop-blur-sm">
              {/* Текст */}
              <p className="text-sm md:text-base text-neutral-200 max-w-2xl mb-8">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>

              {/* Список проектов */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                {["Sunrise", "Appolo", "Gianto", "Bombardo"].map((title) => (
                  <div key={title} className="space-y-1 text-left">
                    <h1 className="text-lg font-semibold uppercase">{title}</h1>
                    <p className="text-sm text-neutral-400">
                      Apple Music / Spotify / YouTube
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Latest Offerings — будет появляться только при inView */}
          <motion.div
            className="hover:cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LatestOfferings />
          </motion.div>

          {/* ABOUT */}
          <section className="relative w-full min-h-screen overflow-hidden text-white">
            {/* Картинка (фон) */}
            <div className="absolute inset-0 z-0">
              <ParallaxImage
                src="/portraits/portrait4.jpg"
                height={1080}
                width={1920}
                alt="about"
                className={""}
              />
              {/* Оверлей-затемнение */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            </div>

            {/* Контент поверх */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 text-center max-w-4xl mx-auto">
              <p className="text-base font-semibold uppercase text-neutral-200 mb-4 drop-shadow-md">
                Introduction
              </p>
              <p className="text-sm md:text-base leading-relaxed text-neutral-300 drop-shadow-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </section>

          <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
            {/* Контент поверх */}
            <div className="relative z-10 flex flex-col gap-12 items-center justify-center px-4 py-20 text-center max-w-6xl mx-auto">
              {/* Текст */}
              <p className="text-sm md:text-base text-neutral-300 max-w-2xl">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>

              {/* Вторая картинка */}
              <div className="w-full max-w-4xl aspect-video overflow-hidden">
                <ParallaxImage
                  src="/portraits/portrait3.jpg"
                  height={1080}
                  width={1920}
                  alt="projects"
                  className={""}
                />
              </div>

              {/* Список проектов */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                {["Sunrise", "Appolo", "Gianto", "Bombardo"].map((title) => (
                  <div key={title} className="space-y-1 text-left">
                    <h1 className="text-lg font-semibold uppercase">{title}</h1>
                    <p className="text-sm text-neutral-400">
                      Apple Music / Spotify / YouTube
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BANNER */}
          <section className="w-full py-24 px-4 md:px-12 bg-neutral-900 text-white grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video overflow-hidden">
              <ParallaxImage
                src="/portraits/portrait5.jpg"
                height={1080}
                width={1920}
                alt="projects"
                className={""}
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <p className="text-sm uppercase tracking-widest">Be the</p>
              <h1 className="text-3xl font-bold uppercase">First to know</h1>
              <p className="text-neutral-400 text-sm">
                Wanna hear the latest news on our upcoming music releases,
                touring and merch?
              </p>
              <button className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition">
                Join the newsletter
              </button>
            </div>
          </section>

          {/* FOOTER */}
          <section className="w-full py-16 px-4 md:px-12 bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-sm text-neutral-400">
                Instagram / TikTok / Discord
              </p>
              <div className="space-y-2">
                <p className="text-sm text-neutral-500 uppercase">Menu</p>
                {["Tour", "Updates", "Merch", "Contact"].map((item) => (
                  <h1 key={item} className="text-base font-semibold uppercase">
                    {item}
                  </h1>
                ))}
              </div>
              <p className="text-sm text-neutral-600">&copy; Designed by XXX</p>
            </div>
            <div className="space-y-4">
              <p>
                Join the newsletter <br />
                <button className="mt-2 px-4 py-1 bg-white text-black rounded hover:bg-neutral-200 transition">
                  Subscribe
                </button>
              </p>
              <div className="aspect-video overflow-hidden">
                <ParallaxImage
                  src="/portraits/portrait6.jpg"
                  height={1080}
                  width={1920}
                  alt="projects"
                  className={""}
                />
              </div>
              <p className="text-sm text-neutral-400">
                Spotify / Apple Music / YouTube
              </p>
            </div>
          </section>
        </div>
      </motion.section>
    </LayoutWrapper>
  );
}

"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
];

export default function InfiniteMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const speed = 0.5;

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;
    x.current -= speed;

    // Если дошли до конца, сбрасываем позицию
    if (Math.abs(x.current) >= containerRef.current.scrollWidth / 2) {
      x.current = 0;
    }

    containerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div className="overflow-hidden w-full bg-white py-6 cursor-grab active:cursor-grabbing">
      <div className="relative w-max flex gap-6 select-none" ref={containerRef}>
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="min-w-[250px] h-56 bg-gray-100 rounded-xl overflow-hidden shadow"
          >
            <img
              src={src}
              alt={`item-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

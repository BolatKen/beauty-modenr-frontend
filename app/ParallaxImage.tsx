"use client";

import React, { useRef, useEffect, useState } from "react";

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

const ParallaxImage = ({ src, alt, width, height, className }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const bounds = useRef<{ top: number; bottom: number } | null>(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      updateBounds();
    };

    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check

    const handleScroll = () => {
      if (!bounds.current || isMobile) return;
      const relativeScroll = window.scrollY - bounds.current.top;
      targetTranslateY.current = relativeScroll * 0.2;
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      if (imageRef.current) {
        const factor = isMobile ? 0 : 0.1;

        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          factor
        );

        const scale = isMobile ? 1.05 : 1.25;

        imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(${scale})`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile]);

  return (
    <img
      ref={imageRef}
      src={src}
      width={width}
      height={height}
      alt={alt}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1)",
        transition: "transform 0.2s ease-out",
      }}
      className={className}
    />
  );
};

export default ParallaxImage;

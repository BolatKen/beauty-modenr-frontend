"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // скорость (чем больше — тем медленнее)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // кривая
      //direction: 'vertical', // или 'horizontal'
      //gestureDirection: 'vertical',
      smoothWheel: true,
      //smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

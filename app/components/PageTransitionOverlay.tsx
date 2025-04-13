"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PageTransitionOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setIsOverlayVisible(true);
      setShowContent(false);

      const enterTimeout = setTimeout(() => {
        setIsOverlayVisible(false);
        setShowContent(true);
      }, 600); // overlay уходит вверх

      prevPath.current = pathname;

      return () => clearTimeout(enterTimeout);
    } else {
      // При первом заходе
      setIsOverlayVisible(false);
      setShowContent(true);
    }
  }, [pathname]);

  return (
    <div className="relative overflow-hidden min-h-screen">
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOverlayVisible && (
          <motion.div
            key="overlay"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-slate-900 z-[100]"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

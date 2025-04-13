"use client";

import { useEffect, useState } from "react";

const hotspots = [
  {
    id: 1,
    top: "60%",
    left: "80%",
    label: "Куртка – $200",
    price: "$200",
    description: "Тёплая зимняя куртка с натуральным мехом.",
    image: "/images/image5.jpg",
  },
  {
    id: 2,
    top: "40%",
    left: "27%",
    label: "Сумка – $120",
    price: "$120",
    description: "Стильная кожаная сумка для города.",
    image: "/images/image4.jpg",
  },
  {
    id: 3,
    top: "40%",
    left: "60%",
    label: "Очки – $80",
    price: "$80",
    description: "Солнцезащитные очки с поляризацией.",
    image: "/images/image7.jpg",
  },
];

export default function ParallaxAlbum() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(1 + scrollY / 1000, 1.4);

  return (
    <div className="relative w-full h-[200vh] top-0 overflow-hidden z-0">
      {/* Картинка (responsive) */}
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/portraits/portrait-mobile.jpg"
        />
        <img
          src="/portraits/portrait-sofa.jpg"
          alt="hero"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
          className="fixed top-0 left-0 w-full h-screen object-cover z-0"
        />
      </picture>

      {/* Hotspots */}
      <div className="fixed top-0 left-0 w-full h-screen z-20 pointer-events-none">
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="absolute group pointer-events-auto"
            style={{ top: spot.top, left: spot.left }}
          >
            <div className="w-4 h-4 bg-white border border-black rounded-full" />
            <div className="absolute top-6 left-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-white text-black text-sm rounded-lg shadow-xl w-64 p-4 flex gap-3 z-30">
              <img
                src={spot.image}
                alt={spot.label}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-base">{spot.label}</h3>
                <p className="text-xs text-gray-600">{spot.description}</p>
                <p className="mt-1 font-bold">{spot.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Скролл-блок */}
      <div className="relative z-10 h-[200vh]" />
    </div>
  );
}

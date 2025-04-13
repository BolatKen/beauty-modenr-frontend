"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Gatahithi AA",
    subtitle: "Kenya · Washed",
    price: "S$26.00",
    image: "/images/image1.jpg",
    description:
      "Enticing notes of ripe stonefruits is apparent on the nose, with a vibrant mix of red fruits and citrus flavours with a juicy finish...",
    notes: ["Hawthorn", "Apricot", "Pomelo"],
    badge: "NEW",
    slug: "gatahithi-aa",
  },
  {
    id: 2,
    name: "Dark Matter",
    subtitle: "Brazil × Colombia · Natural × Washed",
    price: "FROM S$16.00",
    image: "/images/image3.jpg",
    description: "Bold, velvety with notes of roasted nuts and chocolate.",
    notes: ["Chocolate", "Roasted Almond", "Black Plum"],
    badge: "SIGNATURE BLEND",
    slug: "dark-matter",
  },
  {
    id: 3,
    name: "Gatahithi AA",
    subtitle: "Kenya · Washed",
    price: "S$26.00",
    image: "/images/image1.jpg",
    description:
      "Enticing notes of ripe stonefruits is apparent on the nose, with a vibrant mix of red fruits and citrus flavours with a juicy finish...",
    notes: ["Hawthorn", "Apricot", "Pomelo"],
    badge: "NEW",
    slug: "gatahithi-aa",
  },
  {
    id: 4,
    name: "Dark Matter",
    subtitle: "Brazil × Colombia · Natural × Washed",
    price: "FROM S$16.00",
    image: "/images/image3.jpg",
    description: "Bold, velvety with notes of roasted nuts and chocolate.",
    notes: ["Chocolate", "Roasted Almond", "Black Plum"],
    badge: "SIGNATURE BLEND",
    slug: "dark-matter",
  },
  {
    id: 5,
    name: "Gatahithi AA",
    subtitle: "Kenya · Washed",
    price: "S$26.00",
    image: "/images/image1.jpg",
    description:
      "Enticing notes of ripe stonefruits is apparent on the nose, with a vibrant mix of red fruits and citrus flavours with a juicy finish...",
    notes: ["Hawthorn", "Apricot", "Pomelo"],
    badge: "NEW",
    slug: "gatahithi-aa",
  },
  {
    id: 6,
    name: "Dark Matter",
    subtitle: "Brazil × Colombia · Natural × Washed",
    price: "FROM S$16.00",
    image: "/images/image3.jpg",
    description: "Bold, velvety with notes of roasted nuts and chocolate.",
    notes: ["Chocolate", "Roasted Almond", "Black Plum"],
    badge: "SIGNATURE BLEND",
    slug: "dark-matter",
  },
  {
    id: 7,
    name: "Gatahithi AA",
    subtitle: "Kenya · Washed",
    price: "S$26.00",
    image: "/images/image1.jpg",
    description:
      "Enticing notes of ripe stonefruits is apparent on the nose, with a vibrant mix of red fruits and citrus flavours with a juicy finish...",
    notes: ["Hawthorn", "Apricot", "Pomelo"],
    badge: "NEW",
    slug: "gatahithi-aa",
  },
  {
    id: 8,
    name: "Dark Matter",
    subtitle: "Brazil × Colombia · Natural × Washed",
    price: "FROM S$16.00",
    image: "/images/image3.jpg",
    description: "Bold, velvety with notes of roasted nuts and chocolate.",
    notes: ["Chocolate", "Roasted Almond", "Black Plum"],
    badge: "SIGNATURE BLEND",
    slug: "dark-matter",
  },
  // Add more products here
];

export default function ShopPage() {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-display mb-2">ALL</h1>
        <p className="text-sm text-slate-600 mb-10 max-w-2xl">
          We constantly seek new and exciting coffee to add to our roasting tray
          all year round. Enjoy quality coffee wherever you may be.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["ALL", "COFFEE BEANS", "READY TO BREW", "MERCHANDISE"].map(
            (label) => (
              <button
                key={label}
                className="border border-slate-300 text-sm px-4 py-1 rounded-full hover:bg-slate-900 hover:text-white transition"
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 relative group bg-white hover:shadow-md transition-shadow"
            >
              {/* Badge */}
              <Link href={`products/${product.slug}`}>
                {product.badge && (
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 bg-slate-900 text-white rounded-full uppercase z-10">
                    {product.badge}
                  </span>
                )}
                {/* Image */}
                <div className="relative w-full pt-[133%] mb-4 bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain"
                  />
                </div>
                {/* Info */}
                <div className="space-y-1">
                  <p className="text-xs text-slate-500">{product.subtitle}</p>
                  <h3 className="text-sm font-bold">{product.name}</h3>
                  <p className="text-xs text-slate-600 leading-snug line-clamp-3">
                    {product.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-[10px] text-slate-700 mt-2">
                    {product.notes.map((note) => (
                      <li
                        key={note}
                        className="before:content-['•'] before:mr-1"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold mt-2">{product.price}</p>
                </div>
              </Link>

              {/* Add to Cart */}
              <button
                aria-label={`Add ${product.name} to cart`}
                className="absolute bottom-4 right-4 p-2 text-slate-500 hover:text-black transition"
              >
                🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

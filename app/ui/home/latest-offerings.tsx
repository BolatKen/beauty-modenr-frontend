"use client";

import Image from "next/image";
import Link from "next/link";
//import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "$79.99",
    image: "/images/image1.jpg",
  },
  {
    id: 2,
    name: "Urban Sneakers",
    price: "$89.99",
    image: "/images/image2.jpg",
  },
  {
    id: 3,
    name: "Premium Leather Bag",
    price: "$129.99",
    image: "/images/image3.jpg",
  },
  {
    id: 4,
    name: "Everyday Hoodie",
    price: "$59.99",
    image: "/images/image4.jpg",
  },
  {
    id: 5,
    name: "Classic Denim Jacket",
    price: "$79.99",
    image: "/images/image5.jpg",
  },
  {
    id: 6,
    name: "Urban Sneakers",
    price: "$89.99",
    image: "/images/image6.jpg",
  },
  {
    id: 7,
    name: "Premium Leather Bag",
    price: "$129.99",
    image: "/images/image7.jpg",
  },
  {
    id: 8,
    name: "Everyday Hoodie",
    price: "$59.99",
    image: "/images/image8.jpg",
  },
];

export default function LatestOfferings() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Latest Offerings
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our newest arrivals – fresh styles, quality materials, and
          timeless design.
        </p>
      </div>

      {/* Сетка товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Card key={product.id} product={product} delay={index * 0.1} />
        ))}
      </div>

      {/* Кнопка "View all" */}
      <div className="text-center mt-12">
        <Link
          href="/shop"
          className="inline-block px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}

function Card({ product, delay }: { product: any; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    // <motion.div
    //   ref={ref}
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={inView ? { opacity: 1, y: 0 } : {}}
    //   transition={{ duration: 0.6, delay }}
    //   className="group relative border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
    // >
    <>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={500}
        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.price}</p>
        <Link
          href={`/products/${product.id}`}
          className="mt-3 inline-block text-sm font-medium text-black underline underline-offset-4 hover:opacity-80"
        >
          View Product
        </Link>
      </div>
    </>
  );
  {
    /* </motion.div> */
  }
}

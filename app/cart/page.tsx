"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    name: "Gathaithi AA",
    image: "/images/image1.jpg",
    weight: "200g",
    grind: "Whole Bean",
    type: "Filter",
    price: 26.0,
  },
];

export default function CartPage() {
  return (
    <motion.div
      className="bg-gray-50 min-h-screen px-6 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <motion.h1
            className="text-3xl font-bold text-slate-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Your cart
          </motion.h1>

          {items.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row justify-between items-center gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {/* Info */}
              <div className="flex gap-4 items-center w-full sm:w-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-semibold text-slate-800">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    {item.type} / {item.weight}
                  </p>
                  <p className="text-sm text-gray-500">
                    Grind Size: {item.grind}
                  </p>
                </div>
              </div>

              {/* Qty */}
              <div className="flex items-center gap-4">
                <div className="flex border rounded">
                  <button className="px-3 py-1 text-slate-600 hover:bg-gray-100">
                    −
                  </button>
                  <span className="px-4 py-1 text-slate-800">1</span>
                  <button className="px-3 py-1 text-slate-600 hover:bg-gray-100">
                    +
                  </button>
                </div>
                <button className="text-xl text-gray-400 hover:text-red-500">
                  ×
                </button>
              </div>

              <div className="text-lg font-semibold text-slate-800">
                ${item.price.toFixed(2)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <p className="font-semibold text-slate-700">Summary</p>
            <button className="text-sm text-blue-600 hover:underline">
              + Add gift note
            </button>
            <hr />
            <div className="flex justify-between text-sm text-slate-600">
              <span>Subtotal</span>
              <span>
                ${items.reduce((acc, i) => acc + i.price, 0).toFixed(2)}
              </span>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-slate-900 text-white py-3 rounded-lg text-sm font-semibold hover:bg-slate-800 transition">
                CHECKOUT
              </button>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/shop"
              className="text-sm text-slate-800 hover:underline tracking-wide"
            >
              CONTINUE SHOPPING
            </Link>
          </div>

          {/* Suggestion */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-sm font-semibold text-slate-700">
              You may also like
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/image1.jpg"
                  alt="product"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <p className="text-sm text-slate-800 font-medium">
                  Gathaithi AA
                </p>
              </div>
              <div className="text-sm font-semibold text-slate-800">$26.00</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

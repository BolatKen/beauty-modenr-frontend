"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingBag, User, Search } from "lucide-react"; // или heroicons

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Лого */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          StoreName
        </Link>

        {/* Навигация — Desktop */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map(({ href, label }) => (
            <li key={href} className="group relative">
              <Link
                href={href}
                className={`transition-colors ${
                  pathname === href
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Иконки — Desktop */}
        <div className="hidden md:flex items-center gap-6 text-gray-600">
          <Link href="/search" className="hover:text-black">
            <Search size={20} />
          </Link>
          <Link href="/account" className="hover:text-black">
            <User size={20} />
          </Link>
          <Link href="/cart" className="relative hover:text-black">
            <ShoppingBag size={20} />
            {/* индикатор товаров */}
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">
              2
            </span>
          </Link>
        </div>

        {/* Бургер — Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Мобильное меню */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/90 backdrop-blur-md px-6 py-6 space-y-4 text-center text-sm font-medium"
        >
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block ${
                  pathname === href
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="flex justify-center gap-6 pt-2 text-gray-600">
            <Link href="/search" className="hover:text-black">
              <Search size={20} />
            </Link>
            <Link href="/account" className="hover:text-black">
              <User size={20} />
            </Link>
            <Link href="/cart" className="relative hover:text-black">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">
                2
              </span>
            </Link>
          </li>
        </motion.ul>
      )}
    </motion.header>
  );
}

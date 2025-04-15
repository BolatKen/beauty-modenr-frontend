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

// Цвет в RGB формате
const textColor = "rgb(19, 73, 55)";
const hoverColor = "rgb(15, 60, 45)"; // чуть темнее для ховера

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
        {/* Левая часть навигации (пустая для баланса) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium w-1/3 justify-start">
          {navItems.slice(0, 2).map(({ href, label }) => (
            <li key={href} className="group relative list-none">
              <Link
                href={href}
                className={`transition-colors ${
                  pathname === href ? `text-[${textColor}]` : `text-[${textColor}]/70 hover:text-[${textColor}]`
                }`}
                style={{
                  color: pathname === href ? textColor : `${textColor}B3`, // B3 = 70% opacity
                }}
              >
                {label}
              </Link>
              <span 
                className="absolute left-0 -bottom-1 w-0 h-0.5 transition-all group-hover:w-full"
                style={{ backgroundColor: textColor }}
              ></span>
            </li>
          ))}
        </div>

        {/* Лого по центру */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight mx-auto md:mx-0"
          style={{ color: textColor }}
        >
          StoreName
        </Link>

        {/* Правая часть навигации */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium w-1/3 justify-end">
          {navItems.slice(2).map(({ href, label }) => (
            <li key={href} className="group relative list-none">
              <Link
                href={href}
                className={`transition-colors ${
                  pathname === href ? `text-[${textColor}]` : `text-[${textColor}]/70 hover:text-[${textColor}]`
                }`}
                style={{
                  color: pathname === href ? textColor : `${textColor}B3`,
                }}
              >
                {label}
              </Link>
              <span 
                className="absolute left-0 -bottom-1 w-0 h-0.5 transition-all group-hover:w-full"
                style={{ backgroundColor: textColor }}
              ></span>
            </li>
          ))}

          {/* Иконки */}
          <div className="flex items-center gap-6 ml-6">
            <Link href="/search" className="hover:opacity-80" style={{ color: textColor }}>
              <Search size={20} />
            </Link>
            <Link href="/account" className="hover:opacity-80" style={{ color: textColor }}>
              <User size={20} />
            </Link>
            <Link href="/cart" className="relative hover:opacity-80" style={{ color: textColor }}>
              <ShoppingBag size={20} />
              {/* индикатор товаров */}
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Бургер — Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: textColor }}
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
                    ? `text-[${textColor}]`
                    : `text-[${textColor}]/70 hover:text-[${textColor}]`
                }`}
                style={{
                  color: pathname === href ? textColor : `${textColor}B3`,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="flex justify-center gap-6 pt-2">
            <Link 
              href="/search" 
              className="hover:opacity-80" 
              style={{ color: textColor }}
              onClick={() => setMenuOpen(false)}
            >
              <Search size={20} />
            </Link>
            <Link 
              href="/account" 
              className="hover:opacity-80" 
              style={{ color: textColor }}
              onClick={() => setMenuOpen(false)}
            >
              <User size={20} />
            </Link>
            <Link 
              href="/cart" 
              className="relative hover:opacity-80" 
              style={{ color: textColor }}
              onClick={() => setMenuOpen(false)}
            >
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
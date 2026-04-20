"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Carta", href: "/carta" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Galería", href: "/#galeria" },
  { label: "Testimonios", href: "/#testimonios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/carta") return pathname === "/carta";
    return false;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-wider text-brand-light">
                  FUEGO
                </span>
                <span className="text-[10px] font-light tracking-[0.3em] uppercase text-brand-gold">
                  Steakhouse & Grill
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-light tracking-wide transition-colors duration-300 hover:text-brand-light after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full ${
                    isActive(link.href)
                      ? "text-brand-gold after:w-full"
                      : "text-brand-light/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-4">
              <Link
                href="/#reservar"
                className="hidden sm:inline-flex items-center gap-2 rounded-none border border-brand-gold/40 bg-transparent px-6 py-2.5 text-xs font-medium tracking-widest uppercase text-brand-gold transition-all duration-300 hover:bg-brand-gold/10 hover:border-brand-gold"
              >
                <Phone className="h-3.5 w-3.5" />
                Reservar Mesa
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-brand-light/70 hover:text-brand-light transition-colors"
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-60 bg-brand-dark/98 backdrop-blur-xl"
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl font-bold tracking-wider text-brand-light">
                  FUEGO
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-brand-light/70 hover:text-brand-light transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col items-center justify-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-heading text-3xl font-light transition-colors hover:text-brand-gold ${
                        isActive(link.href)
                          ? "text-brand-gold"
                          : "text-brand-light/80"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <Link
                    href="/#reservar"
                    onClick={() => setMobileOpen(false)}
                    className="mt-4 inline-block border border-brand-gold/40 px-8 py-3 text-sm tracking-widest uppercase text-brand-gold transition-all hover:bg-brand-gold/10"
                  >
                    Reservar Mesa
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

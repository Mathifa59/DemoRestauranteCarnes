"use client";

import { motion } from "framer-motion";
import { Globe, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Navegar",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Especialidades", href: "#especialidades" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Galería", href: "#galeria" },
      { label: "Reservar", href: "#reservar" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-gold/8 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-wider text-brand-light">
                FUEGO
              </span>
              <span className="text-[10px] font-light tracking-[0.3em] uppercase text-brand-gold">
                Steakhouse & Grill
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-brand-light/40">
              Experiencia gastronómica de primer nivel. Cortes premium,
              parrilla artesanal y una atmósfera que transforma cada
              cena en un momento inolvidable.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              {[Globe, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-brand-gold/15 text-brand-light/40 transition-all duration-300 hover:border-brand-gold/40 hover:text-brand-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-gold/60">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-brand-light/40 transition-colors duration-300 hover:text-brand-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand-gold/8 pt-8 sm:flex-row">
          <p className="text-xs text-brand-light/25">
            &copy; 2026 FUEGO Steakhouse. Todos los derechos reservados.
          </p>
          <motion.a
            href="#inicio"
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-xs tracking-wider text-brand-light/25 transition-colors duration-300 hover:text-brand-gold"
          >
            Volver arriba
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80"
          alt="Premium steak on the grill"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="overlay-dark absolute inset-0" />
        {/* Extra bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-brand-dark to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 h-px w-24 bg-linear-to-r from-transparent via-brand-gold to-transparent"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 text-xs font-medium tracking-[0.4em] uppercase text-brand-gold"
        >
          Premium Steakhouse & Grill
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-3xl font-bold leading-tight tracking-tight text-brand-light xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          El Arte del
          <br />
          <span className="text-gradient-gold italic">Fuego</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-6 max-w-lg text-base font-light leading-relaxed text-brand-light/60 sm:text-lg md:max-w-xl"
        >
          Donde cada corte cuenta una historia. Carnes seleccionadas,
          brasa artesanal y una experiencia que despierta los sentidos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href="#reservar"
            className="group relative overflow-hidden bg-brand-primary px-10 py-4 text-xs font-semibold tracking-widest uppercase text-brand-light transition-all duration-300 hover:bg-brand-hover"
          >
            <span className="relative z-10">Reservar Mesa</span>
            <div className="absolute inset-0 -translate-x-full bg-brand-hover transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <Link
            href="/carta"
            className="border border-brand-light/20 px-10 py-4 text-xs font-medium tracking-widest uppercase text-brand-light/80 transition-all duration-300 hover:border-brand-gold/40 hover:text-brand-gold"
          >
            Ver Carta
          </Link>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-px w-16 bg-linear-to-r from-transparent via-brand-gold/40 to-transparent"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-brand-light/30">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-brand-light/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

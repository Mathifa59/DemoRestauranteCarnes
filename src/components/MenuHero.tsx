"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MenuHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80"
          alt="Grill fire ambiance"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-16 text-center">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-28 left-6 lg:left-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-wider text-brand-light/40 transition-colors duration-300 hover:text-brand-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Volver al inicio
          </Link>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 h-px w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xs font-medium tracking-[0.4em] uppercase text-brand-gold"
        >
          Nuestra Carta
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-brand-light sm:text-5xl lg:text-6xl"
        >
          Cortes selectos,{" "}
          <span className="italic text-brand-gold/90">fuego preciso</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-4 max-w-lg text-sm font-light leading-relaxed text-brand-light/50 sm:text-base"
        >
          Una carta diseñada para quienes disfrutan la carne en su mejor
          punto. Sabor a brasa en cada plato.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-px w-12 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"
        />
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";

export default function MenuCta() {
  return (
    <section className="relative overflow-hidden bg-brand-surface py-20 lg:py-28">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-gold/15 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-brand-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-medium tracking-[0.4em] uppercase text-brand-gold">
            Te esperamos
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-light sm:text-4xl">
            ¿Listo para{" "}
            <span className="italic text-brand-gold/90">la experiencia?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-brand-light/45">
            Reserva tu mesa y déjanos encargarnos del resto. Cada visita
            a FUEGO es un momento para recordar.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/#reservar"
              className="group inline-flex items-center gap-3 bg-brand-primary px-10 py-4 text-xs font-semibold tracking-widest uppercase text-brand-light transition-all duration-300 hover:bg-brand-hover"
            >
              <Phone className="h-4 w-4" />
              Reservar Mesa
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-brand-light/15 px-8 py-4 text-xs font-medium tracking-widest uppercase text-brand-light/60 transition-all duration-300 hover:border-brand-gold/30 hover:text-brand-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver al Inicio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

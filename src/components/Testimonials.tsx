"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alejandra Ruiz",
    role: "Crítica gastronómica",
    text: "Sin duda el mejor steakhouse de la ciudad. El Tomahawk es una experiencia religiosa. La maduración, el punto, la presentación — todo impecable.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Chef ejecutivo",
    text: "Como profesional, reconozco el nivel de obsesión detrás de cada plato. La calidad de los cortes y la técnica de parrilla están en otra liga.",
    rating: 5,
  },
  {
    name: "Isabella Torres",
    role: "Sommelier",
    text: "La carta de vinos está curada con un criterio excepcional. Cada maridaje eleva la experiencia. Un lugar donde cada detalle importa.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-brand-surface py-28 lg:py-36"
    >
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-gold/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-gold/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-medium tracking-[0.4em] uppercase text-brand-gold">
            Testimonios
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-light sm:text-4xl lg:text-5xl">
            Lo que dicen{" "}
            <span className="italic text-brand-gold/90">nuestros</span>{" "}
            invitados
          </h2>
          <div className="mx-auto mt-6 separator-line-wide" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="group relative border border-brand-gold/8 bg-brand-dark/50 p-8 transition-all duration-500 hover:border-brand-gold/20 lg:p-10"
            >
              {/* Quote icon */}
              <Quote className="mb-6 h-8 w-8 text-brand-gold/15" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm font-light italic leading-relaxed text-brand-light/60">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4 border-t border-brand-gold/8 pt-6">
                {/* Avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center bg-brand-card text-sm font-semibold text-brand-gold">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-light">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-light/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

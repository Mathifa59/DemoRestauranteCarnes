"use client";

import { motion } from "framer-motion";
import { Flame, Beef, Wine, Clock } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Brasa Artesanal",
    description:
      "Cocción lenta sobre carbón de encina, alcanzando el punto exacto que realza cada fibra del corte.",
  },
  {
    icon: Beef,
    title: "Cortes Selectos",
    description:
      "Importamos las mejores piezas de ganaderías premium. Maduración en seco de 30 a 60 días.",
  },
  {
    icon: Wine,
    title: "Cava Exclusiva",
    description:
      "Más de 200 etiquetas seleccionadas por nuestro sommelier para acompañar cada experiencia.",
  },
  {
    icon: Clock,
    title: "Tradición & Técnica",
    description:
      "Décadas de experiencia combinadas con técnicas modernas. Cada plato es una obra de precisión.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-28 lg:py-36">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-medium tracking-[0.4em] uppercase text-brand-gold">
            Nuestra Filosofía
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-brand-light sm:text-4xl lg:text-5xl">
            Más que un restaurante,
            <br />
            <span className="italic text-brand-gold/90">una experiencia</span>
          </h2>
          <div className="mx-auto mt-6 separator-line-wide" />
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative border border-brand-gold/10 bg-brand-surface/50 p-8 transition-all duration-500 hover:border-brand-gold/25 hover:bg-brand-card/30"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 h-4 w-px bg-brand-gold/30 transition-all duration-500 group-hover:h-6 group-hover:bg-brand-gold/60" />
              <div className="absolute top-0 left-0 h-px w-4 bg-brand-gold/30 transition-all duration-500 group-hover:w-6 group-hover:bg-brand-gold/60" />
              <div className="absolute bottom-0 right-0 h-4 w-px bg-brand-gold/30 transition-all duration-500 group-hover:h-6 group-hover:bg-brand-gold/60" />
              <div className="absolute bottom-0 right-0 h-px w-4 bg-brand-gold/30 transition-all duration-500 group-hover:w-6 group-hover:bg-brand-gold/60" />

              <feature.icon className="mb-6 h-8 w-8 text-brand-accent transition-colors duration-300 group-hover:text-brand-gold" />
              <h3 className="mb-3 font-[family-name:var(--font-heading)] text-xl font-semibold text-brand-light">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-light/50 font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

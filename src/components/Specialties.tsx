"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

const dishes = [
  {
    name: "Tomahawk Angus",
    cut: "1.2 kg · Madurado 45 días",
    price: "$89",
    tag: "Chef's Cut",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    description: "Nuestro corte insignia. Sabor intenso, textura perfecta.",
  },
  {
    name: "Ribeye Premium",
    cut: "400g · Madurado 30 días",
    price: "$62",
    tag: "Más Pedido",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    description: "Marmoleado excepcional que se derrite en cada bocado.",
  },
  {
    name: "Bife de Chorizo",
    cut: "350g · Corte Argentino",
    price: "$54",
    tag: "Clásico",
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&q=80",
    description: "El corte más noble de la parrilla argentina, en su punto.",
  },
  {
    name: "Costillas Ahumadas",
    cut: "Rack completo · 12h de cocción",
    price: "$72",
    tag: "Slow Cook",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    description: "Ahumadas lento sobre roble. La carne se deshace sola.",
  },
  {
    name: "Entraña a la Brasa",
    cut: "300g · Corte Tradicional",
    price: "$48",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=800&q=80",
    description: "Jugosa y llena de sabor. El secreto está en el fuego.",
  },
  {
    name: "Wagyu A5",
    cut: "200g · Importación Directa",
    price: "$145",
    tag: "Exclusivo",
    image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?w=800&q=80",
    description: "La máxima expresión de la carne. Exclusivo y sublime.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="relative overflow-hidden bg-brand-dark py-28 lg:py-36"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.4em] uppercase text-brand-gold">
              Nuestro Menú
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-brand-light sm:text-4xl lg:text-5xl">
              Especialidades
              <span className="italic text-brand-gold/90"> de la Casa</span>
            </h2>
          </div>
          <div className="mt-4 separator-line-wide lg:hidden" />
          <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-brand-light/50 lg:mt-0">
            Cada plato es una expresión de pasión por la carne.
            Selección, maduración y cocción en su punto perfecto.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.name}
              variants={cardVariants}
              className="group relative overflow-hidden border border-brand-gold/8 bg-brand-surface/40 transition-all duration-500 hover:border-brand-gold/20"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4 border border-brand-gold/30 bg-brand-dark/80 px-3 py-1 backdrop-blur-sm">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-gold">
                    {dish.tag}
                  </span>
                </div>

                {/* Price overlay on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-brand-gold">
                    {dish.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-brand-light">
                      {dish.name}
                    </h3>
                    <p className="mt-1 text-xs tracking-wide text-brand-gold/70">
                      {dish.cut}
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-brand-accent group-hover:text-brand-gold transition-colors duration-300">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-3 text-sm font-light leading-relaxed text-brand-light/45">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ver Carta CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col items-center text-center"
        >
          <div className="separator-line-wide mb-8" />
          <p className="max-w-md text-sm font-light leading-relaxed text-brand-light/40">
            Esto es solo una muestra. Descubre nuestra carta completa con
            entradas, cortes signature, parrilla, postres y coctelería.
          </p>
          <Link
            href="/carta"
            className="group mt-8 inline-flex items-center gap-3 border border-brand-gold/30 bg-brand-gold/5 px-10 py-4 text-xs font-semibold tracking-widest uppercase text-brand-gold transition-all duration-400 hover:bg-brand-gold/10 hover:border-brand-gold/60 hover:shadow-[0_0_40px_rgba(201,162,126,0.08)]"
          >
            <BookOpen className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Ver Carta Completa
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

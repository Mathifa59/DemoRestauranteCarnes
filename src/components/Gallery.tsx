"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80", alt: "Restaurant interior ambiance", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Seared steak close-up", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80", alt: "Wine selection", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80", alt: "Chef at the grill", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Plated dish presentation", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80", alt: "Live fire cooking", span: "col-span-2 row-span-1" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-brand-dark py-28 lg:py-36"
    >
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
            Galería
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-light sm:text-4xl lg:text-5xl">
            Momentos que{" "}
            <span className="italic text-brand-gold/90">inspiran</span>
          </h2>
          <div className="mx-auto mt-6 separator-line-wide" />
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-4 md:gap-4 lg:auto-rows-[280px]"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-dark/0 transition-all duration-500 group-hover:bg-brand-dark/40" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="text-xs tracking-wider text-brand-light/80">
                  {img.alt}
                </p>
              </div>
              {/* Border on hover */}
              <div className="absolute inset-0 border border-brand-gold/0 transition-all duration-500 group-hover:border-brand-gold/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

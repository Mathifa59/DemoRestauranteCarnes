"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-dark py-28 lg:py-40"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-primary/4 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* First block: text left, image right */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium tracking-[0.4em] uppercase text-brand-gold">
              Nuestra Historia
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-brand-light sm:text-4xl lg:text-5xl">
              Nacidos del{" "}
              <span className="italic text-brand-gold/90">fuego,</span>
              <br />
              forjados en{" "}
              <span className="italic text-brand-gold/90">tradición</span>
            </h2>
            <div className="mt-6 separator-line" />
            <p className="mt-8 text-base font-light leading-relaxed text-brand-light/55">
              Cada noche, nuestro grill cobra vida. El carbón de encina se
              enciende, el aroma inunda el salón, y nuestros maestros
              parrilleros transforman los mejores cortes en momentos
              inolvidables.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-brand-light/55">
              Fundado en 2008, FUEGO nació de una obsesión: devolver a la
              carne su protagonismo absoluto. Seleccionamos cada pieza,
              respetamos cada fibra, y cocinamos con la paciencia que solo
              el fuego verdadero permite.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-gold/10 pt-10">
              {[
                { value: "15+", label: "Años" },
                { value: "50k", label: "Comensales" },
                { value: "12", label: "Premios" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-brand-accent lg:text-4xl">
                    {stat.value}
                  </span>
                  <p className="mt-1 text-xs tracking-widest uppercase text-brand-light/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80"
                  alt="Chef preparing premium cuts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 h-full w-full border border-brand-gold/15 -z-10" />

              {/* Quote overlay */}
              <div className="absolute bottom-8 left-8 right-8 border-l-2 border-brand-gold/40 pl-6">
                <p className="font-[family-name:var(--font-heading)] text-lg italic text-brand-light/80">
                  &ldquo;La carne no se cocina, se escucha.&rdquo;
                </p>
                <p className="mt-2 text-xs tracking-widest uppercase text-brand-gold/60">
                  — Chef Martín Vega
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Second block: reversed, full width statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16"
        >
          {/* Image - smaller */}
          <div className="relative lg:col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
                alt="Open flame grill"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/30 to-brand-dark/60" />
            </div>
          </div>

          {/* Large editorial text */}
          <div className="lg:col-span-3">
            <h3 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-brand-light sm:text-5xl lg:text-6xl">
              Cada corte
              <br />
              tiene una{" "}
              <span className="text-gradient-gold italic">historia</span>
            </h3>
            <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-brand-light/50">
              Desde la selección del ganado hasta el plato, controlamos
              cada paso. Nuestra cámara de maduración en seco permite que
              cada corte desarrolle su máximo potencial de sabor, textura
              y aroma.
            </p>
            <a
              href="#reservar"
              className="mt-10 inline-block border-b border-brand-gold/40 pb-1 text-sm tracking-widest uppercase text-brand-gold transition-all duration-300 hover:border-brand-gold hover:text-brand-accent"
            >
              Descubre más →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

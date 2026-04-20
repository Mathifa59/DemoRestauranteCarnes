"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";

export default function Reservation() {
  return (
    <section
      id="reservar"
      className="relative overflow-hidden bg-brand-dark py-28 lg:py-36"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Restaurant ambiance"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-brand-primary/8 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-accent/6 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-medium tracking-[0.4em] uppercase text-brand-gold">
            Reservaciones
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-light sm:text-4xl lg:text-5xl">
            Tu mesa te{" "}
            <span className="italic text-brand-gold/90">espera</span>
          </h2>
          <div className="mx-auto mt-6 separator-line-wide" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center lg:col-span-2"
          >
            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  label: "Teléfono",
                  value: "+1 (555) 123-4567",
                  sub: "Lun - Dom · 12:00 - 23:00",
                },
                {
                  icon: MapPin,
                  label: "Ubicación",
                  value: "Av. del Fuego 1234",
                  sub: "Zona Premium, Ciudad",
                },
                {
                  icon: Clock,
                  label: "Horario",
                  value: "12:00 — 23:00",
                  sub: "Abierto todos los días",
                },
              ].map((item) => (
                <div key={item.label} className="group flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-brand-gold/20 transition-all duration-300 group-hover:border-brand-gold/40 group-hover:bg-brand-gold/5">
                    <item.icon className="h-5 w-5 text-brand-gold/70" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-brand-gold/60">
                      {item.label}
                    </p>
                    <p className="mt-1 font-heading text-lg text-brand-light">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-xs text-brand-light/40">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-10 relative aspect-video overflow-hidden border border-brand-gold/10 bg-brand-surface/50">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Location map"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="border border-brand-gold/30 bg-brand-dark/80 px-4 py-2 text-xs tracking-widest uppercase text-brand-gold backdrop-blur-sm">
                  Ver en mapa
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form className="border border-brand-gold/10 bg-brand-surface/30 p-5 backdrop-blur-sm sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="group">
                  <label className="mb-2 block text-[11px] font-medium tracking-widest uppercase text-brand-gold/60">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full border-b border-brand-gold/15 bg-transparent px-0 py-3 text-sm text-brand-light placeholder:text-brand-light/25 transition-all duration-300 focus:border-brand-gold/50"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="mb-2 block text-[11px] font-medium tracking-widest uppercase text-brand-gold/60">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full border-b border-brand-gold/15 bg-transparent px-0 py-3 text-sm text-brand-light placeholder:text-brand-light/25 transition-all duration-300 focus:border-brand-gold/50"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="mb-2 block text-[11px] font-medium tracking-widest uppercase text-brand-gold/60">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full border-b border-brand-gold/15 bg-transparent px-0 py-3 text-sm text-brand-light placeholder:text-brand-light/25 transition-all duration-300 focus:border-brand-gold/50"
                  />
                </div>

                {/* Guests */}
                <div className="group">
                  <label className="mb-2 block text-[11px] font-medium tracking-widest uppercase text-brand-gold/60">
                    Comensales
                  </label>
                  <select className="w-full border-b border-brand-gold/15 bg-transparent px-0 py-3 text-sm text-brand-light/50 transition-all duration-300 focus:border-brand-gold/50 [&>option]:bg-brand-dark [&>option]:text-brand-light">
                    <option value="">Seleccionar</option>
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3-4">3 - 4 personas</option>
                    <option value="5-6">5 - 6 personas</option>
                    <option value="7+">7+ personas</option>
                  </select>
                </div>

                {/* Date */}
                <div className="group">
                  <label className="mb-2 block text-[11px] font-medium tracking-widest uppercase text-brand-gold/60">
                    Fecha
                  </label>
                  <input
                    type="date"
                    className="w-full border-b border-brand-gold/15 bg-transparent px-0 py-3 text-sm text-brand-light/50 transition-all duration-300 focus:border-brand-gold/50"
                  />
                </div>

                {/* Time */}
                <div className="group">
                  <label className="mb-2 block text-[11px] font-medium tracking-widest uppercase text-brand-gold/60">
                    Hora
                  </label>
                  <select className="w-full border-b border-brand-gold/15 bg-transparent px-0 py-3 text-sm text-brand-light/50 transition-all duration-300 focus:border-brand-gold/50 [&>option]:bg-brand-dark [&>option]:text-brand-light">
                    <option value="">Seleccionar</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="mb-2 block text-[11px] font-medium tracking-widest uppercase text-brand-gold/60">
                  Mensaje (opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ocasión especial, alergias, preferencias..."
                  className="w-full resize-none border-b border-brand-gold/15 bg-transparent px-0 py-3 text-sm text-brand-light placeholder:text-brand-light/25 transition-all duration-300 focus:border-brand-gold/50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-8 flex w-full items-center justify-center gap-3 bg-brand-primary px-8 py-4 text-xs font-semibold tracking-widest uppercase text-brand-light transition-all duration-300 hover:bg-brand-hover"
              >
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                Confirmar Reserva
              </button>

              <p className="mt-4 text-center text-[11px] text-brand-light/30">
                Te confirmaremos tu reserva por email en menos de 2 horas
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

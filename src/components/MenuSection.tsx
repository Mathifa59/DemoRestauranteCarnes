"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Flame, Star, Users, ChefHat, Sparkle } from "lucide-react";

/* ─────────────────────────── Data ─────────────────────────── */

type Tag = "Recomendado" | "Más pedido" | "Para compartir" | "Chef's selection";

interface Dish {
  name: string;
  description: string;
  price: string;
  tag?: Tag;
  image?: string;
  featured?: boolean;
}

interface Category {
  id: string;
  label: string;
  intro?: string;
  dishes: Dish[];
}

const tagConfig: Record<Tag, { icon: typeof Flame; color: string }> = {
  Recomendado: { icon: Star, color: "text-brand-accent" },
  "Más pedido": { icon: Flame, color: "text-brand-hover" },
  "Para compartir": { icon: Users, color: "text-brand-gold" },
  "Chef's selection": { icon: ChefHat, color: "text-brand-gold" },
};

const categories: Category[] = [
  {
    id: "entradas",
    label: "Entradas",
    intro: "Para abrir el apetito con sabor a brasa.",
    dishes: [
      {
        name: "Provoleta a la Brasa",
        description:
          "Queso provolone fundido con chimichurri suave y pan tostado artesanal.",
        price: "S/ 28",
        tag: "Más pedido",
      },
      {
        name: "Chorizo Parrillero Premium",
        description:
          "Chorizo artesanal dorado al fuego, acompañado de salsa criolla y mostaza de la casa.",
        price: "S/ 24",
      },
      {
        name: "Mollejitas Crocantes",
        description:
          "Mollejas doradas a la parrilla con limón, perejil y toque ahumado.",
        price: "S/ 32",
        tag: "Recomendado",
      },
      {
        name: "Empanadas de Lomo y Queso",
        description:
          "Dos empanadas horneadas rellenas de lomo salteado, queso fundido y especias.",
        price: "S/ 26",
      },
      {
        name: "Tiradito de Roast Beef Ahumado",
        description:
          "Láminas finas de roast beef con emulsión cítrica, alcaparras y aceite de hierbas.",
        price: "S/ 34",
        tag: "Chef's selection",
      },
    ],
  },
  {
    id: "cortes-signature",
    label: "Cortes Signature",
    intro: "Nuestros cortes insignia. Selección, maduración y fuego.",
    dishes: [
      {
        name: "Bife Ancho Angus 350 g",
        description:
          "Corte jugoso con gran marmoleo, sellado a fuego vivo y acabado en mantequilla de hierbas.",
        price: "S/ 86",
        tag: "Recomendado",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
      },
      {
        name: "Ribeye a la Brasa 400 g",
        description:
          "Uno de los cortes más intensos de la casa, con excelente grasa infiltrada y sabor profundo.",
        price: "S/ 94",
        tag: "Más pedido",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
      },
      {
        name: "Entraña Fina 300 g",
        description:
          "Corte tierno, de sabor marcado, servido con chimichurri tradicional.",
        price: "S/ 78",
      },
      {
        name: "Picaña Prime 350 g",
        description:
          "Jugosa, dorada y con capa de grasa crocante, ideal para amantes de la parrilla clásica.",
        price: "S/ 82",
        tag: "Más pedido",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80",
      },
      {
        name: "Asado de Tira Braseado y Grillado",
        description:
          "Cocción lenta y terminado al carbón para una textura melosa y sabor ahumado.",
        price: "S/ 88",
        tag: "Chef's selection",
      },
      {
        name: "Tomahawk 1 kg",
        description:
          "Corte icónico para compartir, de gran presencia y sabor intenso. La pieza estrella de nuestra parrilla.",
        price: "S/ 210",
        tag: "Para compartir",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
      },
    ],
  },
  {
    id: "parrilla-clasica",
    label: "Parrilla Clásica",
    intro: "Los clásicos que nunca fallan, directo del fuego a tu mesa.",
    dishes: [
      {
        name: "Medallones de Lomo Fino 250 g",
        description:
          "Lomo tierno a la parrilla, servido con reducción de vino tinto.",
        price: "S/ 74",
        tag: "Recomendado",
      },
      {
        name: "Costillas BBQ de la Casa",
        description:
          "Cocidas lentamente y glaseadas con salsa BBQ ahumada artesanal.",
        price: "S/ 68",
        tag: "Más pedido",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600&q=80",
      },
      {
        name: "Pollo a la Brasa Premium",
        description:
          "Pechuga y encuentro marinados con especias, cocidos al fuego con acabado jugoso.",
        price: "S/ 52",
      },
      {
        name: "Pork Chop Ahumado 350 g",
        description:
          "Chuleta de cerdo gruesa, marinada y grillada, con notas dulces y ahumadas.",
        price: "S/ 64",
      },
      {
        name: "Parrilla Mixta para Compartir",
        description:
          "Selección de entraña, chorizo, morcilla, pollo y vegetales grillados.",
        price: "S/ 129",
        tag: "Para compartir",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
      },
    ],
  },
  {
    id: "acompanamientos",
    label: "Acompañamientos",
    intro: "El complemento perfecto para cada corte.",
    dishes: [
      {
        name: "Papas Fritas Trufadas",
        description: "Crujientes, con parmesano y toque de aceite trufado.",
        price: "S/ 19",
        tag: "Más pedido",
      },
      {
        name: "Puré Rústico de Papa Amarilla",
        description: "Cremoso, con mantequilla y pimienta negra.",
        price: "S/ 18",
      },
      {
        name: "Vegetales a la Parrilla",
        description: "Zucchini, espárragos, cebolla y pimientos al fuego.",
        price: "S/ 17",
      },
      {
        name: "Arroz Cremoso con Parmesano",
        description: "Textura suave y acabado mantecoso.",
        price: "S/ 18",
      },
      {
        name: "Ensalada de la Casa",
        description:
          "Mix de hojas, tomates cherry, pepino, cebolla encurtida y vinagreta ligera.",
        price: "S/ 16",
      },
      {
        name: "Camote Crocante",
        description: "Bastones de camote dorados con toque especiado.",
        price: "S/ 17",
        tag: "Recomendado",
      },
    ],
  },
  {
    id: "hamburguesas",
    label: "Hamburguesas",
    intro:
      "Blend artesanal, fuego directo y pan brioche. Todas incluyen papas fritas artesanales.",
    dishes: [
      {
        name: "La Brasa Burger",
        description:
          "Blend de res a la parrilla, queso cheddar, cebolla caramelizada y salsa especial.",
        price: "S/ 36",
      },
      {
        name: "Burger del Chef",
        description:
          "Carne Angus, queso provolone, tocino ahumado, rúcula y aioli de chimichurri.",
        price: "S/ 42",
        tag: "Chef's selection",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
      },
      {
        name: "Doble Steakhouse",
        description:
          "Doble carne smash, doble queso, pepinillos y mayonesa de la casa.",
        price: "S/ 46",
        tag: "Más pedido",
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    intro: "El cierre perfecto para una noche inolvidable.",
    dishes: [
      {
        name: "Cheesecake de Lúcuma",
        description: "Cremoso, suave y con base crocante. Sabor peruano en cada bocado.",
        price: "S/ 24",
        tag: "Recomendado",
      },
      {
        name: "Volcán de Chocolate Tibio",
        description:
          "Centro fundente, helado de vainilla y sal de Maras.",
        price: "S/ 26",
        tag: "Más pedido",
      },
      {
        name: "Pecan Pie Ahumado",
        description:
          "Tarta de nueces con caramelo oscuro y crema batida ligera.",
        price: "S/ 25",
      },
      {
        name: "Flan de la Casa",
        description: "Textura sedosa y caramelo profundo.",
        price: "S/ 22",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas & Vinos",
    intro: "Coctelería de autor, clásicos peruanos y una cava seleccionada.",
    dishes: [
      {
        name: "Pisco Sour Clásico",
        description:
          "El emblema peruano. Pisco quebranta, limón, jarabe, clara de huevo y amargo de angostura.",
        price: "S/ 26",
        tag: "Más pedido",
      },
      {
        name: "Chilcano de Autor",
        description: "Pisco, ginger ale, limón y un toque de maracuyá.",
        price: "S/ 24",
      },
      {
        name: "Negroni Ahumado",
        description:
          "Gin, campari, vermouth rojo — ahumado en mesa con madera de cerezo.",
        price: "S/ 32",
        tag: "Chef's selection",
      },
      {
        name: "Old Fashioned de la Casa",
        description:
          "Bourbon, azúcar demerara, amargo y twist de naranja flameado.",
        price: "S/ 34",
        tag: "Recomendado",
      },
      {
        name: "Aperol Spritz",
        description: "Aperol, prosecco, soda y rodaja de naranja.",
        price: "S/ 30",
      },
      {
        name: "Chicha Morada Artesanal",
        description:
          "Maíz morado, piña, canela, clavo y lima. Receta de la casa.",
        price: "S/ 14",
      },
      {
        name: "Limonada Clásica / Hierbabuena",
        description: "Limón fresco, hierbabuena y un toque de dulzura natural.",
        price: "S/ 12",
      },
      {
        name: "Maracuyá Frozen",
        description: "Pulpa de maracuyá, hielo frappe y toque cítrico.",
        price: "S/ 16",
      },
      {
        name: "Copa de Vino Tinto",
        description:
          "Selección rotativa de nuestro sommelier. Consulta la carta del día.",
        price: "S/ 24",
      },
      {
        name: "Botella de Vino Reserva",
        description:
          "Más de 80 etiquetas disponibles. Malbec, Cabernet, Tannat y más.",
        price: "desde S/ 95",
      },
    ],
  },
];

/* ─────────────────────────── Animations ─────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.25 },
  },
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

/* ─────────────────────────── Sub-components ─────────────────────────── */

function DishTag({ tag }: { tag: Tag }) {
  const config = tagConfig[tag];
  const Icon = config.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-brand-gold/15 bg-brand-dark/60 px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase backdrop-blur-sm ${config.color}`}
    >
      <Icon className="h-3 w-3" />
      {tag}
    </span>
  );
}

function FeaturedCard({ dish }: { dish: Dish }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden border border-brand-gold/8 bg-brand-surface/40 transition-all duration-500 hover:border-brand-gold/20"
    >
      {/* Image */}
      {dish.image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />

          {/* Tag on image */}
          {dish.tag && (
            <div className="absolute top-4 left-4">
              <DishTag tag={dish.tag} />
            </div>
          )}

          {/* Price overlay */}
          <div className="absolute bottom-4 right-4">
            <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-brand-gold drop-shadow-lg">
              {dish.price}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-brand-light transition-colors duration-300 group-hover:text-brand-gold">
          {dish.name}
        </h4>
        <p className="mt-2 text-sm font-light leading-relaxed text-brand-light/45">
          {dish.description}
        </p>
      </div>
    </motion.div>
  );
}

function DishRow({ dish }: { dish: Dish }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group border-b border-brand-gold/6 py-5 last:border-b-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h4 className="font-[family-name:var(--font-heading)] text-base font-semibold text-brand-light transition-colors duration-300 group-hover:text-brand-gold sm:text-lg">
              {dish.name}
            </h4>
            {dish.tag && <DishTag tag={dish.tag} />}
          </div>
          <p className="mt-1.5 max-w-lg text-sm font-light leading-relaxed text-brand-light/40">
            {dish.description}
          </p>
        </div>
        {/* Dotted line + price */}
        <div className="flex shrink-0 items-center gap-3 pt-1">
          <div className="hidden w-16 border-b border-dotted border-brand-gold/15 sm:block" />
          <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-brand-accent transition-colors duration-300 group-hover:text-brand-gold whitespace-nowrap">
            {dish.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const current = categories.find((c) => c.id === activeCategory)!;
  const featured = current.dishes.filter((d) => d.featured);
  const regular = current.dishes.filter((d) => !d.featured);

  return (
    <section
      id="carta"
      className="relative overflow-hidden bg-brand-dark py-16 lg:py-20"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />
      <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-brand-primary/4 blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 h-[300px] w-[300px] rounded-full bg-brand-accent/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Category Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <div className="relative">
            {/* Scroll shadow hints on mobile */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-brand-dark to-transparent sm:hidden" />
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-brand-dark to-transparent sm:hidden" />

            <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 pb-2 sm:flex-wrap sm:justify-center sm:gap-3 sm:px-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative shrink-0 px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "border border-brand-gold/40 bg-brand-gold/8 text-brand-gold"
                      : "border border-transparent text-brand-light/40 hover:text-brand-light/70 hover:border-brand-gold/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Category Content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-12"
          >
            {/* Category intro */}
            {current.intro && (
              <p className="mb-10 text-center text-sm font-light italic text-brand-light/35">
                {current.intro}
              </p>
            )}

            {/* Featured cards grid */}
            {featured.length > 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`grid gap-5 ${
                  featured.length === 1
                    ? "grid-cols-1 max-w-md mx-auto"
                    : featured.length === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : featured.length === 3
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {featured.map((dish) => (
                  <FeaturedCard key={dish.name} dish={dish} />
                ))}
              </motion.div>
            )}

            {/* Separator between featured and list */}
            {featured.length > 0 && regular.length > 0 && (
              <div className="my-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-gold/10" />
                <Sparkle className="h-4 w-4 text-brand-gold/20" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-gold/10" />
              </div>
            )}

            {/* Regular items list */}
            {regular.length > 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto max-w-3xl"
              >
                {regular.map((dish) => (
                  <DishRow key={dish.name} dish={dish} />
                ))}
              </motion.div>
            )}

            {/* If no featured, show all as list */}
            {featured.length === 0 && regular.length === 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto max-w-3xl"
              >
                {current.dishes.map((dish) => (
                  <DishRow key={dish.name} dish={dish} />
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom note ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto separator-line-wide mb-6" />
          <p className="text-xs font-light text-brand-light/25 leading-relaxed max-w-md mx-auto">
            Precios incluyen IGV. Consulta con tu mesero sobre alérgenos y
            opciones de personalización. Nuestra cocina trabaja con productos
            frescos sujetos a disponibilidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

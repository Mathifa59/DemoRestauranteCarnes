import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MenuHero from "@/components/MenuHero";
import MenuSection from "@/components/MenuSection";
import MenuCta from "@/components/MenuCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Carta — FUEGO Premium Steakhouse & Grill",
  description:
    "Descubre nuestra carta completa: cortes signature, parrilla clásica, entradas, postres y coctelería de autor. Precios en soles.",
};

export default function CartaPage() {
  return (
    <>
      <Navbar />
      <main>
        <MenuHero />
        <MenuSection />
        <MenuCta />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specialties from "@/components/Specialties";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Specialties />
        <Experience />
        <Gallery />
        <Reservation />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

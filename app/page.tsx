import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import Featured from "@/components/Featured";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground selection:bg-vivid-red selection:text-white">
      <div className="noise-bg"></div>

      <Navbar />
      <Hero />
      <Intro />
      <Gallery />
      <Featured />
      <Team />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

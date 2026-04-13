import Navigation from "../components/Navigation";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about my experience, skills, and passion for development.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Navigation />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </main>
  );
}

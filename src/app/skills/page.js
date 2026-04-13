import Navigation from "../components/Navigation";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export const metadata = {
  title: "Skills | Portfolio",
  description: "Explore my technical skills and technologies I work with.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Navigation />
      <div className="pt-16">
        <Skills />
      </div>
      <Footer />
    </main>
  );
}

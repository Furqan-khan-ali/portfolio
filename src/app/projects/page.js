import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Explore my portfolio of projects and development work.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Navigation />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

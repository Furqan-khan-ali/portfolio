import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me for collaboration or opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366f1]/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-[#f5f5f5]/80">Available for hire</span>
          </div>

          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Hi, I&apos;m <span className="gradient-text">FURQAN ALI KHAN</span>
          </h1>

          
          <p
            className="text-xl sm:text-2xl md:text-3xl text-[#f5f5f5]/70 mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Frontend Developer
          </p>

          
          <p
            className="max-w-2xl mx-auto text-[#f5f5f5]/60 text-lg mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            I build modern, responsive web applications using React and Next.js, and develop mobile apps with Flutter. 
            I also work with backend technologies like Node.js, Supabase, and SQL Server to create complete solutions.
          </p>

          
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105 animate-pulse-glow"
            >
              Let&apos;s Work Together
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full border border-[#2a2a2a] text-[#f5f5f5] font-semibold hover:bg-[#1a1a1a] transition-all duration-200"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com/Furqan-khan-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f5f5]/70 hover:text-[#6366f1] hover:border-[#6366f1] transition-all duration-200 text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f5f5]/70 hover:text-[#6366f1] hover:border-[#6366f1] transition-all duration-200 text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/FurqanAliK77477"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f5f5]/70 hover:text-[#6366f1] hover:border-[#6366f1] transition-all duration-200 text-sm"
            >
              Twitter
            </a>
          </div>
        </div>

          
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-[#f5f5f5]/40 hover:text-[#6366f1] transition-colors text-2xl">
            &darr;
          </a>
        </div>
      </div>
    </section>
  );
}

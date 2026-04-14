"use client";

const highlights = [
  {
    icon: "💻",
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
  },
  {
    icon: "💡",
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions.",
  },
  {
    icon: "🚀",
    title: "Fast Delivery",
    description: "Meeting deadlines without compromising quality.",
  },
  {
    icon: "👥",
    title: "Team Player",
    description: "Collaborating effectively to achieve shared goals.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Passionate about creating{" "}
              <span className="gradient-text">digital experiences</span>
            </h2>
            <p className="text-[#f5f5f5]/70 text-lg leading-relaxed mb-6">
              With over 5 years of experience in frontend development, I specialize in building
              modern web applications and mobile apps that combine beautiful design with powerful functionality.
              I&apos;m passionate about staying up-to-date with the latest technologies and best practices.
            </p>
            <p className="text-[#f5f5f5]/70 text-lg leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">5+</div>
                <div className="text-[#f5f5f5]/60 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">15+</div>
                <div className="text-[#f5f5f5]/60 text-sm mt-1">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">10+</div>
                <div className="text-[#f5f5f5]/60 text-sm mt-1">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="gradient-border p-6 group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center mb-4 group-hover:from-[#6366f1]/30 group-hover:to-[#8b5cf6]/30 transition-all text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[#f5f5f5]/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

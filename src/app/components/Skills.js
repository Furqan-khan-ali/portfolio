"use client";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "C#", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 50 },
      { name: "REST APIs", level: 92 },
      { name: "XAMPP", level: 88 },
      
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "Supabase", level: 88 },
      { name: "Firebase", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "SQL Server", level: 75 },
      
    ],
  },
  {
    title: "Mobile",
    icon: "📱",
    skills: [
      
      { name: "Flutter", level: 85 },
      { name: "Kotlin", level: 50 },
    ],
  },
  {
    title: "DevOps",
    icon: "☁️",
    skills: [
      
      { name: "Railway", level: 78 },
      { name: "Render", level: 78 },
      { name: "Vercel", level: 90 },
      
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#f5f5f5]/70 text-lg">
            I constantly learn and adapt to new technologies. Here&apos;s my current tech stack that
            helps me build amazing products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="gradient-border p-6 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center group-hover:from-[#6366f1]/30 group-hover:to-[#8b5cf6]/30 transition-all text-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-[#f5f5f5]/80">{skill.name}</span>
                      <span className="text-sm text-[#6366f1]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

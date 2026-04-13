"use client";

const projects = [
 {
  title: "Developer Portfolio Website",
  description:
    "A modern and fully responsive personal portfolio website built with Next.js to showcase my projects, skills, and experience. Features clean UI, fast performance, and optimized design to highlight my development work and attract potential clients.",
  image: "/project1.jpg",
  tags: ["Next.js", "React.js", "Tailwind CSS", "Responsive Design", "UI/UX", "Performance Optimization"],
  liveUrl: "https://my-portfolio-three-pi-71.vercel.app/",
  githubUrl: "https://github.com/Furqan-khan-ali/portfolio",
  featured: true,
 },
  {
    title: "Law Firm Website",
    description:
      "A modern and fully responsive law firm website designed to showcase legal services, improve client engagement, and provide an easy way for users to contact attorneys through integrated forms.",
    image: "/project1.jpg",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design", "UI/UX"],
    liveUrl: "https://law-firm-website-phi.vercel.app/",
    githubUrl: "https://github.com/Furqan-khan-ali/law-firm-website",
    featured: true,
  },
  {
    title: "University Management System",
    description:
      "A full-stack university management system that allows administrators to manage students, courses, and faculty efficiently. Features include authentication, CRUD operations, and MySQL database integration using XAMPP.",
    image: "/project2.jpg",
    tags: ["React.js", "PHP", "MySQL", "XAMPP", "REST API", "CRUD", "Authentication"],
    liveUrl: "https://university-management-system-rho.vercel.app/",
    githubUrl: "https://github.com/Furqan-khan-ali/University-Management-System-React-Js-MySQL-XAMPP",
    featured: true,
  },
  {
    title: "Invoice Management System",
    description:
      "A web-based invoice management system that enables users to create, manage, and track invoices in real time using Supabase. Designed for efficiency and ease of use with a clean dashboard interface.",
    image: "/project3.jpg",
    tags: ["React.js", "Supabase", "JavaScript", "Dashboard", "Real-time Data"],
    liveUrl: "https://invoice-system-peach.vercel.app/",
    githubUrl: "https://github.com/Furqan-khan-ali/invoice-system-with-supabase",
    featured: false,
  },
  {
    title: "University Portal System",
    description:
      "A student-focused university portal that provides access to academic records, course details, and announcements. Built with a scalable backend using Supabase for seamless data management.",
    image: "/project4.jpg",
    tags: ["React.js", "Supabase", "Authentication", "Dashboard", "API Integration"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Countries Explorer App",
    description:
      "A Flutter mobile application that fetches and displays detailed information about countries using REST APIs. Includes search functionality and interactive UI for better user experience.",
    image: "/project5.jpg",
    tags: ["Flutter", "Dart", "REST API", "Mobile UI", "API Integration"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "SemesterCell Mobile App",
    description:
      "A mobile application built with Flutter for managing semester data, integrated with a Node.js backend and SQL Server database. Enables efficient handling of academic records and operations.",
    image: "/project6.jpg",
    tags: ["Flutter", "Node.js", "SQL Server", "REST API", "Full Stack"],
    liveUrl: "#",
    githubUrl: "https://github.com/Furqan-khan-ali/UniPortal",
    featured: false,
  },
  {
    title: "Weather Forecast App",
    description:
      "A real-time weather application developed using Flutter that provides accurate weather updates based on user location through external API integration.",
    image: "/project7.jpg",
    tags: ["Flutter", "Dart", "REST API", "Location Services", "API Integration"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Book Finder App",
    description:
      "A mobile application that allows users to search and explore books using the Google Books API. Features include search functionality, book details, and a clean user interface.",
    image: "/project8.jpg",
    tags: ["Flutter", "Dart", "Google Books API", "Search", "Mobile UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Nutrition Tracker App",
    description:
      "A Flutter-based mobile application that helps users track nutritional information and daily food intake using external REST APIs with an intuitive and user-friendly interface.",
    image: "/project9.jpg",
    tags: ["Flutter", "Dart", "REST API", "Health Tracking", "Mobile UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#f5f5f5]/70 text-lg">
            Here are some of my recent projects. Each one was built with attention to detail,
            performance, and user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`gradient-border overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
                  <div className="text-6xl font-bold text-[#2a2a2a]">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#6366f1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#f5f5f5]/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 relative z-20">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#f5f5f5]/70 hover:text-[#6366f1] transition-colors pointer-events-auto"
                    >
                      <span className="text-lg">🔗</span> Live Demo
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#f5f5f5]/70 hover:text-[#6366f1] transition-colors pointer-events-auto"
                    >
                      <span className="text-lg">💻</span> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Furqan-khan-ali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2a2a2a] text-[#f5f5f5] hover:bg-[#1a1a1a] transition-all duration-200"
          >
            <span className="text-lg">💻</span> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

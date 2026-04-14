"use client";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Furqan-khan-ali" },
  { name: "LinkedIn", href: "https://www.linkedin.com/feed/" },
  { name: "Twitter", href: "https://x.com/FurqanAliK77477" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="text-xl font-bold gradient-text">
            Portfolio
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#f5f5f5]/60 hover:text-[#6366f1] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg text-[#f5f5f5]/60 hover:text-[#6366f1] hover:bg-[#1a1a1a] transition-all text-sm"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#2a2a2a] text-center">
          <p className="text-sm text-[#f5f5f5]/50">
            Made by Furqan Ali Khan
          </p>
          <p className="text-sm text-[#f5f5f5]/40 mt-2">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

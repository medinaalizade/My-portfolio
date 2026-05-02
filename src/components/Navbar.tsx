import React from "react";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    // Updated background to be semi-transparent with a blur (backdrop-blur)
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-purple-500/10 text-white z-50 transition-all duration-300">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
        
        {/* Logo with a more prominent style */}
        <h1 className="text-2xl font-black tracking-tighter text-white">
          Madina<span className="text-purple-500">.dev</span>
        </h1>

        {/* Links with increased gap and better font weight */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="group relative">
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-gray-300 group-hover:text-purple-400 transition-colors duration-300"
              >
                {link.name}
              </a>
              {/* Subtle animated underline on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Call to action button in Navbar for extra "completeness" */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-5 py-2 border border-purple-500/50 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-black transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
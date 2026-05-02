import React from "react";

// Define type for navigation links
type NavLink = {
  name: string; // text shown
  href: string; // where it scrolls
};

// Array of links
const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      {/* z-50 - keeps it above everything */}

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* px - padding left and right */}
        {/* py - padding top and bottom */}

        <h1 className="text-xl font-bold text-purple-500">
          Medina.dev
        </h1>

        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* key is required in React lists */}

              <a
                href={link.href}
                className="hover:text-purple-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
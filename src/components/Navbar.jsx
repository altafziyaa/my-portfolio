import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="
    relative inline-block
    text-2xl text-primary
    font-bold
    cursor-pointer
    transition-transform
    hover:scale-105
  "
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Md. Altaf
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50"></span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-muted">
          <li>
            <a href="#about" className="hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-primary">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-muted">
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="hover:text-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setOpen(false)}
                className="hover:text-primary"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="hover:text-primary"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
